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



// iife stands for immediatly invocked function expression
// the way of exeucating a function immediatly so that we can make a private varriable, which is hard to access
var ans = (function(){
    var privateValue = 12
    return{
        getter: function(){
            console.log(privateValue)
        },
        // gets the value to show you in console by ans.getter()
        setter: function(value){
            privateValue = value
        }
        // you can change the value of privateValue in console by ans.setter("your value")
    }
})



// prototype
// javascript given helpful properties which are assinged to objects, which you can see in console and also use to do tasks



// inharritance of objects
var human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    haveEmotions: true,
    haveFourLegs: false
}
var sheryiansStudents = {
    canMakeAmazingWebsites: true,
    canMakeAmazingAnnimations: true
}
sheryiansStudents.__proto__ = human
// now sheryansStudents object also have the values of human



// "this" keyword
// it's value is different in different places or contexts
// if anything is out of {} it's in global scope, if something is inside {} it's in local scope
// in global scope,
console.log(this) 
// will give "window"

// in function scope,
function cd(){
    console.log(this)
}
// will give "window"

// function which is inside of object is called method
// in method scope,
var obj = {
    name: "bari",
    someMethod: function(){
        console.log(this)
    }
}
someMethod()
// gives "object obj" "it's the object name
// in any method "this" always refers it's parent object

// in eventListener
var button = document.querySelector(`button`)
button.addEventListener(`click`, function(){
    console.log(this)
})
// gives the button
// you can use it like this,
var buttonUse = document.querySelector(`#buttonUse`)
buttonUse.addEventListener(`click`, function(){
    this.style.color = "red"
})