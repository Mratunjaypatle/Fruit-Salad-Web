// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navMenu = document.querySelector(".nav-menu")

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })
}

// Category tabs functionality
const tabBtns = document.querySelectorAll(".tab-btn")
const menuItems = document.querySelectorAll(".menu-item")

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all tabs
    tabBtns.forEach((tab) => tab.classList.remove("active"))
    // Add active class to clicked tab
    btn.classList.add("active")

    const category = btn.getAttribute("data-category")

    // Filter menu items (simplified - in real app would filter based on data attributes)
    menuItems.forEach((item) => {
      if (category === "all") {
        item.style.display = "flex"
      } else {
        // This is a simplified version - in real app you'd have data attributes
        item.style.display = "flex"
      }
    })
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.background = "#fff"
    header.style.backdropFilter = "none"
  }
})

// Cart functionality (simplified)
let cartCount = 2
const cartCountElement = document.querySelector(".cart-count")

function updateCartCount(change) {
  cartCount += change
  cartCountElement.textContent = cartCount
}

// Add to cart buttons (simplified)
document.querySelectorAll(".card-btn, .btn-primary").forEach((btn) => {
  if (btn.textContent.includes("Order Now")) {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      updateCartCount(1)

      // Show feedback
      btn.textContent = "Added!"
      btn.style.background = "#27ae60"

      setTimeout(() => {
        btn.textContent = "Order Now"
        btn.style.background = ""
      }, 1500)
    })
  }
})

// Newsletter subscription
const newsletterForm = document.querySelector(".newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = newsletterForm.querySelector('input[type="email"]').value

    if (email) {
      alert("Thank you for subscribing!")
      newsletterForm.querySelector('input[type="email"]').value = ""
    }
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".burger-card, .menu-item, .ingredient-item, .dish-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", () => {
    img.style.opacity = "1"
  })

  img.style.opacity = "0"
  img.style.transition = "opacity 0.3s ease"
})

// Price formatting
function formatPrice(price) {
  return `$${price.toFixed(2)}`
}

// Search functionality (basic)
function searchMenu(query) {
  const items = document.querySelectorAll(".menu-item, .dish-card")
  items.forEach((item) => {
    const text = item.textContent.toLowerCase()
    if (text.includes(query.toLowerCase())) {
      item.style.display = "flex"
    } else {
      item.style.display = "none"
    }
  })
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Set initial active states
  const firstTab = document.querySelector(".tab-btn")
  if (firstTab) {
    firstTab.classList.add("active")
  }

  // Initialize cart count
  if (cartCountElement) {
    cartCountElement.textContent = cartCount
  }

  console.log("BurgerUp website loaded successfully!")
})
