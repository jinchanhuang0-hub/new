const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");

const loadDeferredImages = (root = document) => {
  root.querySelectorAll("img[data-src]").forEach((image) => {
    image.src = image.dataset.src;
    image.removeAttribute("data-src");
  });
};

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    if (nav.classList.contains("open")) loadDeferredImages(nav);
  });

  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !nav.classList.contains("open")) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  });
}

document.querySelectorAll(".products-menu").forEach((menu) => {
  let closeTimer;

  const openMenu = () => {
    window.clearTimeout(closeTimer);
    loadDeferredImages(menu);
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
    const expandHint = event.target.closest(".video-expand-hint");
    const inlineVideo = trigger.querySelector("video");
    if (!expandHint && inlineVideo) {
      const videoRect = inlineVideo.getBoundingClientRect();
      const isInsideVideo =
        event.clientX >= videoRect.left
        && event.clientX <= videoRect.right
        && event.clientY >= videoRect.top
        && event.clientY <= videoRect.bottom;
      if (isInsideVideo) return;
    }
    event.preventDefault();
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

let lastCertificateTrigger = null;

const closeCertificateLightbox = () => {
  const certLightbox = document.querySelector("[data-cert-lightbox]");
  const certLightboxImage = certLightbox?.querySelector(".cert-lightbox-img");
  if (!certLightbox || !certLightboxImage) return;
  certLightbox.hidden = true;
  certLightbox.classList.remove("is-open");
  certLightbox.setAttribute("aria-hidden", "true");
  certLightboxImage.removeAttribute("src");
  certLightboxImage.alt = "";
  document.body.classList.remove("is-cert-lightbox-open");
  lastCertificateTrigger?.focus();
};

const initCertificateLightbox = () => {
  const certLightbox = document.querySelector("[data-cert-lightbox]");
  const certLightboxImage = certLightbox?.querySelector(".cert-lightbox-img");
  const certLightboxCaption = certLightbox?.querySelector(".cert-lightbox-caption");
  const certLightboxCloseButton = certLightbox?.querySelector(".cert-lightbox-close");

  document.querySelectorAll("[data-cert-lightbox-trigger]").forEach((trigger) => {
    if (trigger.dataset.certLightboxReady === "true") return;
    trigger.dataset.certLightboxReady = "true";

    const openCertificateLightbox = () => {
      if (!certLightbox || !certLightboxImage || !certLightboxCaption) return;
      const image = trigger.querySelector("img");
      const caption = trigger.querySelector(".cert-name")?.textContent?.trim() || image?.alt || "Certificate";
      if (!image) return;

      lastCertificateTrigger = trigger;
      certLightboxImage.src = image.currentSrc || image.src;
      certLightboxImage.alt = image.alt || caption;
      certLightboxCaption.textContent = caption;
      certLightbox.hidden = false;
      certLightbox.classList.add("is-open");
      certLightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-cert-lightbox-open");
      certLightboxCloseButton?.focus();
    };

    trigger.addEventListener("click", openCertificateLightbox);
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openCertificateLightbox();
    });
  });

  document.querySelectorAll("[data-cert-lightbox-close]").forEach((button) => {
    if (button.dataset.certLightboxCloseReady === "true") return;
    button.dataset.certLightboxCloseReady = "true";
    button.addEventListener("click", closeCertificateLightbox);
  });
};

initCertificateLightbox();
document.addEventListener("DOMContentLoaded", initCertificateLightbox);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCertificateLightbox();
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

if (window.location.hash === "#custom-details") {
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}
