/*var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})*/

/*const swiper = new Swiper('.mySwiper', {
  speed: 400,
  spaceBetween: 100,
  direction:'horizontal',
  effect:'slide',
  
});*/
gsap.registerPlugin(ScrollTrigger);
gsap.from(".n1", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n1",
    toggleActions: "restart complete reverse reset",
  },
  x: "100%",
  duration: 2,
});
gsap.from(".n2", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    scrub: true,
    trigger: ".n2",
    toggleActions: "restart complete reverse reset",
  },
  x: "100%",
  duration: 2,
});