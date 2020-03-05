let numElem = document.getElementById('number');

let countToNum = () => {
    let a = 0;
    numElem.innerHTML = `<p>${a}</p>`;

    let intId = setInterval(() => {
        numElem.innerHTML = `<p>${a}</p>`;
        if (++a === 405) clearInterval(intId);
    }, 0.8);
}

countToNum();