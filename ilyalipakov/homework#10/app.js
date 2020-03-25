const http = require('http');
const fs = require('fs');
const path = require('path');

const commonHeaders = { 'Content-Type': 'text/html' };
const cssHeaders = { 'Content-Type': 'text/css' };
const jsHeaders = { 'Content-Type': 'text/javascript' };

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    loadHTML(req, res, commonHeaders);
  } else if (url === '/deadline') {
    loadHTML(req, res, commonHeaders);
  } else if (url === '/load') {
    loadHTML(req, res, commonHeaders);
  } else if (url.match('.css$')) {
    loadStatic(req, res, cssHeaders);
  } else if (url.match('.js$')) {
    loadStatic(req, res, jsHeaders);
  } else {
    load404(res, commonHeaders);
  }

  writeLog(req, res);
});

// Methods
function load404(res, header) {
  const filepath = path.join(__dirname, 'static', '404.html');
  loadFile(res, header, 404, filepath);
}

function loadHTML(req, res, header) {
  const filepath = path.join(__dirname, 'static', req.url, 'index.html');
  loadFile(res, header, 200, filepath);
}

function loadStatic(req, res, header) {
  const filepath = path.join(__dirname, req.url);
  loadFile(res, header, 200, filepath);
}

function loadFile(res, header, status, path) {
  const data = fs.readFileSync(path);
  res.writeHead(status, header);
  res.end(data);
}

function writeLog(req, res) {
  const startTime = Date.now();
  const fullpath = path.join(__dirname, 'log.txt');
  const httMethod = req.method;
  const status = res.statusCode;

  res.on('close', () => {
    const endTime = Date.now();
    const fullTime = endTime - startTime + 'ms';
    const data = `HttpMethod: ${httMethod}, Status: ${status}, Path: ${req.url} Time: ${fullTime}   \n`;

    fs.appendFileSync(fullpath, data);
  });
}

server.listen(5000);
