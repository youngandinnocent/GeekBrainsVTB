document.querySelector('.add-button').addEventListener('click', (ev) => {
    ev.preventDefault();
    const descr = document.querySelector('.descr').value;
    const name = document.querySelector('.name').value; 
    const imgLink = document.querySelector('.img-link').value; 
    const sourceLink = document.querySelector('.source-link').value;
    
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <div class="image-name">${name}</div>
        <div class="image-description">${descr}</div>
        <img src=${imgLink}>
        <a href=${sourceLink}>Источник</a>
        <button class="delete-this-button">Удалить карточку</button>
    `
    document.querySelector('.items').append(newItem);
})

document.querySelector('.delete-all-button').addEventListener('click', (ev) => {
    ev.preventDefault();

    document.querySelectorAll('.item').forEach((item) => {
        item.remove();
    })
})

document.querySelector('.items').addEventListener('click', (ev) => {
    if(ev.target.classList.contains('delete-this-button')){
        ev.preventDefault();
        ev.target.parentNode.remove();
    }
})