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
if (form) {
  form.addEventListener("click", (event) => {
    const target = event.target;
    event.preventDefault();
    formShipped.classList.add("shipped");
  });
}

const closeForm = document.querySelector(".close");
const popapModal = document.querySelector(".popap-modal");
if (closeForm) {
  closeForm.addEventListener("click", (event) => {
    const target = event.target;
    popapModal.classList.toggle("visible");
    body.classList.toggle("hidden");
  });
}

const body = document.querySelector("body");
const popap = document.querySelectorAll(".popap");

for (let i = 0; i < popap.length; i++) {
  popap[i].addEventListener("click", (event) => {
    const target = event.target;
    popapModal.classList.toggle("visible");
    body.classList.toggle("hidden");
  });
}

const contestSwiper = new Swiper(".contest__swiper", {
  slidesPerView: 5.8,
  spaceBetween: 120,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
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
      slidesPerView: 4.9,
    },
    1700: {
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
const typeSwiper = new Swiper(".type__swiper", {
  slidesPerView: 5,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 15,
  breakpoints: {
    320: { slidesPerView: 1.2 },
    480: { slidesPerView: 2 },
    576: { slidesPerView: 2.1 },
    768: { slidesPerView: 2.2 },
    992: { slidesPerView: 2.8 },
    1200: { slidesPerView: 3.2 },
    1400: { slidesPerView: 5 },
  },
});
const newBlock = new Swiper(".new__block", {
  slidesPerView: 3,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: { slidesPerView: 1, loop: true },
    480: { slidesPerView: 1.2, loop: true },
    576: { slidesPerView: 1.5, loop: true },
    768: { slidesPerView: 2, loop: true },
    992: { slidesPerView: 3, loop: false },
  },
});
const howPageSwiper = new Swiper(".how-page__swiper", {
  navigation: {
    nextEl: ".how-page__swiper-button-next",
    prevEl: ".how-page__swiper-button-prev",
  },
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  breakpoints: {
    320: {
      grid: {
        rows: 1,
      },
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
    576: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
    992: {},
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
    1400: { slidesPerView: 3 },
  },
});
const popapPerson = document.querySelectorAll(".popap__person");
const personCardWrap = document.querySelector(".person-card-wrap");
if (popapPerson) {
  for (let i = 0; i < popapPerson.length; i++) {
    const personCard = document.querySelector(".person__card-" + i);
    popapPerson[i].addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target;
      if (document.documentElement.clientWidth > 576) {
        personCard.classList.toggle("visible");
        body.classList.toggle("hidden");
        personCardWrap.classList.toggle("visible");
      } else {
        target.classList.toggle("more");
      }
    });
    document
      .querySelectorAll(".close-person")
      [i].addEventListener("click", (event) => {
        personCard.classList.remove("visible");
        body.classList.remove("hidden");
        personCardWrap.classList.remove("visible");
      });
  }
}

const formVote = document.querySelector(".vote__btn-form");
const formCode = document.querySelector(".vote__form-code");
const voteFormEmail = document.querySelector(".vote__form-email");
if (formVote) {
  formVote.addEventListener("click", (event) => {
    const target = event.target;
    event.preventDefault();
    voteFormEmail.classList.add("shipped");
  });

  let code = /[0-9]/;
  let inputCode = document.querySelector(".vote__code");
  let notCode = document.querySelector(".notvalide");
  document.querySelector(".vote__bnt-code").onclick = function (e) {
    e.preventDefault();
    if (!validate(code, inputCode.value)) {
      notCode.classList.add("visible");
    } else {
      notCode.classList.remove("visible");
      formShipped.classList.add("shipped");
      formCode.style.display = "none";
    }
  };
  function validate(regex, inputCode) {
    return regex.test(inputCode);
  }
}

Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
});
