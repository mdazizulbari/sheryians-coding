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

var h4 = document.getElementById("formh4");
var inputs = document.querySelectorAll('input[type="text"]');
var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
    if (inputs[inputIndex].value === "") {
      h4.innerText = "Please fill all the boxes";
      h4.style.color = "red";
      break;
    }
  }
});

var inputItem = document.getElementById("inputItem");
var addItem = document.getElementById("addItem");
var removeItem = document.getElementById("removeItem");
var ul = document.getElementById("ul");
var li;

addItem.addEventListener("click", function () {
  if (inputItem.value === "") {
  } else {
    li = document.createElement("li");
    li.textContent = inputItem.value;
    ul.appendChild(li);
    inputItem.value = "";
  }
});
removeItem.addEventListener("click", function () {
  ul.removeChild(li);
});

var counterH4 = document.getElementById("counterH4");
var counterStart = document.getElementById("counterStart");
var counterStop = document.getElementById("counterStop");
var displayCounter;

counterStart.addEventListener("click", function () {
  displayCounter = 0;
  counter = setInterval(() => {
    displayCounter++;
    counterH4.innerText = displayCounter;
  }, 1000);
});
counterStop.addEventListener("click", function () {
  clearInterval(counter);
});

var About = document.getElementById("About");
var about = document.getElementById("about");
var News = document.getElementById("News");
var news = document.getElementById("news");
var Home = document.getElementById("Home");
var home = document.getElementById("home");

Home.addEventListener("click", function () {
  clearAllInfo();
  home.style.display = "block";
});
About.addEventListener("click", function () {
  clearAllInfo();
  about.style.display = "block";
});
News.addEventListener("click", function () {
  clearAllInfo();
  news.style.display = "block";
});
function clearAllInfo() {
  home.style.display = "none";
  news.style.display = "none";
  about.style.display = "none";
}

var progressBg = document.getElementById("progressBg");
var progress = document.getElementById("progress");
var taskRunning = document.getElementById("taskRunning");
var taskCompleted = document.getElementById("taskCompleted");
var taskProgress = 0;

taskProcessing = setInterval(() => {
  taskProgress++;
  if (taskProgress >= 100) {
    clearInterval(taskProcessing);
    taskRunning.style.display = "none";
    taskCompleted.style.display = "block";
  }
  progress.style.width = taskProgress + "%";
  console.log(taskProgress);
}, 200);

var data = [
  {
    name: "Khadija",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1677288649721-d589c4df7eca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rohan",
    imgSrc:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sumaiya",
    imgSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Arif",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1670431913956-b1a5960ec8c3?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Abdul",
    imgSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jahangir",
    imgSrc:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Aziz",
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Search section ------------------------------------------------------------------
var searchInput = document.getElementById("searchInput");
var peopleContainer = document.querySelector(".people");
var persons = "";
data.forEach(function (element) {
  persons += `<div class="person">
            <div class="searchImg">
              <img src="${element.imgSrc}" alt="" />
            </div>
            <h4 class="searchPersonName">${element.name}</h4>
     </div>`;
});
peopleContainer.innerHTML = persons;

searchInput.addEventListener("input", function () {
  var searchedPersonsData = data.filter(function (element) {
    return element.name
      .toLowerCase()
      .startsWith(searchInput.value.toLowerCase());
  });
  var searchedPersons = "";
  searchedPersonsData.forEach(function (element) {
    searchedPersons += `<div class="person">
            <div class="searchImg">
              <img src="${element.imgSrc}" alt="" />
            </div>
            <h4 class="searchPersonName">${element.name}</h4>
     </div>`;
  });
  peopleContainer.innerHTML = searchedPersons;
});

var characters = document.getElementById("characters");
var characterInput = document.getElementById("characterInput");
var characterCount = "";
characterInput.addEventListener("input", function () {
  characterCount = characterInput.value.length;
  characters.innerText = characterCount;
  console.log(characterCount);
});
