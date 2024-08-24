onmessage = function (data) {
  const ans = data.data.reduce((accumulator, item) => item + accumulator, 0);
  this.postMessage(ans);
};
