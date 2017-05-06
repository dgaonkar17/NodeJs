var http=require('http');   //loads http module

var app=http.createServer(function(req,res){
	//creates server
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello WOrld');

}).listen(1337);

console.log("Listening");




