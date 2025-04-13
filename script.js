const btnMenu = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");
const closeBtn = document.getElementById("close-btn");

btnMenu.addEventListener("click", () => {
  menuNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menuNav.classList.remove("active");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
