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

  // Load wardrobe items
  loadWardrobeItems()
  loadClaimedItems()
})

// Function to load wardrobe items
function loadWardrobeItems() {
  const container = document.getElementById("wardrobe-items")
  if (!container) return

  const items = [
    {
      id: 1,
      name: "Floral Maxi Dress",
      status: "Listed",
      credits: 250,
      image: "images/dress.jpg",
    },
    {
      id: 2,
      name: "Denim Jacket",
      status: "Listed",
      credits: 300,
      image: "images/jeans.jpeg",
    },
    {
      id: 3,
      name: "Yellow Kurti",
      status: "Draft",
      credits: 300,
      image: "images/kurti.jpg",
    },
  ]

  let html = ""

  items.forEach((item) => {
    html += `
      <div class="card item-card">
        <div class="item-image" style="height: 200px;">
          <img src="${item.image}" alt="${item.name}">
          <span class="badge ${item.status === "Listed" ? "badge-active" : ""}" style="position: absolute; top: 10px; right: 10px;">
            ${item.status}
          </span>
        </div>
        <div class="item-details">
          <h3 class="item-title">${item.name}</h3>
          ${
            item.status === "Listed"
              ? `<p class="item-brand">${item.credits} Credits</p>`
              : `<button class="btn btn-outline btn-sm btn-block" style="margin-top: 10px;">Complete Listing</button>`
          }
        </div>
      </div>
    `
  })

  // Add "Add New Item" card
  html += `
    <div class="card item-card" style="border-style: dashed; display: flex; align-items: center; justify-content: center; height: 280px;">
      <button class="btn btn-text" style="flex-direction: column; height: 100%; width: 100%;">
        <i class="fas fa-plus" style="font-size: 2rem; margin-bottom: 10px;"></i>
        <span>Add New Item</span>
      </button>
    </div>
  `

  container.innerHTML = html
}

// Function to load claimed items
function loadClaimedItems() {
  const container = document.getElementById("claimed-items-grid")
  if (!container) return

  const items = [
    {
      id: 4,
      name: "Beige Jumpsuit",
      claimedDate: "2025-02-15",
      credits: 380,
      image: "images/jumpsuit.jpg",
    },
    {
      id: 5,
      name: "Leather Tote Bag",
      claimedDate: "2025-01-20",
      credits: 400,
      image: "images/bag.jpg",
    },
  ]

  let html = ""

  items.forEach((item) => {
    html += `
      <div class="card item-card">
        <div class="item-image" style="height: 200px;">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="item-details">
          <h3 class="item-title">${item.name}</h3>
          <p class="item-brand">Claimed on ${new Date(item.claimedDate).toLocaleDateString()}</p>
          <div class="card-footer" style="display: flex; gap: 10px;">
            <button class="btn btn-primary" style="flex: 1; color:black">Review</button>
            <button class="btn btn-primary" style="flex: 1 color:black;">List Again</button>
          </div>
        </div>
      </div>
    `
  })

  container.innerHTML = html
}

