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

  // Like functionality
  const likeButtons = document.querySelectorAll(".action-buttons .btn:first-child")

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector("i")

      if (icon.classList.contains("fas")) {
        // Unlike
        icon.classList.remove("fas")
        icon.classList.add("far")
        const count = Number.parseInt(this.textContent.trim().split(" ")[1]) - 1
        this.innerHTML = `<i class="far fa-heart"></i> ${count}`
      } else {
        // Like
        icon.classList.remove("far")
        icon.classList.add("fas")
        const count = Number.parseInt(this.textContent.trim().split(" ")[1]) + 1
        this.innerHTML = `<i class="fas fa-heart"></i> ${count}`
      }
    })
  })

  // Challenge join buttons
  const joinButtons = document.querySelectorAll(".challenges-grid .btn-primary")

  joinButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent === "Join Challenge") {
        this.textContent = "Joined"
        this.classList.add("btn-success")
      } else if (this.textContent === "Continue Challenge") {
        // Navigate to challenge details page
        // window.location.href = 'challenge-details.html';
        alert("Navigating to challenge details...")
      }
    })
  })
})

