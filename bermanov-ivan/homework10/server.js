const http = require('http');
const dataHandler = require('./dataHandler');

const server = http.createServer((request, response) => {
    if ((/^\/(tothemoon\b|youngandinnocent\b)?$/g).test(request.url)) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        dataHandler.loadHtml(response.end.bind(response));
        dataHandler.addLog(request, response);
    } else if ((/\.css$/).test(request.url)) {
        response.writeHead(200, {
            'Content-Type': 'text/css'
        });
        dataHandler.loadCss(response.end.bind(response));
    } else if ((/\.js$/).test(request.url)) {
        response.writeHead(200, {
            'Content-Type': 'text/js'
        });
        dataHandler.loadJs(response.end.bind(response));
    } else {
        response.writeHead(404, {
            'Content-Type': 'text/html'
        });
        dataHandler.pageNotFound(response.end.bind(response));
        dataHandler.addLog(request, response);
    }
});

module.exports = { server };
