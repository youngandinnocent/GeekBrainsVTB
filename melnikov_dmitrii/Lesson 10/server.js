'use strict';


let http = require('http');
let path = require('path');
let url = require('url');
let fs = require('fs');


const mapRoutes = {
    '/': '/',
    '/users': '/users/',
    '/registration': '/registration/',
}
const mapExts = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
}

http.createServer((req, res) => {  
    let parsedUrl = url.parse(req.url);
    let route = mapRoutes[parsedUrl.path];
    let pathName = (route) ?
        './src' + route + 'index.html': // send html files
        '.' + parsedUrl.path // send static files
    ;
    let ext = path.parse(pathName).ext;

    fs.exists(pathName, (exist) => {
        if (!exist) {
            res.statusCode = 404;
            res.end(`The error of 404: The file ${pathName} is not found`);
            return
        }
    });

    fs.readFile(pathName, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end(`There are the error: ${err}.`);
        } else {
            res.setHeader('Content-Type', mapExts[ext] || 'text/plan');
            res.end(data);
        }
    });

    logging(req);

}).listen(3000, () => console.log('Server is launched'));

function logging(req) {
    let newNote = `${req.method} ${req.url}`;

    fs.appendFile(__dirname + '/logging/log.txt', newNote + '\n', (err) => {
        if (err) throw err;
    })
}