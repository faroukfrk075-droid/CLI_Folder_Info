#!/usr/bin/env node


import path from 'node:path' ;
import fs from 'fs';

const inputpath = process.argv[2];
const folderpath = inputpath ? path.resolve(inputpath) : process.cwd();


fs.readdir(folderpath , {withFileTypes : true }, function(err , entries ) {

  if (err){
    console.error(err);
  }
  else {
    const filesC = entries.filter((entry)=>entry.isFile()).length;
    const dirC = entries.filter((entry)=>entry.isDirectory()).length;
    console.log(`Folder: ${path.basename(folderpath)}` )
    console.log(`Path: ${path.folderpath}`)
    console.log("files: ",filesC);
    console.log("folders: ",dirC);
  }

})



