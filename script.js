const menuToggle = document.querySelector('.menu-toggle button');
const navbar2 = document.querySelector('.navbar-2');

menuToggle.addEventListener('click', () => {
  navbar2.classList.toggle('active');
});

// Get all "Order now" buttons
const orderButtons = document.querySelectorAll(".items .desc button");

// Sections to hide (all except header/footer)
const sections = document.querySelectorAll("section");
const orderNowSection = document.getElementById("order-now");

// Hide order-now by default
orderNowSection.style.display = "none";

orderButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Get item details
    const itemCard = btn.closest(".items");
    const itemName = itemCard.querySelector(".item-name").textContent;
    const priceElement = itemCard.querySelector(".price");
    const itemImg = itemCard.querySelector("img").src;

    // Fill order-now section
    orderNowSection.querySelectorAll(".order-items-heading")[0].textContent = itemName;
    orderNowSection.querySelectorAll(".order-items-heading")[1].textContent = itemName;
    orderNowSection.querySelector(".order-items-img img").src = itemImg;
    orderNowSection.querySelector(".order-items-img img").alt = itemName;

    // Preserve strike-through if exists (use innerHTML instead of textContent)
    const orderPriceElement = orderNowSection.querySelector(".order-now-desc .price");
    orderPriceElement.innerHTML = priceElement.innerHTML;

    // Hide all sections except order-now
    sections.forEach(sec => {
      sec.style.display = "none";
    });
    orderNowSection.style.display = "block";

    // Scroll smoothly to order now
    orderNowSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Back to Home button
const backHomeBtn = document.getElementById("back-home-btn");
const homeSection = document.getElementById("home");

backHomeBtn.addEventListener("click", () => {
  // Show all sections again
  sections.forEach(sec => {
    sec.style.display = "block";
  });

  // Hide order-now section
  orderNowSection.style.display = "none";

  // Scroll to home smoothly
  homeSection.scrollIntoView({ behavior: "smooth" });
});
