//  1 - 10
// 20 - 30
i = 12;
while (i > 0) {
  console.log(i);
  i--;
}
// 32 - 45
// 45 - 32
// 12 - 1
for (i = 1; i < 11; i++) {
  console.log(i);
}
for (i = 20; i < 31; i++) {
  console.log(i);
}
for (i = 32; i < 46; i++) {
  console.log(i);
}
for (i = 12; i > 0; i--) {
  console.log(i);
}

// functions ------------------------------------------
// es5 & es6
// es5 - function statements, function expressions, anonymos functions
// es6 - fat arrow function
// a) basic fat arro
// b) fat arrow with one param
// c) fat arrow with implicit return

// var button = document.querySelector('button')
// var h3 = document.querySelector('h3')
// button.addEventListener('click', function(){
//     h3.style.color = 'red'
// })

var p = document.querySelector("p");
var button = document.getElementById("clickme");
button.addEventListener("click", function () {
  p.innerText = "this is the changed text";
});

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var button2 = document.getElementById("swapimage");
button2.addEventListener("click", function () {
  var src1 = img1.src;
  var src2 = img2.src;
  img1.src = src2;
  img2.src = src1;
});

var h4 = document.querySelector("h4");
var inputs = document.querySelectorAll('input[type="text"]');
var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
    if (inputs[inputIndex].value === "") {
      h4.innerText = "Please fill all the boxes";
      h4.style.color = 'red'
      break;
    }
  }
});
