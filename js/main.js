// ===============================
// LOADING SCREEN & PROFESSIONAL EFFECTS
// ===============================

// Loading Screen Management
document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const body = document.body;

  // Prevent scrolling during loading
  body.style.overflow = "hidden";

  // Create custom cursor
  createCustomCursor();

  // Initialize professional effects
  initProfessionalEffects();

  // Initialize scroll progress
  initScrollProgress();

  // Hide loading screen after 1 second
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    body.style.overflow = "auto";

    // Remove loading screen from DOM after animation
    setTimeout(() => {
      loadingScreen.remove();
      // Initialize AOS after loading
      initializeAOS();
    }, 800);
  }, 1000);
});

// Custom Cursor Creation
function createCustomCursor() {
  // Only create cursor on desktop
  if (window.innerWidth > 768) {
    const cursor = document.createElement("div");
    const cursorFollower = document.createElement("div");

    cursor.className = "cursor";
    cursorFollower.className = "cursor-follower";

    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // Update cursor position
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    });

    // Smooth follower animation
    function animateFollower() {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      cursorFollower.style.left = followerX + "px";
      cursorFollower.style.top = followerY + "px";

      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effects
    const hoverElements = document.querySelectorAll(
      "a, button, .btn, .project-card, .skill-category"
    );
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(1.5)";
        cursorFollower.style.transform = "scale(1.2)";
      });

      element.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursorFollower.style.transform = "scale(1)";
      });
    });
  }
}

// Professional Effects Initialization
function initProfessionalEffects() {
  // Fade in animation for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Add fade-in effect to elements
  const fadeElements = document.querySelectorAll(
    ".project-card, .skill-category, .certification-card, .timeline-item"
  );
  fadeElements.forEach((el) => {
    el.classList.add("fade-in-up");
    fadeObserver.observe(el);
  });

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector(".hero-section");
    const parallaxElements = document.querySelectorAll(".parallax-element");

    if (heroSection) {
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    }

    parallaxElements.forEach((element, index) => {
      const rate = scrolled * (0.2 + index * 0.1);
      element.style.transform = `translateY(${rate}px)`;
    });
  });

  // Add professional card effects
  const cards = document.querySelectorAll(
    ".project-card, .skill-category, .certification-card"
  );
  cards.forEach((card) => {
    card.classList.add("professional-card");

    // Add glow effect on hover
    card.addEventListener("mouseenter", () => {
      card.classList.add("glow-effect");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("glow-effect");
    });
  });

  // Animate skill bars when they come into view
  const skillBarsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll(".skill-progress");
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              const width =
                bar.parentElement.parentElement.querySelector(".skill-progress")
                  .style.width;
              bar.style.setProperty("--skill-width", width);
              bar.classList.add("animate");
            }, index * 200);
          });
          skillBarsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const skillSections = document.querySelectorAll(".skill-category");
  skillSections.forEach((section) => {
    skillBarsObserver.observe(section);
  });

  // Typing animation for hero subtitle
  initTypingAnimation();
}

// Typing Animation
function initTypingAnimation() {
  const typingElement = document.getElementById("typing-text");
  if (!typingElement) return;

  const texts = [
    "Software Developer",
    "Data Scientist",
    "Lecturer",
    "Full-Stack Developer",
    "Digital Transformation Expert",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function typeText() {
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex <= currentText.length) {
      typingElement.textContent = currentText.substring(0, charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else if (isDeleting && charIndex >= 0) {
      typingElement.textContent = currentText.substring(0, charIndex);
      charIndex--;
      setTimeout(typeText, 50);
    } else if (!isDeleting && charIndex > currentText.length) {
      isPaused = true;
      setTimeout(() => {
        isDeleting = true;
        isPaused = false;
        typeText();
      }, 2000);
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, 500);
    }
  }

  // Start typing animation after loading screen
  setTimeout(() => {
    typeText();
  }, 1500);
}

// Scroll Progress Indicator
function initScrollProgress() {
  const progressBar = document.querySelector(".scroll-progress-bar");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
  });
}

// Enhanced AOS Initialization
function initializeAOS() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    offset: 100,
    delay: 100,
  });
}

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Update mobile navigation active state
  updateMobileNavigation();
});

// Mobile Navigation Active State
function updateMobileNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".mobile-nav-item");

  let current = "";
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
}

// Enhanced smooth scrolling for all navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile navbar if open
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    }
  });
});

// Touch swipe detection for mobile
let startY = 0;
let endY = 0;

document.addEventListener("touchstart", function (e) {
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", function (e) {
  endY = e.changedTouches[0].clientY;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 50;
  const difference = startY - endY;

  if (Math.abs(difference) > threshold) {
    // Add haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }

    if (difference > 0) {
      // Swipe up - scroll to next section
      scrollToNextSection("down");
    } else {
      // Swipe down - scroll to previous section
      scrollToNextSection("up");
    }
  }
}

function scrollToNextSection(direction) {
  const sections = document.querySelectorAll("section[id]");
  const currentScrollPosition = window.scrollY + 100;
  let targetSection = null;

  if (direction === "down") {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop > currentScrollPosition) {
        targetSection = sections[i];
        break;
      }
    }
  } else {
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop < currentScrollPosition - 100) {
        targetSection = sections[i];
        break;
      }
    }
  }

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: "smooth",
    });
  }
}

// Mobile keyboard handling
function handleMobileKeyboard() {
  const viewport = window.visualViewport;
  if (viewport) {
    viewport.addEventListener("resize", () => {
      const mobileNav = document.querySelector(".mobile-bottom-nav");
      if (mobileNav) {
        if (viewport.height < window.innerHeight * 0.75) {
          // Keyboard is likely open
          mobileNav.style.display = "none";
        } else {
          // Keyboard is likely closed
          mobileNav.style.display = "block";
        }
      }
    });
  }
}

// Initialize mobile features
if (window.innerWidth <= 991) {
  handleMobileKeyboard();
  window.addEventListener("resize", handleMobileKeyboard);
  window.addEventListener("orientationchange", function () {
    setTimeout(handleMobileKeyboard, 500);
  });
}

// Responsive image loading
function optimizeImagesForMobile() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    if (window.innerWidth <= 768) {
      img.loading = "lazy";
    }
  });
}

// Performance optimization for mobile
let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    optimizeImagesForMobile();
    updateMobileNavigation();
  }, 250);
});

// Contact form submission
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx2MBbXjTGF_ISbmF4k_xQODniaFfMkobb8C2JvUeEDvOl1PyV_S3DFIleENF4UHFnf/exec";
const form = document.forms["portofolio-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (btnLoading) btnLoading.classList.remove("d-none");
    if (btnKirim) btnKirim.classList.add("d-none");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        if (btnLoading) btnLoading.classList.add("d-none");
        if (btnKirim) btnKirim.classList.remove("d-none");
        if (myAlert) myAlert.classList.remove("d-none");
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => {
        if (btnLoading) btnLoading.classList.add("d-none");
        if (btnKirim) btnKirim.classList.remove("d-none");
        console.error("Error!", error.message);
      });
  });
}

// Typing effect for hero subtitle
const subtitle = document.querySelector(".hero-subtitle");
const texts = [
  "Software Developer, Data Scientist & Lecturer",
  "Full-Stack Developer",
  "Tech Enthusiast & Educator",
  "Digital Transformation Specialist",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!subtitle) return;

  const currentText = texts[textIndex];

  if (isDeleting) {
    subtitle.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    subtitle.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Function to calculate work duration automatically
function updateWorkDurations() {
  const lecturerElement = document.getElementById("lecturer-duration");
  const yhcElement = document.getElementById("yhc-duration");

  if (lecturerElement) {
    const lecturerStartDate = new Date("2025-09-01");
    const lecturerDuration = calculateDuration(lecturerStartDate);
    lecturerElement.textContent = lecturerDuration;
  }

  if (yhcElement) {
    const yhcStartDate = new Date("2022-02-01");
    const yhcDuration = calculateDuration(yhcStartDate);
    yhcElement.textContent = yhcDuration;
  }
}

function calculateDuration(startDate) {
  const now = new Date();
  const diffTime = now - startDate;
  const diffMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  if (diffMonths < 1) {
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 7) {
      return `${diffDays} days`;
    } else {
      const diffWeeks = Math.floor(diffDays / 7);
      return `${diffWeeks} ${diffWeeks === 1 ? "week" : "weeks"}`;
    }
  } else if (diffMonths < 12) {
    return `${diffMonths} ${diffMonths === 1 ? "month" : "months"}`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;

    let result = `${years} ${years === 1 ? "year" : "years"}`;
    if (months > 0) {
      result += ` ${months} ${months === 1 ? "month" : "months"}`;
    }
    return result;
  }
}

// Initialize everything when page loads
window.addEventListener("load", () => {
  // Start typing effect after page load
  setTimeout(typeEffect, 1000);

  // Update work durations
  updateWorkDurations();

  // Optimize images for mobile
  optimizeImagesForMobile();
});

// Update durations every minute to keep them current
setInterval(updateWorkDurations, 60000);
