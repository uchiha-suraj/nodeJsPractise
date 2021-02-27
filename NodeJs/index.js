/* this is the example of FILE BASED MODULE    */


// const square = {
// 	area : (a) => (a*a),
// 	perimeter : (a) => (4*a)
// }

const square = require(`./square.js`);   //to import the square.js file

const calsquare = (a) =>{
	console.log(`the value of a is ${a} and the area is `+square.area(a) );
	console.log(`the value of a is ${a} and the perimeter is `+square.perimeter(a) );
}

console.log(__filename);
console.log(__dirname);

calsquare(5);