// Debugging a TypeError: Cannot read property of "X" of undefined:
var obj = {};
obj?.name?.first;
// when you don't know if ther property is actually inside that object

// Handling Asynchronous Operations:
document.getElementById("getUser").addEventListener("click", () => {
  getNewUser();
});

const getNewUser = () => {
  fetch(`https://randomuser.me/api/`)
    .then((rawData) => rawData.json())
    .then((result) => {
      const { name, email, gender, picture } = result.results[0];

      document.getElementById(
        "cardContainer"
      ).innerHTML += `<div class="card w-60 p-4 rounded-xl bg-gray-700">
          <div class="w-20 h-20 mb-3 rounded-2xl bg-gray-500 overflow-hidden">
            <img src=${picture.large} class="w-full h-full object-cover" alt="">
          </div>
          <h3 class="text-2xl font-semibold">${name.first}</h3>
          <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
          <h6 class="text-sm opacity-40 text-wrap">${email}</h6>
          <p class="mt-5 text-xs font-semibold opacity-80">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            temporibus totam molestiae aliquam.
          </p>
        </div>`;
    });
};

// Working with Local Storage
const block = document.getElementById("block");
const unBlock = document.getElementById("unBlock");
const blockStatus = document.querySelector("#blockStatus span");

block.addEventListener("click", () => {
  localStorage.setItem("block", true);
  blockStatusFunction();
});
unBlock.addEventListener("click", () => {
  localStorage.setItem("block", false);
  blockStatusFunction();
});
const blockStatusFunction = () => {
  blockStatus.textContent =
    localStorage.getItem("block") === "false" ? "Unblocked" : "Blocked";
};
blockStatusFunction();

// blocking Scroll
const blockScroll = document.getElementById('blockScroll')
blockScroll.addEventListener("click", () => {
document.body.classList.toggle("overflow-hidden")
})