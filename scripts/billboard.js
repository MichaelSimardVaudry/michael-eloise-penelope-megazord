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
const body = document.querySelector('body');

body.addEventListener("scroll",() => {
gsap.to(".n01", {
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'center 50%',
    end: 'center 0%',
    trigger: '.n01',
  },
  duration: 1,
  x: '400%',
})
});