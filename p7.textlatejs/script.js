gsap.from("h1", {
  opacity: 0,
  delay: 0.5,
  duration: 1,
  onStart: function () {
    console.log('hello')
    $("h1").textillate({ in: { effect: "rollIn" } });
  },
});
