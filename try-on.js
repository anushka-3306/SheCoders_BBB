document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const mainNav = document.querySelector(".main-nav ul")

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.style.display = mainNav.style.display === "flex" ? "none" : "flex"
    })
  }

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tab-btn")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all buttons and content
      document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active")
      })

      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active")
      })

      // Add active class to clicked button and corresponding content
      this.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Virtual try-on functionality
  const tryOnBtn = document.getElementById("try-on-btn")
  const previewPlaceholder = document.getElementById("preview-placeholder")
  const previewResult = document.getElementById("preview-result")

  if (tryOnBtn && previewPlaceholder && previewResult) {
    tryOnBtn.addEventListener("click", () => {
      // Show loading state
      tryOnBtn.disabled = true
      tryOnBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...'

      // Simulate processing delay
      setTimeout(() => {
        // Hide placeholder, show result
        previewPlaceholder.style.display = "none"
        previewResult.style.display = "block"

        // Reset button
        tryOnBtn.disabled = false
        tryOnBtn.innerHTML = "Try It On"
      }, 2000)
    })
  }

  // Avatar selection
  const avatarOptions = document.querySelectorAll(".avatar-option")

  avatarOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove selected class from all options
      avatarOptions.forEach((opt) => {
        opt.style.borderColor = ""
      })

      // Add selected class to clicked option
      this.style.borderColor = "var(--color-primary)"
    })
  })
})

