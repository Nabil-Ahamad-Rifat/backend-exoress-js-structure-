const http = require('http');
const fs = require('fs');



exports.hello=(req,res)=>{

res.status(200).json({status:"success",data:"this is my first express rest in api "});

};

// this is for home page
exports.home=(req,res)=>{
    res.status(200).end("this is home page ");
};
// this is for home page
exports.about=(req,res)=>{
    res.status(200).end("this is about page ");
};
// this is for contract page

exports.contact=(req,res)=>{
res.status(200).end("this is contact page ");;
};






// Create a server
// const server = http.createServer((req, res) => {
exports.file =(req,res)=>{
    if (req.url === '/file' && req.method === 'GET') {
        // Write "Hello World" to demo.txt
        fs.writeFile('demo.txt', 'Hello World', (err) => {
            if (err) {
                // Send a response with an error message
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Failed to write to the file.');
            } else {
                // Send a success response
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('File has been created and written successfully.');
            }
        });
    }
    else {
        // Send a 404 response for other routes
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }

};











