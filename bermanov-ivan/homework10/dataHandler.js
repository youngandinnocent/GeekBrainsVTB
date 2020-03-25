const path = require('path');
const fs = require('fs');

const loadHtml = (callBack) => {
    const filePath = path.join(__dirname, 'src', 'index.html');
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            throw new Error(error);
        }
        callBack(content);
    });
};

const loadJs = (callBack) => {
    const filePath = path.join(__dirname, 'src', 'script.js');
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            throw new Error(error);
        }
        callBack(content);
    });
};

const loadCss = (callBack) => {
    const filePath = path.join(__dirname, 'src', 'style.css');
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            throw new Error(error);
        }
        callBack(content);
    });
};

const pageNotFound = (callBack) => {
    const filePath = path.join(__dirname, 'src', 'pageNotFound.html');
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            throw new Error(error);
        }
        callBack(content);
    });
};

const addLog = (request, response) => {
    const filePath = path.join(__dirname, 'log.txt');
    fs.readFile(filePath, 'utf-8', (error, content) => {
        if (error) {
            throw new Error(error);
        }

        const writeLog = `${content}
            Date: ${new Date()}
            Url: ${__dirname + request.url}
            HTTP method: ${request.method}
            Status code: ${response.statusCode}\n`;

        fs.writeFile(filePath, writeLog, (error) => {
            if (error) {
                throw new Error(error);
            }
        });
    });
};

module.exports = { loadHtml, loadCss, loadJs, pageNotFound, addLog };
