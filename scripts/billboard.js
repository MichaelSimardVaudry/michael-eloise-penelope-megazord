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

gsap.from(".no1", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    trigger: ".no1",
    toggleActions: "restart complete reverse reset",
  },
  rotation: "360%",
  duration: 1,
});
gsap.from(".n02", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    trigger: ".n02",
    toggleActions: "restart complete reverse reset",
  },
  rotation: "360%",
  duration: 1,
});
gsap.from(".n03", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    trigger: ".n03",
    toggleActions: "restart complete reverse reset",
  },
  rotation: "360%",
  duration: 1,
});
gsap.from(".n04", {
  scrollTrigger: {
    start: "top 70%",
    end: "bottom 30%",
    trigger: ".n04",
    toggleActions: "restart complete reverse reset",
  },
  rotation: "360%",
  duration: 1,
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


let findtitre = document.querySelector('.findtitre');
let btnRecherche =  document.querySelector('.recherche');
let spinner = document.querySelector('.spinner');
let parolesD = document.querySelector('.paroles');

/*Chansons :
-Throne
- Doomed*/
const newLineToBr = function(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}
spinner.style.display = 'none';
btnRecherche.addEventListener('click', function(e){
  e.preventDefault();
  spinner.style.display = 'inline-block';
  
  if(findtitre.value == ''){
    findtitre.value = "Veuillez mettre le nom d'un titre ici";
    spinner.style.display = 'none';
    
  }
  else{
    fetch(`https://api.lyrics.ovh/v1/bring%20me%20the%20horizon/${findtitre.value}`) 
    .then(data => data.json()) 
    .then(actor => { 
      const newParoles = newLineToBr(actor.lyrics)
      spinner.style.display = 'none'
      parolesD.innerHTML = `<br><h2> Paroles de: ${findtitre.value} </h2><br> ${newParoles};`
    })
    .catch(error => {
      spinner.style.display = 'none'
      parolesD.innerHTML = `Désolé, les paroles n'ont pu être trouvées. En voici la raison: ${error}`});
  }
})