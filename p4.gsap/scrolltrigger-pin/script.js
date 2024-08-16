gsap.to("#sect2 img", {
    width: "100%",
    scrollTrigger: {
        trigger: "#sect2",
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})

gsap.to("#sect3 h2",{
    transform: "translateX(-260%)",
    scrollTrigger: {
        trigger: "#sect3",
        scroller: "body",
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true,
        markers: true
    }
})