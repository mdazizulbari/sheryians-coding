gsap.from('#sect1 #circle', {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 720,
})
gsap.from('#sect2 #circle', {
    scale: 0,
    duration: 2,
    rotate: 720,
    scrollTrigger: {
        trigger: '#sect2 #circle',
        scroller: 'body',
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
        markers: true
    }
})