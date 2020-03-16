const http = require('http');
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');


let loadHtml = async(req, folder, res) => {
    let dateStart = new Date(),
        filePath = path.join(__dirname, 'static', folder, '/index.html'),
        content = await fsp.readFile(filePath, 'utf-8');
    
    res.writeHead(res.statusCode, {
        'Content-Type': 'text/html'
    })
    res.end(content);
    res.on('finish', async () => {
        let dateFinish = new Date(),
            timeDiff = dateFinish - dateStart + 'ms',
            text = await fsp.readFile('log.txt', 'utf-8');

        text += `Path: ${filePath}, HTTP method: ${req.method}, 
        Server response status: ${res.statusCode}, Got response in ${timeDiff}\n`;

        fsp.writeFile('log.txt', text, 'utf-8');
    });
}

let loadFile = async(url, res, type) => {
    let filePath = path.join(__dirname, url),
        content = await fsp.readFile(filePath, 'utf-8');

    res.writeHead(res.statusCode, {"Content-Type": `text/${type}`});
    res.end(content);
}

let server = http.createServer((req, res) => {
    if (req.url === '/slider') {
        loadHtml(req, req.url, res);

    } else if (req.url === '/graph') {
        loadHtml(req, req.url, res);

    } else if (req.url === '/') {
        loadHtml(req, '/home', res);
        console.log('html loaded')

    } else if(req.url.match("\.css$")){
        loadFile(req.url, res, 'css');
        console.log(req.url, 'css loaded')

    } else if(req.url.match("\.js$")){
        loadFile(req.url, res, 'js');
        console.log(req.url, 'js loaded')

    } else if(req.url.match("\.png$")){
        let imagePath = path.join(__dirname, 'public/slider', req.url),
            fileStream = fs.createReadStream(imagePath);

        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);

    } else {
        res.statusCode = 404;
        loadHtml(req, '/404', res)
    }

}).listen(3000, () => console.log('Server run'));

module.exports = server;