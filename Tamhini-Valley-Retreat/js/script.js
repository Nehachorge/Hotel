/**
 * TAMHINI VALLEY RETREAT - MAIN JAVASCRIPT
 * Features: Mobile drawer, sticky header, scroll reveal, WhatsApp booking generator,
 *           gallery filtering, lightbox modal, back-to-top, image fallback.
 */

// ==========================================================================
// CONFIGURATION & GLOBAL SETTINGS
// ==========================================================================
const CONFIG = {
  phone: "9022142586", // Change property phone number here
  countryCode: "91",
  email: "YOUR_EMAIL", // Change property email here
  propertyName: "Tamhini Valley Retreat",
  locationText: "Nive, Tamhini, Mulshi, Pune, Maharashtra, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nive%2C%20Tamhini%2C%20Mulshi%2C%20Pune%2C%20Maharashtra"
};

// Computed WhatsApp Base URL
const WHATSAPP_BASE_URL = `https://wa.me/${CONFIG.countryCode}${CONFIG.phone}`;

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileMenu();
  initScrollReveal();
  initBookingForm();
  initGallery();
  initBackToTop();
  initCurrentYear();
  initImageFallbacks();
  initRoomSelectionBridge();
});

// ==========================================================================
// 1. STICKY HEADER
// ==========================================================================
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// ==========================================================================
// 2. MOBILE NAVIGATION DRAWER
// ==========================================================================
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const drawer = document.querySelector(".mobile-nav-drawer");
  const overlay = document.querySelector(".mobile-nav-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    toggleBtn.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    toggleBtn.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  overlay.addEventListener("click", closeDrawer);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

// ==========================================================================
// 3. SCROLL REVEAL ANIMATIONS
// ==========================================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is unsupported
    revealElements.forEach((el) => el.classList.add("active"));
  }
}

// ==========================================================================
// 4. BOOKING FORM & WHATSAPP MESSAGE GENERATOR
// ==========================================================================
function initBookingForm() {
  const bookingForm = document.getElementById("bookingForm");
  const resultBox = document.getElementById("bookingResultBox");
  const previewText = document.getElementById("bookingPreviewText");
  const whatsappActionBtn = document.getElementById("btnContinueWhatsApp");
  const checkinInput = document.getElementById("checkinDate");
  const checkoutInput = document.getElementById("checkoutDate");

  if (!bookingForm) return;

  // Set min dates to today
  if (checkinInput) {
    const today = new Date().toISOString().split("T")[0];
    checkinInput.min = today;
    if (checkoutInput) {
      checkinInput.addEventListener("change", () => {
        checkoutInput.min = checkinInput.value;
      });
    }
  }

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = (document.getElementById("guestName")?.value || "").trim();
    const mobile = (document.getElementById("guestMobile")?.value || "").trim();
    const email = (document.getElementById("guestEmail")?.value || "").trim() || "Not provided";
    const checkin = document.getElementById("checkinDate")?.value || "To be decided";
    const checkout = document.getElementById("checkoutDate")?.value || "To be decided";
    const adults = document.getElementById("adultsCount")?.value || "1";
    const children = document.getElementById("childrenCount")?.value || "0";
    const room = document.getElementById("roomType")?.value || "Standard Room";

    if (!fullName || !mobile) {
      alert("Please provide your name and mobile number to proceed.");
      return;
    }

    // Build the formatted inquiry message requested by the user:
    const messageLines = [
      `*Tamhini Valley Retreat Booking Enquiry*`,
      ``,
      `*Name:* ${fullName}`,
      `*Mobile:* ${mobile}`,
      `*Check-in:* ${checkin}`,
      `*Check-out:* ${checkout}`,
      `*Adults:* ${adults}`,
      `*Children:* ${children}`,
      `*Room:* ${room}`,
      `*Email:* ${email}`
    ];

    const messageText = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(messageText);
    const targetWhatsAppUrl = `${WHATSAPP_BASE_URL}?text=${encodedMessage}`;

    if (resultBox && previewText) {
      previewText.textContent = messageText;
      if (whatsappActionBtn) {
        whatsappActionBtn.href = targetWhatsAppUrl;
      }
      resultBox.style.display = "block";
      resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      // Direct redirect if result box is not on page
      window.open(targetWhatsAppUrl, "_blank", "noopener,noreferrer");
    }
  });
}

// Pre-fill room type when clicking "Book Room" from room cards
function initRoomSelectionBridge() {
  const roomButtons = document.querySelectorAll("[data-room-target]");
  const roomSelect = document.getElementById("roomType");

  roomButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetRoom = btn.getAttribute("data-room-target");
      if (roomSelect && targetRoom) {
        roomSelect.value = targetRoom;
      }
    });
  });
}

// ==========================================================================
// 5. GALLERY FILTERING & LIGHTBOX
// ==========================================================================
function initGallery() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");

  if (!galleryItems.length) return;

  // Filtering
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter") || "all";

      galleryItems.forEach((item) => {
        const category = item.getAttribute("data-category") || "";
        if (filter === "all" || category === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Lightbox Data & Navigation
  let visibleItems = [];
  let currentIndex = 0;

  const updateVisibleItems = () => {
    visibleItems = Array.from(galleryItems).filter((item) => item.style.display !== "none");
  };

  const showLightboxImage = (index) => {
    if (!lightbox || !lightboxImg || !visibleItems.length) return;

    if (index < 0) index = visibleItems.length - 1;
    if (index >= visibleItems.length) index = 0;
    currentIndex = index;

    const currentItem = visibleItems[currentIndex];
    const imgEl = currentItem.querySelector("img");
    const captionEl = currentItem.querySelector(".gallery-item-caption");

    if (imgEl) {
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt || "Tamhini Valley Retreat gallery view";
    }

    if (lightboxCaption && captionEl) {
      lightboxCaption.textContent = captionEl.textContent;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;
    }

    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      updateVisibleItems();
      const clickedIndex = visibleItems.indexOf(item);
      if (clickedIndex !== -1) {
        showLightboxImage(clickedIndex);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", () => showLightboxImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showLightboxImage(currentIndex + 1));

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLightboxImage(currentIndex - 1);
    if (e.key === "ArrowRight") showLightboxImage(currentIndex + 1);
  });
}

// ==========================================================================
// 6. BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================================================
// 7. DYNAMIC YEAR
// ==========================================================================
function initCurrentYear() {
  const yearEls = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.textContent = year;
  });
}

// ==========================================================================
// 8. IMAGE FALLBACK HANDLER
// ==========================================================================
function initImageFallbacks() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("error", () => {
      // If external image fails, provide gentle styling and prevent broken image layout
      img.style.opacity = "0.7";
      img.style.backgroundColor = "#1b3b2b";
      img.alt = img.alt || "Tamhini Valley Retreat";
    });
  });
}
