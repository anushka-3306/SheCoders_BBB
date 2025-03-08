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

  // Load featured items
  loadItems("featured-items")
})

// Function to load items
function loadItems(containerId) {
  const container = document.getElementById(containerId)
  if (!container) return

  const items = [
    {
      id: 1,
      name: "Floral Maxi Dress",
      brand: "Zara",
      size: "M",
      condition: "Like New",
      credits: 250,
      image: "images/dress.jpg",
    },
    {
      id: 2,
      name: "Denim Jeans",
      brand: "Levi's",
      size: "S",
      condition: "Good",
      credits: 100,
      image: "images/jeans.jpeg",
    },
    {
      id: 3,
      name: "Pink Tshirt",
      brand: "H&M",
      size: "L",
      condition: "Excellent",
      credits: 80,
      image: "images/Tshirt.jpg",
    },
    {
      id: 4,
      name: "Black Salwar",
      brand: "BIBA",
      size: "38",
      condition: "Good",
      credits: 500,
      image: "images/Salwar.jpg",
    },
    {
      id: 5,
      name: "Lehenga",
      brand: "Mango",
      size: "One Size",
      condition: "Like New",
      credits: 590,
      image: "images/Lhenga.jpeg",
    },
    {
      id: 6,
      name: "Skirt",
      brand: "Gap",
      size: "M",
      condition: "Excellent",
      credits: 20,
      image: "images/skirt.jpg",
    },
    {
      id: 7,
      name: "Kurti",
      brand: "Kurtipedia",
      size: "M",
      condition: "Excellent",
      credits: 800,
      image: "images/kurti.jpg",
    },
  ]

  let html = ""

  items.forEach((item) => {
    html += `
      <div class="card item-card">
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}">
          <div class="item-actions">
            <button class="btn btn-icon">
              <i class="fas fa-heart"></i>
            </button>
            <button class="btn btn-icon">
              <i class="fas fa-eye"></i>
            </button>
          </div>
          <div class="item-overlay">
  <a href="virtual-try-on.html" class="btn btn-secondary">Try On Virtually</a>
</div>

        </div>
        <div class="item-details">
          <div class="item-header">
            <div>
              <h3 class="item-title">${item.name}</h3>
              <p class="item-brand">${item.brand}</p>
            </div>
            <span class="badge badge-active">${item.credits} Credits</span>
          </div>
          <div class="item-tags">
            <span class="badge badge-outline">Size: ${item.size}</span>
            <span class="badge badge-outline">${item.condition}</span>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-block">Claim Item</button>
          </div>
        </div>
      </div>
    `
  })

  container.innerHTML = html
}

