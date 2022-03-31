gsap.registerPlugin(ScrollTrigger);

gsap
  .to(".animation", {
    duration: 2,
    scrollTrigger: {
      markers: true,
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "restart complete reverse reset",
      trigger: ".animation",
    },
  })
  .to(".element.no2", { x: "100%" });
