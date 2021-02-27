const http = require('http'); 	//http is a core module 

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {	//creating a server in http using request and response

	console.log(req.headers);	//to see whoever requested to server to see our site

	res.statusCode = 200;	//statusCode 200 means connection success
	res.setHeader('Content-Type', 'text/html');		//we will send the html content
	res.end('<html> <body> <h1> Server connection success :) </h1> </body> </html>');		//after connection the success message

});


server.listen(port, hostname, () => {	//we are calling the server
	console.log(`server running at http://${hostname}:${port}`);	/*this will simply return the hostname and port value 
																	  in our command prompt, only if it is succeed */
});