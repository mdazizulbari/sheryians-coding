// Creating files
import {writeFile} from 'node:fs'
const dataForNewFile = "Created a new file using nodeJS"
writeFile("newFile.txt", dataForNewFile,(err)=>{
    if(err) throw err;
    console.log("File created successfully!")
})