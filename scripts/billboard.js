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

gsap.to('.no1', {
  
  scrollTrigger: {
    trigger: '.no1',
  },
  markers:true,
  rotation: '360%',
  duration: 2,
});



const parapuie = document.querySelector('.parapuie');
const main = document.querySelector('#main');
let temps;

gsap.to('#main', {
  scrollTrigger: {
    trigger: '#main',
    scrub: 0.25,
    onUpdate: (e) => {
      parapuie.classList.add("is-scrolling");
    }
  }
});
gsap.to(".parapuie", {
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: "top 0%",
    end: "bottom 100%",
    trigger: "#main",
    onUpdate: (e) => {
      if (e.direction == 1) {
        parapuie.classList.remove("haut");
        parapuie.classList.add("bas");
        
      } else {
        parapuie.classList.remove("bas");
        parapuie.classList.add("haut");
      }
    }
  }
});
