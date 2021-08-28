let bg = document.querySelectorAll(".mouse-parallax-bg");
for (let i = 0; i < bg.length; i++) {
  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg[i].style.transform = "translate(-" + x * 15 + "px, -" + y * 15 + "px)";
  });
}
const swiper = new Swiper(".contest__swiper", {
  slidesPerView: 5.8,
  spaceBetween: 120,
  loop: true,
  autoplay: {
    delay: 2000,
  },
});
