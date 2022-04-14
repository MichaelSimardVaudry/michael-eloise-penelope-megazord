gsap.registerPlugin(ScrollTrigger);
gsap.from(".n01", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n01",
    toggleActions: "restart complete reverse reset",
  },
  x: "100%",
  duration: 2,
});
gsap.from(".savoir01", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n01",
    toggleActions: "restart complete reverse reset",
  },
  rotate: "360",
  duration: 2,
});
gsap.from(".n02", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n02",
    toggleActions: "restart complete reverse reset",
  },
  x: "100%",
  duration: 2,
});
gsap.from(".savoir02", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n02",
    toggleActions: "restart complete reverse reset",
  },
  rotate: "-360",
  duration: 2,
});
gsap.from(".n03", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n03",
    toggleActions: "restart complete reverse reset",
  },
  x: "100%",
  duration: 2,
});
gsap.from(".savoir03", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n03",
    toggleActions: "restart complete reverse reset",
  },
  rotate: "360",
  duration: 2,
});
gsap.from(".n04", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n04",
    toggleActions: "restart complete reverse reset",
  },
  x: "100%",
  duration: 2,
});
gsap.from(".savoir04", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n04",
    toggleActions: "restart complete reverse reset",
  },
  rotate: "-360",
  duration: 2,
});
gsap.from(".n05", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n05",
    toggleActions: "restart complete reverse reset",
  },
  x: "100%",
  duration: 2,
});
gsap.from(".savoir05", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n05",
    toggleActions: "restart complete reverse reset",
  },
  rotate: "360",
  duration: 2,
});

gsap.from(".n06", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n06",
    toggleActions: "restart complete reverse reset",
  },
  x: "100%",
  duration: 2,
});
gsap.from(".savoir06", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n06",
    toggleActions: "restart complete reverse reset",
  },
  rotate: "-360",
  duration: 2,
});
gsap.from(".n07", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n07",
    toggleActions: "restart complete reverse reset",
  },
  x: "100%",
  duration: 2,
});
gsap.from(".animTitle", {
  scrollTrigger: {
    start: "top 90%",
    end: "bottom 100%",
    scrub: true,
    trigger: ".n07",
    toggleActions: "restart complete reverse reset",
  },
  rotate: "360",
  duration: 2,
});

const bat = document.querySelector(".bat");
const main = document.querySelector("#main");
let temps;

gsap.to("#anim", {
  scrollTrigger: {
    trigger: "#anim",
    onUpdate: (e) => {
      bat.classList.add("is-scrolling");
    },
  },
});
gsap.to(".bat", {
  scrollTrigger: {
    scrub: true,
    pin: true,
    pinSpacing: true,
    start: "top 10%",
    end: "bottom 100%",
    trigger: "#anim",
    onUpdate: (e) => {
      if (e.direction == 1) {
        bat.classList.remove("up");
        bat.classList.add("down");
      } else {
        bat.classList.remove("down");
        bat.classList.add("up");
      }
    },
  },
});
window.addEventListener("scroll", function () {
  window.clearTimeout(temps);
  temps = setTimeout(function () {
    bat.classList.remove("down");
    bat.classList.remove("up");
  }, 250);
});
