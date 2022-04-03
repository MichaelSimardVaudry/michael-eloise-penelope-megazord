/*var swiper = new swiper(".myMwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});*/

gsap.registerPlugin(ScrollTrigger);

gsap.to(".no1", {
    scrollTrigger: {
      start: "top 0%",
      end: "bottom 25%",
      scrub: true,
      trigger: ".no1",
      markers: true,
    },
    y: "100%",
    duration: 2,
  });