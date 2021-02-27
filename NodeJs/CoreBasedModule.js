/* this is the example of COREBASED MODULE */


const path = require('path');		//we can access 'path' library, because it is already in Node.js
									//these are the different type of'path' method
const filename = path.join(__filename);		//to see the file path
const basename = path.basename(filename);	//to see the file name
const extname = path.extname(basename);		//to see the file extension

console.log(filename);
console.log(basename);
console.log(extname);