// higher order function
// the functions which accpects a function in a parameter or return a function or both
// 1st way
function abcd(value){}
abcd(function(){})
// 2nd way
function bcde(){
    return function(){}
}
bcde()
// forEach always takes another function inside it, so it's a higher order function
var arr = [1,2,3,4,5]
arr.forEach(function(){})



// constructor functions
// normal function where you use "this" and use "new" while calling the function
// used when you want to make something where most of the properties are same, without some exceptions
function makeCircularButton(color){
    this.radius = 2
    this.color = color
    this.icon = false
    this.pressable = true
}
var redBtn = new makeCircularButton(`red`)
var blueBtn = new makeCircularButton(`blue`)



// new keyword
// new always creates a blank obj for the cunstructor function that is being called
function ab(){
    this.age = 12
}
new ab()
// {
//     age: 12
// }
// this happens