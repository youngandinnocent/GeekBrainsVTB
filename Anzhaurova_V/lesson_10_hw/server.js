/*
1) необходимо написать сервер, который будет отображать веб страницу с прошлой дз.
    p.s. обратите внимание, что сервер должен возвращать css и js файлы с соответственным Content-Type
2) Добавьте все от 3 дополнительных страниц с разными значениями path.
    Примеры:
/
/slider
/graph
3) реализуйте стилизованную (как минимум с css файлом) страницу 404 и возвращайте ее в тех случаях, когда пользователь обращается к какому-либо пути, который у вас не предусмотрен.
3)* добавьте файл log.txt и добавляйте туда записи о каждом посещении пользователей.
    запись об одном посещении должна содержать данные :
    время, путь, http метод, ответ сервера (200, 404 или что-то иное).
p.s. обязательно добавьте node_modules в .gitignore*/

const http = require('http');
const path = require('path');
const fs = require('fs');

//создаем сервер
const server = http.createServer(function(request, response) {

    //если пользователь перешел по указанным адресам
    if (request.url === "/"){ getHtml(request, response,{ 'Content-Type': 'text/html' })}
    else if (request.url === "/canvas"){ getHtml(request, response,{ 'Content-Type': 'text/html' })}
    else if (request.url === "/regexp"){ getHtml(request, response,{ 'Content-Type': 'text/html' })}
    else if (request.url.match(/.css$/)){ getPublic(request, response,{ 'Content-Type': 'text/css' })}
    else if (request.url.match(/.js$/)){ getPublic(request, response,{ 'Content-Type': 'text/js' })}
    else { getError(response,{ 'Content-Type': 'text/html' })}//404

        getLogs(request, response);
    });

function getError(response, header) {
    const pagePath = path.join(__dirname, 'public', 'error.html');
    getPage(response, header, 404, pagePath);
}

function getHtml(request, response, header) {
    const pagePath = path.join(__dirname, 'public', request.url, 'index.html');
    getPage(response, header, 200, pagePath);
}

function getPublic(request, response, header) {
    const pagePath = path.join(__dirname, request.url);
    getPage(response, header, 200, pagePath);
}
function getPage(response, header, status, path) {
    const data = fs.readFileSync(path);
    response.writeHead(status, header);
    response.end(data);
}

function getLogs(request, response) {
    const startTime = Date.now();
    const fullpath = path.join(__dirname, 'log.txt');
    const httMethod = request.method;
    const status = request.statusCode;

    response.on('close', () => {
        const endTime = Date.now();
        const fullTime = endTime - startTime + 'ms';
        const data = `HttpMethod: ${httMethod}, Status: ${status}, Path: ${request.url} Time: ${fullTime}`;
        fs.appendFileSync(fullpath, data);
    });
}

server.listen(3000);
module.exports = {server};