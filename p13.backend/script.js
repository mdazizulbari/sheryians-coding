// Creating files
import { writeFile } from "node:fs";
const dataForNewFile = "Created a new file using nodeJS";
writeFile("newFile.txt", dataForNewFile, (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});

// reading files
import { readFile } from "node:fs";
readFile("newFile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// appending or adding new data
import { appendFile } from "node:fs";
const addingNewData = ". New added data data";
appendFile("newFile.txt", addingNewData, (err) => {
  if (err) throw err;
  console.log("Data appended successfully!");
});

// renaming file
import { rename } from "node:fs";
rename("newFile.txt", "renamedFile.txt", (err) => {
  if (err) throw err;
  console.log("Rename complete!");
});

// deleting file
import { unlink } from "node:fs";
unlink("renamedFile.txt", (err) => {
  if (err) throw err;
  console.log("File deleted successfully!");
});

// creating folder
import { mkdir } from "node:fs";
mkdir("newFolder", (err)=>{
    if (err) throw err;
    console.log("Folder created successfully!");
})