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

window.addEventListener("scroll",() => {
gsap.fromt(".n01", {
  
  opacity: 1,
  x: '400%',
})
});