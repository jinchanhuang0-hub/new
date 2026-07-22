"use client";

import { useEffect } from "react";
import { getCategoryPath, normalizeSiteHtml } from "../lib/siteRoutes";

export default function StaticPage({ html }) {
  const normalizedHtml = normalizeSiteHtml(html);
  useEffect(() => {
    const redirectBlogHashToArticle = () => {
      if (window.location.pathname !== "/blog" || !window.location.hash) return;

      const slug = window.location.hash.slice(1);
      const articleLink = document.querySelector(`.blog-feature-card[href="/blog/${slug}"]`);
      const articleHashLink = document.querySelector(`.blog-feature-card[href="/blog/${slug}#${slug}"]`);
      if (articleLink || articleHashLink) {
        window.location.replace(`/blog/${slug}`);
      }
    };

    redirectBlogHashToArticle();

    const redirectProductHashToCategory = () => {
      if (window.location.pathname !== "/products" || !window.location.hash) return;

      const category = window.location.hash.slice(1);
      if (category === "all") {
        window.location.replace("/products");
        return;
      }

      const categoryLink = document.querySelector(`.products-category-nav [data-product-filter="${category}"]`);
      const cleanHref = categoryLink?.getAttribute("href");
      if (cleanHref && cleanHref.startsWith("/products/") && !cleanHref.includes("#")) {
        window.location.replace(cleanHref);
      }
    };

    redirectProductHashToCategory();

    const activateProductContent = () => {
      const productSections = document.querySelectorAll("[data-product-content]");
      if (!productSections.length) return;

      const productMeta = {
        pins: {
          title: "Custom Enamel Pins Manufacturer | OEM/ODM Factory, Low MOQ",
          description: "Order custom enamel pins from Unique Pin, a China OEM/ODM metal crafts manufacturer with free artwork design, low MOQ, fast sampling and strict QC."
        },
        coins: {
          title: "Custom Challenge Coins Manufacturer | OEM/ODM Metal Coins",
          description: "Create custom challenge coins and commemorative coins with antique plating, 3D relief, double-sided artwork and factory-direct OEM/ODM support."
        },
        medals: {
          title: "Custom Medals Manufacturer | Sports, Award & Ribbon Medals",
          description: "Order custom sports medals, award medals and ribbon medals from Unique Pin with OEM/ODM manufacturing, free artwork support and strict quality control."
        },
        keychains: {
          title: "Custom Metal Keychains Manufacturer | Enamel & Logo Keychains",
          description: "Create custom metal keychains, enamel keychains and promotional keychains for retail gifts, events, souvenirs and brand merchandise."
        },
        buckles: {
          title: "Custom Belt Buckles Manufacturer | Western & Logo Buckles",
          description: "Design custom belt buckles for clubs, fashion brands, Western themes, awards and promotional merchandise with factory-direct OEM/ODM service."
        },
        "golf-accessories": {
          title: "Custom Golf Ball Markers, Hat Clips & Divot Tools | OEM Factory",
          description: "Order custom golf ball markers, hat clips and divot tools for tournaments, clubs, resorts and corporate golf events."
        },
        "bottle-openers": {
          title: "Custom Bottle Openers Manufacturer | Metal & Keychain Openers",
          description: "Create custom bottle openers and keychain bottle openers that combine practical use with logo promotion, event gifts and retail packaging."
        },
        "cufflinks-tieclips": {
          title: "Custom Cufflinks & Tie Clips Manufacturer | Logo Formal Gifts",
          description: "Design custom cufflinks and tie clips for corporate gifts, retail collections, clubs, formal events and branded accessories."
        },
        magnets: {
          title: "Custom Fridge Magnets Manufacturer | Souvenir Magnets",
          description: "Order custom fridge magnets for tourist souvenirs, city gifts, event merchandise and retail gift programs with OEM/ODM support."
        }
      };

      const params = new URLSearchParams(window.location.search);
      const requestedProduct = params.get("product");
      const activeSection = productSections.length === 1
        ? productSections.item(0)
        : document.querySelector(`[data-product-content="${requestedProduct}"]`)
          || productSections.item(0);
      const activeProduct = activeSection?.dataset.productContent || "pins";

      document.querySelectorAll(".products-category-nav [data-product-nav]").forEach((link) => {
        link.classList.toggle("active", link.dataset.productNav === activeProduct);
      });

      const meta = productMeta[activeProduct] || productMeta.pins;
      document.title = meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);

      if (window.location.hash === "#custom-details") {
        window.requestAnimationFrame(() => {
          activeSection.querySelector(".product-custom-detail")?.scrollIntoView({ block: "start" });
          window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
        });
      }
    };

    const switchProductContent = (product) => {
      if (!product || product === "all") return false;
      const productSections = document.querySelectorAll("[data-product-content]");
      const activeSection = document.querySelector(`[data-product-content="${product}"]`);
      if (!productSections.length || !activeSection) return false;

      const nextUrl = getCategoryPath(product);
      window.location.assign(nextUrl);
      return true;
    };

    const activateProductItemPage = () => {
      const root = document.querySelector("[data-product-item-page]");
      if (!root) return;

      const dataNode = document.querySelector("[data-product-item-data]");
      if (!dataNode) return;

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

    let lastProductUrl = window.location.href;
    activateProductContent();
    activateProductItemPage();
    const productWatcher = window.setInterval(() => {
      if (window.location.href === lastProductUrl) return;
      lastProductUrl = window.location.href;
      activateProductContent();
      activateProductItemPage();
    }, 150);
    window.addEventListener("popstate", activateProductContent);
    window.addEventListener("popstate", activateProductItemPage);

    const handleBlogCardClick = (event) => {
      const card = event.target.closest?.(".blog-feature-card");
      if (!card) return;

      const href = card.getAttribute("href") || "";
      if (href.startsWith("/blog/")) {
        event.preventDefault();
        window.location.assign(card.href);
        return;
      }

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);
      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      document.querySelectorAll(".blog-article-section.is-active").forEach((article) => {
        article.classList.remove("is-active");
      });
      target.classList.add("is-active");
      window.history.pushState(null, "", `${window.location.pathname}${hash}`);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", handleBlogCardClick);

    const openProductInquiryModal = (productName = "") => {
      const modal = document.querySelector("[data-product-inquiry-modal]");
      if (!modal) return false;
      const productSelect = modal.querySelector('select[name="product"]');
      if (productSelect && productName) {
        const matchingOption = [...productSelect.options].find((option) => {
          const optionText = option.textContent.trim().toLowerCase();
          const normalizedProductName = productName.toLowerCase();
          return optionText === productName
            || optionText.toLowerCase() === normalizedProductName
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

    const handleHomeProductClick = (event) => {
      const card = event.target.closest?.(".home-product-card[href]");
      if (!card) return;

      event.preventDefault();
      const productName = card.querySelector("h3")?.textContent?.trim() || "";
      if (!openProductInquiryModal(productName)) {
        window.location.assign(card.href);
      }
    };

    document.addEventListener("click", handleHomeProductClick);

    const handleProductInquiryTriggerClick = (event) => {
      const trigger = event.target.closest?.("[data-product-inquiry-trigger]");
      if (!trigger) return;

      event.preventDefault();
      const productName = trigger.dataset.productInquiryProduct || trigger.textContent?.trim() || "";
      if (!openProductInquiryModal(productName) && trigger.href) {
        window.location.assign(trigger.href);
      }
    };

    document.addEventListener("click", handleProductInquiryTriggerClick);

    const closeProductInquiryModal = () => {
      const modal = document.querySelector("[data-product-inquiry-modal]");
      if (!modal) return;
      modal.classList.remove("is-open");
      modal.hidden = true;
      document.body.classList.remove("quote-modal-open");
    };

    const handleProductInquiryModalClick = (event) => {
      if (event.target.closest?.("[data-product-inquiry-close]")) {
        event.preventDefault();
        closeProductInquiryModal();
        return;
      }

      const modal = event.target.closest?.("[data-product-inquiry-modal]");
      if (modal && event.target === modal) {
        closeProductInquiryModal();
      }
    };

    const handleProductInquiryModalKeydown = (event) => {
      if (event.key === "Escape") closeProductInquiryModal();
    };

    document.addEventListener("click", handleProductInquiryModalClick);
    document.addEventListener("keydown", handleProductInquiryModalKeydown);

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

      const text = card.textContent.toLowerCase();
      const inferredCategories = [];
      if (text.includes("awareness") || text.includes("guide") || text.includes("sourcing")) inferredCategories.push("Awareness");
      if (text.includes("lapel pin") || text.includes("enamel pin") || text.includes("pins")) inferredCategories.push("Custom Lapel Pins");
      if (text.includes("medal")) inferredCategories.push("Custom Medals");
      if (text.includes("coin")) inferredCategories.push("Custom Coins");
      if (text.includes("keychain")) inferredCategories.push("Custom Keychains");
      if (text.includes("belt buckle") || text.includes("buckle")) inferredCategories.push("Custom Belt Buckle");
      if (text.includes("lanyard")) inferredCategories.push("Custom Lanyards");
      if (text.includes("poker chip")) inferredCategories.push("Custom Poker Chips");
      if (text.includes("holiday") || text.includes("christmas") || text.includes("halloween")) inferredCategories.push("Holidays");
      return inferredCategories.length ? inferredCategories : ["Uncategorized"];
    };

    const blogGrid = document.querySelector(".blog-card-grid");
    const blogCards = [...document.querySelectorAll(".blog-feature-card")];
    const blogItemsPerPage = 12;
    let activeBlogCategory = "All";
    let currentBlogPage = 1;
    let blogPagination = document.querySelector(".blog-pagination");
    let blogEmptyState = document.querySelector(".blog-empty-state");

    blogCards.forEach((card) => {
      card.dataset.blogCategory = getBlogCardCategories(card).join(", ");
    });

    const getBlogCardTimestamp = (card) => {
      const publishedDate = card.querySelector("time")?.getAttribute("datetime") || "";
      const timestamp = Date.parse(publishedDate);
      return Number.isNaN(timestamp) ? 0 : timestamp;
    };

    const sortedBlogCards = [...blogCards].sort((a, b) => {
      const dateDelta = getBlogCardTimestamp(b) - getBlogCardTimestamp(a);
      return dateDelta || blogCards.indexOf(a) - blogCards.indexOf(b);
    });

    sortedBlogCards.forEach((card) => blogGrid?.appendChild(card));

    if (blogGrid && !blogEmptyState) {
      blogEmptyState = document.createElement("p");
      blogEmptyState.className = "blog-empty-state";
      blogEmptyState.hidden = true;
      blogEmptyState.textContent = "No articles found in this category.";
      blogGrid.insertAdjacentElement("afterend", blogEmptyState);
    }

    if (blogGrid && !blogPagination) {
      blogPagination = document.createElement("nav");
      blogPagination.className = "blog-pagination";
      blogPagination.setAttribute("aria-label", "Blog pages");
      (blogEmptyState || blogGrid).insertAdjacentElement("afterend", blogPagination);
    }

    const getBlogCardsForCategory = (category) =>
      sortedBlogCards.filter((card) => {
        if (category === "All") return true;
        return (card.dataset.blogCategory || "")
          .split(",")
          .map((cardCategory) => cardCategory.trim())
          .includes(category);
      });

    const getBlogPageItems = (currentPage, totalPages) => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
      }

      const items = [1];
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      if (start > 2) items.push("ellipsis-start");
      for (let page = start; page <= end; page += 1) items.push(page);
      if (end < totalPages - 1) items.push("ellipsis-end");
      items.push(totalPages);
      return items;
    };

    const renderBlogPagination = (totalPages) => {
      if (!blogPagination) return;

      if (totalPages <= 1) {
        blogPagination.hidden = true;
        blogPagination.innerHTML = "";
        return;
      }

      const pageItems = getBlogPageItems(currentBlogPage, totalPages)
        .map((page) => {
          if (typeof page === "string") {
            return '<span class="blog-pagination-ellipsis" aria-hidden="true">...</span>';
          }

          const isActive = page === currentBlogPage;
          return `<button type="button" class="${isActive ? "active" : ""}" data-blog-page="${page}" aria-current="${isActive ? "page" : "false"}">${page}</button>`;
        })
        .join("");

      blogPagination.hidden = false;
      blogPagination.innerHTML = `
        <button type="button" data-blog-page="prev" ${currentBlogPage === 1 ? "disabled" : ""}>Previous</button>
        ${pageItems}
        <button type="button" data-blog-page="next" ${currentBlogPage === totalPages ? "disabled" : ""}>Next</button>`;
    };

    const applyBlogCategory = (category = activeBlogCategory, page = 1, scrollToList = false) => {
      if (!blogGrid || !blogCards.length) return;

      activeBlogCategory = category || "All";
      const filteredCards = getBlogCardsForCategory(activeBlogCategory);
      const totalPages = Math.ceil(filteredCards.length / blogItemsPerPage);
      currentBlogPage = totalPages
        ? Math.min(Math.max(page, 1), totalPages)
        : 1;
      const startIndex = (currentBlogPage - 1) * blogItemsPerPage;
      const visibleCards = new Set(filteredCards.slice(startIndex, startIndex + blogItemsPerPage));

      blogGrid.classList.add("is-updating");
      window.requestAnimationFrame(() => {
        sortedBlogCards.forEach((card) => {
          const shouldShowCard = visibleCards.has(card);
          card.hidden = !shouldShowCard;
          card.style.display = shouldShowCard ? "" : "none";
        });

        if (blogEmptyState) {
          blogEmptyState.hidden = filteredCards.length > 0;
        }

        renderBlogPagination(totalPages);

        window.requestAnimationFrame(() => {
          blogGrid.classList.remove("is-updating");
        });
      });

      if (scrollToList) {
        blogGrid.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const handleBlogCategoryClick = (event) => {
      const button = event.target.closest?.(".blog-category-filter button");
      if (!button) return;

      document.querySelectorAll(".blog-category-filter button").forEach((categoryButton) => {
        categoryButton.classList.toggle("active", categoryButton === button);
      });
      applyBlogCategory(button.dataset.blogCategory || "All", 1, true);
    };

    const handleBlogPaginationClick = (event) => {
      const button = event.target.closest?.(".blog-pagination [data-blog-page]");
      if (!button || button.disabled) return;

      event.preventDefault();
      const pageAction = button.dataset.blogPage;
      const nextPage = pageAction === "prev"
        ? currentBlogPage - 1
        : pageAction === "next"
          ? currentBlogPage + 1
          : Number(pageAction) || 1;

      applyBlogCategory(activeBlogCategory, nextPage, true);
    };

    applyBlogCategory("All");
    document.addEventListener("click", handleBlogCategoryClick);
    document.addEventListener("click", handleBlogPaginationClick);

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

      const selectedCategory = category || "all";
      selectedProductCategory = selectedCategory;
      productCategoryButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.productFilter === selectedCategory);
      });

      const matchingCards = [...productCards].filter((card) => (
        selectedCategory === "all" || card.dataset.productCategory === selectedCategory
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
        const nextUrl = selectedCategory === "all"
          ? `${window.location.pathname}${window.location.search}`
          : getCategoryPath(selectedCategory);
        window.history.replaceState(null, "", nextUrl);
      }
    };

    const handleProductCategoryClick = (event) => {
      const button = event.target.closest?.(".products-category-nav [data-product-filter]");
      if (!button) return;

      const href = button.getAttribute("href") || "";
      if (href.startsWith("/") && !href.includes("#")) return;

      event.preventDefault();
      applyProductFilter(button.dataset.productFilter || "all", true);
      document.querySelector(".products-all-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleProductNavClick = (event) => {
      const link = event.target.closest?.(".products-category-nav [data-product-nav]");
      if (!link) return;
    };

    const handleProductPaginationClick = (event) => {
      const button = event.target.closest?.(".product-pagination [data-product-page]");
      if (!button) return;

      event.preventDefault();
      applyProductFilter(selectedProductCategory, false, Number(button.dataset.productPage) || 1);
      document.querySelector(".products-all-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const productHash = window.location.hash.replace("#", "");
    const initialProductFilter = [...productCategoryButtons].some((button) => button.dataset.productFilter === productHash)
      ? productHash
      : "all";
    applyProductFilter(initialProductFilter);
    document.addEventListener("click", handleProductCategoryClick);
    document.addEventListener("click", handleProductNavClick);
    document.addEventListener("click", handleProductPaginationClick);

    return () => {
      document.removeEventListener("click", handleBlogCardClick);
      document.removeEventListener("click", handleHomeProductClick);
      document.removeEventListener("click", handleProductInquiryTriggerClick);
      document.removeEventListener("click", handleProductInquiryModalClick);
      document.removeEventListener("keydown", handleProductInquiryModalKeydown);
      document.removeEventListener("click", handleBlogCategoryClick);
      document.removeEventListener("click", handleBlogPaginationClick);
      document.removeEventListener("click", handleProductCategoryClick);
      document.removeEventListener("click", handleProductNavClick);
      document.removeEventListener("click", handleProductPaginationClick);
      window.removeEventListener("popstate", activateProductContent);
      window.removeEventListener("popstate", activateProductItemPage);
      window.clearInterval(productWatcher);
    };
  }, [normalizedHtml]);

  return <div dangerouslySetInnerHTML={{ __html: normalizedHtml }} />;
}
