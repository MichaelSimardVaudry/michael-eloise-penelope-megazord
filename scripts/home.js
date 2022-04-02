/*var swiper = new swiper(".myMwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});*/

gsap.registerPlugin(ScrollTrigger);

gsap.from(".no1", {
    scrollTrigger: {
      start: "top 70%",
      end: "bottom 30%",
      scrub: true,
      trigger: ".no1",
      toggleActions: "restart complete reverse reset",
    },
    x: "100%",
    duration: 2,
  });