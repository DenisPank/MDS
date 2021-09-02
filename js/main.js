let bg = document.querySelectorAll(".mouse-parallax-bg");
for (let i = 0; i < bg.length; i++) {
  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg[i].style.transform = "translate(-" + x * 15 + "px, -" + y * 15 + "px)";
  });
}
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", (event) => {
  const target = event.target;
  menu.classList.toggle("visible");
});

var smoothJumpUp = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(smoothJumpUp, 10);
  }
};

const form = document.querySelector(".form__btn");
const formShipped = document.querySelector(".form__shipped");

form.addEventListener("click", (event) => {
  const target = event.target;
  event.preventDefault();
  formShipped.classList.add("shipped");
});
const closeForm = document.querySelector(".close");
const popapModal = document.querySelector(".popap-modal");
closeForm.addEventListener("click", (event) => {
  const target = event.target;
  popapModal.classList.toggle("visible");
});

const popap = document.querySelector(".popap");
popap.addEventListener("click", (event) => {
  const target = event.target;
  target.classList.toggle("visible");
});

const contestSwiper = new Swiper(".contest__swiper", {
  slidesPerView: 5.8,
  spaceBetween: 120,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      spaceBetween: 0,
      slidesPerView: 2.3,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    1400: {
      slidesPerView: 5.8,
    },
  },
});
const commissionSwiper = new Swiper(".commission__swiper", {
  navigation: {
    nextEl: ".commission-button-next",
    prevEl: ".commission-button-prev",
  },
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1.7,
    },
    992: {
      slidesPerView: 2.2,
    },
    1200: {
      slidesPerView: 2.7,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
