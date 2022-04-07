/*var swiper = new swiper(".myMwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});*/

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  duration: 1,
  scrollTrigger: {
    markers: true,
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
      markers: true,
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
        markers: true,
        start: 'top 80%',
        end: 'bottom 25%',
        toggleActions: 'restart complete reverse reset',
        trigger: '.no3',
      },
    })
      .from('.no3', { x: '100%' })