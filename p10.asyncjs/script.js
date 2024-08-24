// fecth ----------------------------------------------------------------
fetch(`https://randomuser.me/api/`)
  .then((rawdata) => rawdata.json())
  .then((readableData) =>
    console.log(readableData.results[0].location.country)
  );

// axios ----------------------------------------------------------------
axios
  .get(`https://randomuser.me/api/`)
  .then((response) => console.log(response.data.results[0].location.country))
  .catch((error) => {
    console.error("Error:", error);
  });

// promice ----------------------------------------------------------------
const promiceOrLetterOrEvedence = new Promise(function (resolve, reject) {
  fetch(`https://randomuser.me/api/`)
    .then((rawdata) => rawdata.json())
    .then((readableData) => {
      if (readableData.results) resolve();
      else reject;
    });
  console.log("promiceOrLetterOrEvedence");
});
console.log(promiceOrLetterOrEvedence);

// callbacks ----------------------------------------------------------------
const getData = (url, callback) => {
  fetch(url)
    .then((rawData) => rawData.json())
    .then((resultOrReadableData) => {
      callback(resultOrReadableData);
    });
};

getData("https://randomuser.me/api", (resultOrReadableData) => {
  console.log(resultOrReadableData.results[0].location.country);
});

// async/await ----------------------------------------------------------------
const getDataAsync = async () => {
  let a = await fetch(`https://randomuser.me/api`);
  a = await a.json();
  console.log(a);
};
getDataAsync();

// generator functions ----------------------------------------------------------------
function* allNums() {
  for (let i = 0; i < 11; i++) {
    yield i;
  }
}
const generator = allNums();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//Web workers
var manyNums = Array.from({ length: 10000 }, (a, b) => b + 1);
console.log(manyNums)
const worker = new Worker("worker.js");

worker.postMessage(manyNums);
worker.onmessage = function(data){
    console.log(data.data);
}
