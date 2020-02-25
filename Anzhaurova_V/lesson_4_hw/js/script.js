
let postTitle = document.getElementById("post_title");
let postText = document.getElementById("post_text");
let postLinkImg = document.getElementById("post_link_img");
let postLinkSource = document.getElementById("post_link_source");
let postBtnAdd = document.getElementById("post_btn_add");
let postBtnDel = document.getElementById("post_btn_del_all");


postBtnAdd.addEventListener('click', function(){
    createCard(postTitle.value, postText.value, postLinkImg.value, postLinkSource.value)
});
postBtnDel.addEventListener('click', function (){
    removeCards()
});


function createCard(postTitle, postText, postLinkImg, postLinkSource) {
    if(document.getElementById("post_title").value === '' || document.getElementById("post_text").value === '' ||
        document.getElementById("post_link_img").value === '' || document.getElementById("post_link_source").value === ''){
        return false;
    }

    const card = document.createElement('div');//create card
    card.className = 'card';//add class for card

    const btnRemove = document.createElement('button') //create button
    btnRemove.className = 'remove'; //add class dor

    const title = document.createElement('p')
    title.innerText = postTitle;

    const txt = document.createElement('p')
    txt.innerText = postText;

    const img = document.createElement('img')
    img.setAttribute('src', postLinkImg);

    const imgSource = document.createElement('a')
    imgSource.setAttribute('src', postLinkSource);

    document.body.appendChild(card)
    card.appendChild(btnRemove)
    card.appendChild(title)
    card.appendChild(txt)
    card.appendChild(img)
    card.appendChild(imgSource)


    btnRemove.addEventListener('click', removeThisCard);
}

function removeCards() {
    let cards = document.querySelectorAll('card');
    cards.forEach(card => {
        card.remove();
    })
}

function removeThisCard() {
    this.parentNode.remove();
}


