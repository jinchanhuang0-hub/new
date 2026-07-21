const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
  });
}

document.querySelectorAll(".products-menu").forEach((menu) => {
  let closeTimer;

  const openMenu = () => {
    window.clearTimeout(closeTimer);
    menu.classList.add("is-open");
  };

  const closeMenu = () => {
    closeTimer = window.setTimeout(() => {
      menu.classList.remove("is-open");
    }, 260);
  };

  menu.addEventListener("mouseenter", openMenu);
  menu.addEventListener("mouseleave", closeMenu);
  menu.addEventListener("focusin", openMenu);
  menu.addEventListener("focusout", closeMenu);
});

document.querySelectorAll("[data-brand-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-brand-track]");
  const slides = Array.from(carousel.querySelectorAll(".brand-slide"));
  const dots = Array.from(carousel.querySelectorAll("[data-brand-dot]"));
  const prev = carousel.querySelector("[data-brand-prev]");
  const next = carousel.querySelector("[data-brand-next]");
  let current = 0;
  let timer;

  const setSlide = (index) => {
    current = (index + slides.length) % slides.length;
    if (track) track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === current);
    });
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => setSlide(current + 1), 4200);
  };

  prev?.addEventListener("click", () => {
    setSlide(current - 1);
    start();
  });

  next?.addEventListener("click", () => {
    setSlide(current + 1);
    start();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      setSlide(Number(dot.dataset.brandDot || 0));
      start();
    });
  });

  carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
  carousel.addEventListener("mouseleave", start);
  setSlide(0);
  start();
});

document.querySelectorAll(".review-card .show-more").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".review-card");
    const more = card?.querySelector(".review-more");
    if (!more) return;
    const expanded = button.getAttribute("aria-expanded") === "true";
    more.hidden = expanded;
    button.setAttribute("aria-expanded", expanded ? "false" : "true");
    button.textContent = expanded ? "+ Show More" : "- Show Less";
  });
});

document.querySelectorAll("[data-review-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-review-track]");
  const cards = Array.from(carousel.querySelectorAll(".review-card"));
  const dots = Array.from(carousel.querySelectorAll("[data-review-dot]"));
  const prev = carousel.querySelector("[data-review-prev]");
  const next = carousel.querySelector("[data-review-next]");
  let current = 0;

  const visibleCount = () => {
    if (window.matchMedia("(max-width: 640px)").matches) return 1;
    if (window.matchMedia("(max-width: 980px)").matches) return 2;
    return 3;
  };

  const maxIndex = () => Math.max(0, cards.length - visibleCount());

  const setReviewSlide = (index) => {
    current = Math.min(Math.max(index, 0), maxIndex());
    if (track && cards[0]) {
      const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0;
      const step = cards[0].getBoundingClientRect().width + gap;
      track.style.transform = `translateX(-${current * step}px)`;
    }
    dots.forEach((dot, dotIndex) => {
      const visible = dotIndex <= maxIndex();
      dot.hidden = !visible;
      dot.classList.toggle("is-active", dotIndex === current);
    });
  };

  prev?.addEventListener("click", () => setReviewSlide(current - 1));
  next?.addEventListener("click", () => setReviewSlide(current + 1));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => setReviewSlide(Number(dot.dataset.reviewDot || 0)));
  });
  window.addEventListener("resize", () => setReviewSlide(current));
  setReviewSlide(0);
});

document.querySelectorAll(".upload-box input[type='file']").forEach((input) => {
  input.addEventListener("change", () => {
    const label = input.closest(".upload-box")?.querySelector("span:last-child");
    if (!label) return;
    label.textContent = input.files?.[0]?.name || "Drag and drop a file here or click to choose";
  });
});

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const main = gallery.querySelector("[data-main-image]");
  gallery.querySelectorAll("[data-thumb]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!main) return;
      main.src = button.dataset.thumb || main.src;
      main.alt = button.dataset.alt || main.alt;
    });
  });
});

const videoLightbox = document.querySelector("[data-video-lightbox]");
const videoLightboxPlayer = videoLightbox?.querySelector(".video-lightbox-player");
const closeVideoLightbox = () => {
  if (!videoLightbox || !videoLightboxPlayer) return;
  videoLightboxPlayer.pause();
  videoLightboxPlayer.removeAttribute("src");
  videoLightboxPlayer.load();
  videoLightbox.hidden = true;
  videoLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-video-lightbox-open");
};

document.querySelectorAll("[data-video-lightbox-trigger]").forEach((trigger) => {
  const openVideoLightbox = () => {
    if (!videoLightbox || !videoLightboxPlayer) return;
    const inlineVideo = trigger.querySelector("video");
    inlineVideo?.pause();
    videoLightboxPlayer.src = trigger.dataset.videoSrc || inlineVideo?.currentSrc || "";
    videoLightboxPlayer.poster = trigger.dataset.videoPoster || inlineVideo?.poster || "";
    videoLightbox.hidden = false;
    videoLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-video-lightbox-open");
    videoLightboxPlayer.focus();
    videoLightboxPlayer.play().catch(() => {});
  };

  trigger.addEventListener("click", (event) => {
    if (event.target.closest("video")) return;
    openVideoLightbox();
  });
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openVideoLightbox();
    }
  });
});

document.querySelectorAll("[data-video-lightbox-close]").forEach((button) => {
  button.addEventListener("click", closeVideoLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeVideoLightbox();
});

const productDetailData = {
  magnets: {
    title: "Custom Fridge Magnets Manufacturer",
    pageTitle: "Custom Fridge Magnets Manufacturer | Metal, Enamel & Souvenir Magnets",
    name: "Custom Fridge Magnets",
    image: "assets/images/product-keychains.jpg",
    intro: "Custom metal fridge magnets for tourism souvenirs, retail gifts, brand campaigns, events and promotional merchandise.",
    meta: "Order custom fridge magnets for tourist souvenirs, city gifts, event merchandise and retail gift programs with OEM/ODM support."
  },
  pins: {
    title: "Custom Enamel Pins Manufacturer",
    pageTitle: "Custom Enamel Pins Manufacturer | OEM/ODM Factory, Low MOQ",
    name: "Custom Enamel Pins",
    image: "assets/images/product-pins.jpg",
    intro: "Custom soft enamel, hard enamel, die struck and printed pins for brands, events, schools and promotional campaigns.",
    meta: "Order custom enamel pins from Unique Pin, a China OEM/ODM metal crafts manufacturer with free artwork design, low MOQ, fast sampling and strict QC."
  },
  medals: {
    title: "Custom Medals Manufacturer",
    pageTitle: "Custom Medals Manufacturer | Sports, Award & Ribbon Medals",
    name: "Custom Medals",
    image: "assets/images/product-medals.jpg",
    intro: "Custom sports medals, school medals, club awards and event medals with ribbons, plating, enamel and 3D relief options.",
    meta: "Order custom sports medals, award medals and ribbon medals from Unique Pin with OEM/ODM manufacturing, free artwork support and strict quality control."
  },
  "bottle-openers": {
    title: "Custom Bottle Openers Manufacturer",
    pageTitle: "Custom Bottle Openers Manufacturer | Metal & Keychain Openers",
    name: "Custom Bottle Openers",
    image: "assets/images/product-buckles.jpg",
    intro: "Custom bottle openers with logo engraving, enamel color, plating, die casting and retail or gift packaging options.",
    meta: "Create custom bottle openers and keychain bottle openers that combine practical use with logo promotion, event gifts and retail packaging."
  },
  coins: {
    title: "Custom Challenge Coins Manufacturer",
    pageTitle: "Custom Challenge Coins Manufacturer | OEM/ODM Metal Coins",
    name: "Challenge Coins / Commemorative Coins",
    image: "assets/images/product-coins.jpg",
    intro: "Custom military coins, police coins, government coins, corporate coins and commemorative coins with double-sided designs.",
    meta: "Create custom challenge coins and commemorative coins with antique plating, 3D relief, double-sided artwork and factory-direct OEM/ODM support."
  },
  keychains: {
    title: "Custom Metal Keychains Manufacturer",
    pageTitle: "Custom Metal Keychains Manufacturer | Enamel & Logo Keychains",
    name: "Custom Keychains",
    image: "assets/images/product-keychains.jpg",
    intro: "Custom metal keychains for promotional gifts, tourism souvenirs, retail merchandise and brand campaigns.",
    meta: "Create custom metal keychains, enamel keychains and promotional keychains for retail gifts, events, souvenirs and brand merchandise."
  },
  buckles: {
    title: "Custom Belt Buckles Manufacturer",
    pageTitle: "Custom Belt Buckles Manufacturer | Western & Logo Buckles",
    name: "Custom Belt Buckles",
    image: "assets/images/product-buckles.jpg",
    intro: "Custom metal belt buckles with 2D/3D relief, antique plating, enamel color and premium gift packaging options.",
    meta: "Design custom belt buckles for clubs, fashion brands, Western themes, awards and promotional merchandise with factory-direct OEM/ODM service."
  },
  "golf-accessories": {
    title: "Custom Golf Ball Markers, Hat Clips & Divot Tools",
    pageTitle: "Custom Golf Ball Markers, Hat Clips & Divot Tools | OEM Factory",
    name: "Golf Divot Tools, Hat Clips & Ball Markers",
    image: "assets/images/product-coins.jpg",
    intro: "Custom golf divot tools, hat clips and ball markers for tournaments, clubs, courses, brand promotions and souvenir programs.",
    meta: "Order custom golf ball markers, hat clips and divot tools for tournaments, clubs, resorts and corporate golf events."
  },
  cufflinks: {
    title: "Custom Cufflinks Manufacturer",
    name: "Custom Cufflinks",
    image: "assets/images/product-cufflinks.jpg",
    intro: "Custom cufflinks for corporate gifts, clubs, uniforms, formal events and premium brand merchandise.",
    meta: "Order custom cufflinks with logo engraving, enamel fill, plating, gift box packaging and OEM/ODM service."
  },
  "cufflinks-tieclips": {
    title: "Custom Cufflinks & Tie Clips Manufacturer",
    pageTitle: "Custom Cufflinks & Tie Clips Manufacturer | Logo Formal Gifts",
    name: "Custom Cufflinks & Tie Clips",
    image: "assets/images/product-cufflinks.jpg",
    intro: "Premium custom cufflinks and tie clips for corporate gift sets, clubs, uniforms, formal events and branded merchandise.",
    meta: "Design custom cufflinks and tie clips for corporate gifts, retail collections, clubs, formal events and branded accessories."
  },
  tieclips: {
    title: "Custom Tie Clips Manufacturer",
    name: "Custom Tie Clips",
    image: "assets/images/product-tie-clips.jpg",
    intro: "Custom tie clips with logo engraving, enamel color, plating and gift packaging for corporate and uniform projects.",
    meta: "Order custom tie clips with free artwork design, low MOQ, fast production and global delivery support."
  }
};

const productParams = new URLSearchParams(window.location.search);
const productKey = productParams.get("product");
const productData = productDetailData[productKey];

if (productData && window.location.pathname.includes("product-detail")) {
  document.title = productData.pageTitle || `${productData.title} | OEM/ODM Factory, Low MOQ`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", productData.meta);

  const detailTitle = document.querySelector(".page-hero h1");
  const detailLead = document.querySelector(".page-hero p");
  const productHeading = document.querySelector(".detail-layout h2");
  const productIntro = document.querySelector(".detail-layout h2 + p");
  const mainImage = document.querySelector("[data-main-image]");
  const nameCell = document.querySelector(".spec-table tr:first-child td");

  if (detailTitle) detailTitle.textContent = productData.title;
  if (detailLead) detailLead.textContent = productData.meta;
  if (productHeading) productHeading.textContent = productData.name;
  if (productIntro) productIntro.textContent = productData.intro;
  if (mainImage) {
    mainImage.src = productData.image;
    mainImage.alt = `${productData.name} product preview`;
  }
  if (nameCell) nameCell.textContent = productData.name;
}

const getFormNotice = (form) => form.querySelector("[data-form-notice]")
  || form.closest(".contact-card, .product-inquiry-card, .contact-layout")?.querySelector("[data-form-notice]");

document.querySelectorAll("[data-inquiry-form]").forEach((inquiryForm) => {
  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const notice = getFormNotice(inquiryForm);
    const submitButton = inquiryForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton?.textContent;
    const formData = new FormData(inquiryForm);

    formData.set("pageUrl", window.location.href);
    formData.set("pageTitle", document.title);

    if (notice) {
      notice.style.color = "var(--navy)";
      notice.textContent = "Sending your inquiry...";
    }
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Inquiry could not be sent. Please email ceo@chinauniquepin.com directly.");
      }

      if (notice) {
        notice.style.color = "var(--navy)";
        notice.textContent = "Thank you for your inquiry. Our team will reply within 1 business day.";
      }
      inquiryForm.reset();
    } catch (error) {
      if (notice) {
        notice.style.color = "#b42318";
        notice.textContent = error.message || "Inquiry could not be sent. Please email ceo@chinauniquepin.com directly.";
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText || "Submit Inquiry";
      }
    }
  });
});

const openProductInquiryModal = (productName = "") => {
  const modal = document.querySelector("[data-product-inquiry-modal]");
  if (!modal) return false;

  const productSelect = modal.querySelector('select[name="product"]');
  if (productSelect && productName) {
    const normalizedProductName = productName.trim().toLowerCase();
    const matchingOption = [...productSelect.options].find((option) => {
      const optionText = option.textContent.trim().toLowerCase();
      return optionText === normalizedProductName
        || optionText.includes(normalizedProductName)
        || normalizedProductName.includes(optionText);
    });
    if (matchingOption) productSelect.value = matchingOption.value || matchingOption.textContent;
  }

  modal.hidden = false;
  modal.classList.add("is-open");
  document.body.classList.add("quote-modal-open");
  modal.querySelector(".product-inquiry-card input, .product-inquiry-card select, .product-inquiry-card textarea, .product-inquiry-card button")?.focus();
  return true;
};

const closeProductInquiryModal = () => {
  const modal = document.querySelector("[data-product-inquiry-modal]");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.hidden = true;
  document.body.classList.remove("quote-modal-open");
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest?.("[data-product-inquiry-trigger], .home-product-card[href]");
  if (!trigger) return;

  const productName = trigger.dataset.productInquiryProduct
    || trigger.querySelector?.("h3")?.textContent?.trim()
    || trigger.textContent?.trim()
    || "";

  if (openProductInquiryModal(productName)) {
    event.preventDefault();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest?.("[data-product-inquiry-close]")) {
    event.preventDefault();
    closeProductInquiryModal();
    return;
  }

  const modal = event.target.closest?.("[data-product-inquiry-modal]");
  if (modal && event.target === modal) closeProductInquiryModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProductInquiryModal();
});

const activateProductContent = () => {
  const productSections = document.querySelectorAll("[data-product-content]");
  if (!productSections.length) return;

  const requestedProduct = new URLSearchParams(window.location.search).get("product");
  const activeSection = requestedProduct
    ? document.querySelector(`[data-product-content="${requestedProduct}"]`)
    : productSections.item(0);
  const activeProduct = activeSection?.dataset.productContent;
  document.querySelectorAll(".products-category-nav [data-product-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.productNav === activeProduct);
  });
};

const productCategoryPaths = {
  pins: "/products/custom-enamel-pins",
  coins: "/products/custom-challenge-coins",
  medals: "/products/custom-medals",
  keychains: "/products/custom-metal-keychains",
  buckles: "/products/custom-belt-buckles",
  "golf-accessories": "/products/custom-golf-accessories",
  "bottle-openers": "/products/custom-bottle-openers",
  "cufflinks-tieclips": "/products/custom-cufflinks-tie-clips",
  magnets: "/products/custom-fridge-magnets",
};

const switchProductContent = (product) => {
  if (!product || product === "all") return false;
  const productSections = document.querySelectorAll("[data-product-content]");
  const activeSection = document.querySelector(`[data-product-content="${product}"]`);
  if (!productSections.length || !activeSection) return false;

  window.location.assign(productCategoryPaths[product] || "/products");
  return true;
};

activateProductContent();

if (window.location.hash === "#custom-details") {
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}

const activateProductItemPage = () => {
  const root = document.querySelector("[data-product-item-page]");
  const dataNode = document.querySelector("[data-product-item-data]");
  if (!root || !dataNode) return;

  let products = {};
  try {
    products = JSON.parse(dataNode.textContent || "{}");
  } catch {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const requestedItem = params.get("item") || Object.keys(products)[0];
  const item = products[requestedItem] || products[Object.keys(products)[0]];
  if (!item) return;

  const setText = (selector, value) => {
    root.querySelectorAll(selector).forEach((node) => {
      node.textContent = value || "";
    });
  };
  const setAttr = (selector, attr, value) => {
    root.querySelectorAll(selector).forEach((node) => {
      if (value) node.setAttribute(attr, value);
    });
  };

  setText("[data-product-item-title]", item.title);
  setText("[data-product-item-category]", item.categoryLabel);
  setText("[data-product-item-lead]", item.lead);
  setText('[data-product-spec="material"]', item.material);
  setText('[data-product-spec="process"]', item.process);
  setText('[data-product-spec="sku"]', item.sku);
  setText('[data-product-spec="usage"]', item.usage);
  setText('[data-product-spec="categories"]', item.categories);
  setAttr("[data-product-item-image]", "src", item.image);
  setAttr("[data-product-item-image]", "alt", item.alt || item.title);
  setAttr("[data-product-item-category-link]", "href", item.categoryHref);
  setAttr("[data-product-inquiry-trigger]", "data-product-inquiry-product", item.quoteProduct);
  document.title = `${item.title} | Product Detail | Unique Pin`;
};

activateProductItemPage();

const blogCategories = [
  "Awareness",
  "Custom Lapel Pins",
  "Custom Medals",
  "Custom Coins",
  "Custom Keychains",
  "Custom Belt Buckle",
  "Custom Lanyards",
  "Custom Poker Chips",
  "Holidays",
  "Uncategorized",
];

const getBlogCardCategories = (card) => {
  const explicitCategories = (card.dataset.blogCategory || "")
    .split(",")
    .map((category) => category.trim())
    .filter((category) => blogCategories.includes(category));
  if (explicitCategories.length) return explicitCategories;
  return ["Uncategorized"];
};

const applyBlogCategory = (category) => {
  const cards = document.querySelectorAll(".blog-feature-card");
  if (!cards.length) return;

  cards.forEach((card) => {
    const cardCategories = getBlogCardCategories(card);
    const shouldShowCard = category === "All" || cardCategories.includes(category);
    card.hidden = !shouldShowCard;
    card.style.display = shouldShowCard ? "" : "none";
  });
};

applyBlogCategory("All");

document.addEventListener("click", (event) => {
  const articleCard = event.target.closest?.('.blog-feature-card[href^="/blog/"]');
  if (articleCard) {
    event.preventDefault();
    window.location.assign(articleCard.href);
    return;
  }

  const button = event.target.closest?.(".blog-category-filter button");
  if (!button) return;

  document.querySelectorAll(".blog-category-filter button").forEach((categoryButton) => {
    categoryButton.classList.toggle("active", categoryButton === button);
  });
  applyBlogCategory(button.dataset.blogCategory || "All");
});

const productCategoryButtons = document.querySelectorAll(".products-category-nav [data-product-filter]");
const productCards = document.querySelectorAll(".products-all-grid .product-type-card[data-product-category]");
const productGrid = document.querySelector(".products-all-grid");
const productsPerPage = 30;
let selectedProductCategory = "all";
let currentProductPage = 1;
let productPagination = document.querySelector(".product-pagination");

if (productGrid && !productPagination) {
  productPagination = document.createElement("nav");
  productPagination.className = "product-pagination";
  productPagination.setAttribute("aria-label", "Product pages");
  productGrid.insertAdjacentElement("afterend", productPagination);
}

const renderProductPagination = (pageCount) => {
  if (!productPagination) return;

  if (pageCount <= 1) {
    productPagination.hidden = true;
    productPagination.innerHTML = "";
    return;
  }

  productPagination.hidden = false;
  productPagination.innerHTML = Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    const isActive = page === currentProductPage;
    return `<button type="button" class="${isActive ? "active" : ""}" data-product-page="${page}" aria-current="${isActive ? "page" : "false"}">${page}</button>`;
  }).join("");
};

const applyProductFilter = (category, updateHash = false, page = 1) => {
  if (!productCategoryButtons.length || !productCards.length) return;

  selectedProductCategory = category || "all";
  productCategoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.productFilter === selectedProductCategory);
  });

  const matchingCards = [...productCards].filter((card) => (
    selectedProductCategory === "all" || card.dataset.productCategory === selectedProductCategory
  ));
  const pageCount = Math.max(1, Math.ceil(matchingCards.length / productsPerPage));
  currentProductPage = Math.min(Math.max(page, 1), pageCount);
  const pageStart = (currentProductPage - 1) * productsPerPage;
  const pageEnd = pageStart + productsPerPage;

  productCards.forEach((card) => {
    const matchedIndex = matchingCards.indexOf(card);
    const shouldShowCard = matchedIndex >= pageStart && matchedIndex < pageEnd;
    card.hidden = !shouldShowCard;
    card.style.display = shouldShowCard ? "" : "none";
  });
  renderProductPagination(pageCount);

  if (updateHash) {
    const nextUrl = selectedProductCategory === "all"
      ? `${window.location.pathname}${window.location.search}`
      : `${window.location.pathname}${window.location.search}#${selectedProductCategory}`;
    window.history.replaceState(null, "", nextUrl);
  }
};

const productHash = window.location.hash.replace("#", "");
if (window.location.pathname === "/products" && productHash) {
  window.location.replace(productHash === "all" ? "/products" : productCategoryPaths[productHash] || "/products");
}
const initialProductFilter = [...productCategoryButtons].some((button) => button.dataset.productFilter === productHash)
  ? productHash
  : "all";
applyProductFilter(initialProductFilter);

document.addEventListener("click", (event) => {
  const button = event.target.closest?.(".products-category-nav [data-product-filter]");
  if (!button) return;

  const href = button.getAttribute("href") || "";
  if (href.startsWith("/") && !href.includes("#")) return;

  event.preventDefault();
  applyProductFilter(button.dataset.productFilter || "all", true);
  document.querySelector(".products-all-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("click", (event) => {
  const button = event.target.closest?.(".product-pagination [data-product-page]");
  if (!button) return;

  event.preventDefault();
  applyProductFilter(selectedProductCategory, false, Number(button.dataset.productPage) || 1);
  document.querySelector(".products-all-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
});
