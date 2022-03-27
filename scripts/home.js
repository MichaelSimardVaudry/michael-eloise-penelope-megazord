/*var swiper = new swiper(".myMwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});*/

gsap.registerPlugin(ScrollTrigger);

gsap.to('.timeline', {
    scrollTrigger: {
    markers: true,
    trigger: '.timeline',
    },
    x: '100%',
    duration: 2,
});