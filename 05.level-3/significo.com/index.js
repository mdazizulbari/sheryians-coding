function homeAnnimation(){
    gsap.set('.slidesm', {scale:5})

    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        }
    })

    tl.to('.videoDiv', {
        '--clip': '0%',
        ease: Power2
    }, 'a')

    tl.to('.slidesm', {
        scale: 1,
        ease: Power2
    }, 'a')

    tl.to('.lft', {
        xPercent: -10,
        stagger: .03,
        ease: Power4
    }, 'b')

    tl.to('.rgt', {
        xPercent: 10,
        stagger: .03,
        ease: Power4
    }, 'b')
}
function sliderAnnimation(){
    gsap.to('.slide', {
        scrollTrigger: {
            trigger: '.real',
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        xPercent: -200,
        ease: Power4
    })    
}
function teamAnnimation(){
    document.querySelectorAll(".list-element").forEach(function(element){
        element.addEventListener('mousemove', function(details){
            gsap.to(this.querySelector('.picture'), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, details.clientX),
                ease: Power4,
                duration: .5
            })
        })
        element.addEventListener('mouseleave', function(details){
            gsap.to(this.querySelector('.picture'), {
                opacity: 0,
                ease: Power4,
                duration: .5
            })
        })
    })
}

homeAnnimation()
sliderAnnimation()
teamAnnimation()