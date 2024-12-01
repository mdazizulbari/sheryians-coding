// Creating files
import { writeFile } from "node:fs";
// const dataForNewFile = "Created a new file using nodeJS";
// writeFile("newFile.txt", dataForNewFile, (err) => {
//   if (err) throw err;
//   console.log("File created successfully!");
// });

// reading files
import { readFile } from "node:fs";
// readFile("newFile.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// appending or adding new data
import { appendFile } from "node:fs";
// const addingNewData = ". New added data data";
// appendFile("newFile.txt", addingNewData, (err) => {
//   if (err) throw err;
//   console.log("Data appended successfully!");
// });

// renaming file
import { rename } from "node:fs";
// rename("newFile.txt", "renamedFile.txt", (err) => {
// if (err) throw err;
// console.log("Rename complete!");
// });

// deleting file
import { unlink } from "node:fs";
// unlink("renamedFile.txt", (err) => {
// if (err) throw err;
// console.log("File deleted successfully!");
// });

// creating folder
import { mkdir } from "node:fs";
// mkdir("newFolder", (err)=>{
//     if (err) throw err;
//     console.log("Folder created successfully!");
// })

// reading folder
import { readdir } from "node:fs";
// readdir("newFolder", {withFileTypes: true}, (err, files) => {
//   if (err) throw err;
//   console.log(files);
// });

// deleting folder
import { rm } from "node:fs";
// rm("newFolder",{recursive: true}, (err)=>{
//     if (err) throw err;
//     console.log("Folder deleted successfully!");
// })

// importing all the files system modules
// const fs = require("fs");
import fs from "node:fs";

// synchronuss api
let data = fs.readFileSync("renamedFile.txt");
console.log("read");

// importing all the http modules
import http from "node:http";

// running http server
var server = http.createServer(function (req, res) {
  res.end("server started right now");
});
server.listen(3000);


