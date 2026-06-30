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

const productDetailData = {
  pins: {
    title: "Custom Enamel Pins Manufacturer",
    name: "Custom Enamel Pins",
    image: "assets/images/product-pins.jpg",
    intro: "Custom soft enamel, hard enamel, die struck and printed pins for brands, events, schools and promotional campaigns.",
    meta: "Order custom enamel pins from Unique Pin with OEM/ODM support, low MOQ, free artwork design and fast sampling."
  },
  medals: {
    title: "Custom Medals Manufacturer",
    name: "Custom Medals",
    image: "assets/images/product-medals.jpg",
    intro: "Custom sports medals, school medals, club awards and event medals with ribbons, plating, enamel and 3D relief options.",
    meta: "Order custom medals from Unique Pin with factory-direct OEM/ODM service, low MOQ, free design and strict quality inspection."
  },
  coins: {
    title: "Challenge Coins / Commemorative Coins Manufacturer",
    name: "Challenge Coins / Commemorative Coins",
    image: "assets/images/product-coins.jpg",
    intro: "Custom military coins, police coins, government coins, corporate coins and commemorative coins with double-sided designs.",
    meta: "Order custom challenge coins and commemorative coins with double-sided design, die casting, plating and enamel options."
  },
  keychains: {
    title: "Custom Keychains Manufacturer",
    name: "Custom Keychains",
    image: "assets/images/product-keychains.jpg",
    intro: "Custom metal keychains for promotional gifts, tourism souvenirs, retail merchandise and brand campaigns.",
    meta: "Order custom keychains with OEM/ODM support, low MOQ, free artwork design and global delivery."
  },
  buckles: {
    title: "Custom Belt Buckles Manufacturer",
    name: "Custom Belt Buckles",
    image: "assets/images/product-buckles.jpg",
    intro: "Custom metal belt buckles with 2D/3D relief, antique plating, enamel color and premium gift packaging options.",
    meta: "Order custom belt buckles from a China OEM metal crafts manufacturer with fast sampling and strict QC."
  },
  cufflinks: {
    title: "Custom Cufflinks Manufacturer",
    name: "Custom Cufflinks",
    image: "assets/images/product-cufflinks.jpg",
    intro: "Custom cufflinks for corporate gifts, clubs, uniforms, formal events and premium brand merchandise.",
    meta: "Order custom cufflinks with logo engraving, enamel fill, plating, gift box packaging and OEM/ODM service."
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
  document.title = `${productData.title} | OEM/ODM Factory, Low MOQ`;
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

const inquiryForm = document.querySelector("[data-inquiry-form]");
if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const notice = inquiryForm.querySelector("[data-form-notice]");
    if (notice) {
      notice.textContent = "Thank you for your inquiry. Our team will reply within 1 business day.";
    }
    inquiryForm.reset();
  });
}
