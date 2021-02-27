const http = require('http'); 	//http is a core module
const fs = require('fs');		//accessing file system, core module
const path = require('path');	//accessing path, core module 

const hostname = "localhost";
const port = 2000;


const server = http.createServer((req, res) => {	//creating a server in http using request and response

	// console.log(req.headers);	//to see whoever requested to server to see our site

	console.log('request for ' +req.url+ 'by method' +req.method);	//to see the requested url and requested method

	if (req.method == 'GET') {	//to check if request method is GET method or not, will only return if it is GET method
		var fileURL;
		if(req.url == '/') {	//in browser if the url has backslash then
			fileURL = "/index.html";	// we will pass the index.html file
		} else {
			fileURL = req.url;		//file url will be requested url, won't open the page
		}

		var filePath = path.resolve('./public'+fileURL);	//resolve means it will make an absolute path which is fileURL
															//fileURL (index.html) inside public folder

		const fileExt = path.extname(filePath);		//will check the extension of the file


		if (fileExt == '.html') {	//checking the file extension is .html or not
			fs.exists(filePath, (exists) => {	//even if it is .html file we are checking if it is exist or not
				if(!exists){	//if .html file does not exist
					res.statusCode = 404;	//statusCode 404 means connection failure
					res.setHeader('Content-Type', 'text/html');		//we will send the html content
					res.end('<html> <body> <h1> error 404: ' +fileURL+ ' does not exist </h1> </body> </html>');		
											//after connection the failure message with file url
				} else {	//if .html file exist
					res.statusCode = 200;	//statusCode 200 means connection success, if file exist
					res.setHeader('Content-Type', 'text/html');		//we will send the html content
					fs.createReadStream(filePath).pipe(res);	/*createReadStream will read the file path and convert it
															 into streams of byte and pass that one by one in pipe through
															 which we will get the response. pipe will provide the code no 
															 matter how long the code is. */	

				}
				
			});

		} else {	//if the extension is not .html
			res.statusCode = 404;	//statusCode 404 means connection failure
			res.setHeader('Content-Type', 'text/html');		//we will send the html content
			res.end('<html> <body> <h1> error 404: ' +fileURL+ ' not a HTML file </h1> </body> </html>');		
											//after connection the failure message with file url
		}

	} else {	//if request method is not GET, instead if it is like POST, PUT, DELETE etc then
		res.statusCode = 404;	//statusCode 404 means connection failure
		res.setHeader('Content-Type', 'text/html');		//we will send the html content
		res.end('<html> <body> <h1> error 404: ' +fileURL+ ' not supported </h1> </body> </html>');		
											//after connection the failure message with file url
	}

});


server.listen(port, hostname, () => {	//we are calling the server
	console.log(`server running at http://${hostname}:${port}`);	/*this will simply return the hostname and port value 
																	  in our command prompt, only if it is succeed */
});