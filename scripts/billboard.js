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

gsap.to(".no1", {
  scrollTrigger: {
    trigger: ".no1",
  },
  rotation: "360%",
  duration: 2,
});

const parapuie = document.querySelector(".parapuie");
const anim = document.querySelector("#anim");
let temps;

gsap.to("#anim", {
  scrollTrigger: {
    trigger: "#anim",
    scrub: 0.25,
    onUpdate: (e) => {
      parapuie.classList.add("is-scrolling");
    },
  },
});
gsap.to(".parapuie", {
  scrollTrigger: {
    scrub: true,
    pin: true,
    pinSpacing: true,
    start: "top 0%",
    end: "bottom 100%",
    trigger: "#anim",
    onUpdate: (e) => {
      if (e.direction == 1) {
        parapuie.classList.remove("haut");
        parapuie.classList.remove("idel");
        parapuie.classList.add("bas");
      } else {
        parapuie.classList.remove("bas");
        parapuie.classList.remove("idel");
        parapuie.classList.add("haut");
      }
    },
  },
});
window.addEventListener("scroll", function () {
  window.clearTimeout(temps);
  temps = setTimeout(function () {
    parapuie.classList.remove("bas");
    parapuie.classList.remove("haut");
    parapuie.classList.add("idel");
  }, 250);
});

const parole = document.querySelector('#parole');
const btnR = document.querySelector('.btnRecherche');
const output = document.querySelector('.output');
btnR.addEventListener('click', function(event) {
  if (parole.value = undefined) {
    output.innerText = parole.value;
  } else {
    event.preventDefault();
  }
});

fetch(`https://api.lyrics.ovh/v1/bring%20me%20the%20horizon/${value}`)
.then(response => response.json())
.then(result => {this.getRandomPokemon(result.pokemon)});
function creerHtml(parole) {
  let html = '';