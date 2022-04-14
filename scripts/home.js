/*var swiper = new swiper(".myMwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});*/
/*
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  duration: 1,
  scrollTrigger: {
    start: 'top 100%',
    end: 'bottom 25%',
    toggleActions: 'restart complete reverse reset',
    trigger: '.no1',
  },
})
  .from('.no1', { x: '100%' })

  gsap.timeline({
    duration: 2,
    scrollTrigger: {
      start: 'top 90%',
      end: 'bottom 25%',
      toggleActions: 'restart complete reverse reset',
      trigger: '.no2',
    },
  })
    .from('.no2', { x: '100%' })

    gsap.timeline({
      duration: 2,
      scrollTrigger: {
        start: 'top 80%',
        end: 'bottom 25%',
        toggleActions: 'restart complete reverse reset',
        trigger: '.no3',
      },
    })
      .from('.no3', { x: '100%' })
      */
const idle = document.querySelector(".idle");
const main = document.querySelector("#main");
let temps;

gsap.to("#anim", {
  scrollTrigger: {
    trigger: "#anim",
    scrub: 0.25,
    onUpdate: (e) => {
      idle.classList.add("is-scrolling");
    },
  },
});
gsap.to(".idle", {
  scrollTrigger: {
    scrub: true,
    pin: true,
    pinSpacing: true,
    start: "top 10%",
    end: "bottom 100%",
    trigger: "#anim",
    onUpdate: (e) => {
      if (e.direction == 1) {
        idle.classList.remove("up");
        idle.classList.add("down");
      } else {
        idle.classList.remove("down");
        idle.classList.add("up");
      }
    },
  },
});
window.addEventListener("scroll", function () {
  window.clearTimeout(temps);
  temps = setTimeout(function () {
    idle.classList.remove("down");
    idle.classList.remove("up");
  }, 250);
});
