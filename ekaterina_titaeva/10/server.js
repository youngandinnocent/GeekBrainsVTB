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

// 1) необходимо написать сервер, который будет отображать веб страницу с прошлой дз.
// p.s. обратите внимание, что сервер должен возвращать css и js файлы с соответственным Content-Type

// 2) Добавьте все от 3 дополнительных страниц с разными значениями path.
// Примеры:
// /
// /slider
// /graph

// 3) реализуйте стилизованную (как минимум с css файлом) страницу 404 и возвращайте ее в тех случаях, когда пользователь обращается к какому-либо пути, который у вас не предусмотрен.

// 3)* добавьте файл log.txt и добавляйте туда записи о каждом посещении пользователей.
// запись об одном посещении должна содержать данные :
// время, путь, http метод, ответ сервера (200, 404 или что-то иное).

// p.s. обязательно добавьте node_modules в .gitignore