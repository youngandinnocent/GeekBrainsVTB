const http = require('http');
const path = require('path');
let fs = require('fs');

function writeLogs(request, response) {
    let filePath = __dirname + '/log.txt';
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            throw new Error(error);
        }
        console.log(request.url)
        let newLogs = content + `Время: ${new Date()}. Путь: ${__dirname + request.url}. HTTP-метод: ${request.method}. Ответ сервера: ${response.statusCode}.\n`;
        fs.writeFile(filePath, newLogs, err => { if (err) { throw new Error(err); } });
    })
}

http.createServer(function (request, response) {
    if (request.url === "/") {
        fs.readFile('./static/html/home.html', function (err, data) {
            if (err) {
                response.writeHeader(404);
                response.end(JSON.stringify(err));
                return;
            }
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.end(data);
        })
        writeLogs(request, response);
    }
    else if (request.url === "/slider") {
        fs.readFile('./static/html/slider.html', function (err, data) {
            if (err) {
                response.writeHeader(404);
                response.end(JSON.stringify(err));
                return;
            }
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.end(data);
        })
        writeLogs(request, response);
    }
    else if (request.url === "/graph") {
        fs.readFile('./static/html/graph.html', function (err, data) {
            if (err) {
                response.writeHeader(404);
                response.end(JSON.stringify(err));
                return;
            }
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.end(data);
        })
        writeLogs(request, response);
    }
    else if ((/\.css$/).test(request.url)) {
        fs.readFile(__dirname + request.url, function (err, data) {
            if (err) {
                response.writeHeader(404);
                response.end(JSON.stringify(err));
                return;
            }
            response.writeHeader(200, { "Content-Type": "text/css" });
            response.end(data);
        })
    }
    else if ((/\.js$/).test(request.url)) {
        fs.readFile(__dirname + request.url, function (err, data) {
            if (err) {
                response.writeHeader(404);
                response.end(JSON.stringify(err));
                return;
            }
            response.writeHeader(200, { "Content-Type": "text/js" });
            response.end(data);
        })
    }
    else if (request.url === '/favicon.ico') {
        response.writeHead(200, { 'Content-Type': 'image/x-icon' });
        response.end();
    }
    else {
        fs.readFile('./static/html/error.html', function (err, data) {
            if (err) {
                response.writeHeader(404);
                response.end(JSON.stringify(err));
                return;
            }
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.end(data);
        })
        writeLogs(request, response);
    }
}).listen(8000);