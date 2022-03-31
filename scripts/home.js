/*var swiper = new swiper(".myMwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});*/

gsap.registerPlugin(ScrollTrigger);

gsap.to('no1', {
    scrollTrigger: {
    markers: true,
    trigger: 'no1',
    },
    x: '100%',
    duration: 2,
});