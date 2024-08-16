var tl = gsap.timeline()

tl.from("nav p", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.3,
});
tl.from('section h1',{
    x: -500,
    opacity: 0,
    duration: .8,
    stagger: .4
})
tl.from('img',{
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: .5,
    stagger: .5
})
tl.from("footer p", {
  y: 50,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.3,
});