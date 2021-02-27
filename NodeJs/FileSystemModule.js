/* this is the example of COREBASED MODULE */


const fs = require('fs');	////we can access 'fs' (file system) library, because it is already in Node.js

fs.copyFileSync("file1.txt", "file2.txt");		//copying file content form file1 to file2, first source then desinaton

fs.copyFileSync("file2.txt", "file3.txt");