// 1

let containerForm = document.getElementById('root');

let formTag = document.createElement('form');
formTag.name='geekBrainsForm';

let pTag = document.createElement('p');
pTag.innerText = 'Заполните поля';

let inputTag1 = document.createElement('input');
inputTag1.type = 'text';
inputTag1.placeholder = 'Введите название поста'; // Metallica на стадионе

let textareaTag = document.createElement('textarea'); // 80 000 зрителей
textareaTag.rows ="10"

let inputTag2 = document.createElement('input');
inputTag2.type = 'text';
inputTag2.placeholder = 'Введите ссылку на изображение'; // https://www.metallica.com/on/demandware.static/-/Sites-Metallica-Library/default/dwbb154b9c/images/homepage/home-hero-                                                                    // stadium.jpg

let inputTag3 = document.createElement('input');
inputTag3.type = 'text';
inputTag3.placeholder = 'Введите ссылку на источник'; // https://www.metallica.com/

let inputTag4 = document.createElement('input');
inputTag4.type = 'reset';
inputTag4.value = 'Запостить';
inputTag4.id = 'reset';
inputTag4.setAttribute('onclick','addPost();');

containerForm.appendChild(formTag);
formTag.appendChild(pTag);
formTag.appendChild(inputTag1);
formTag.appendChild(textareaTag);
formTag.appendChild(inputTag2);
formTag.appendChild(inputTag3);
formTag.appendChild(inputTag4);

sectionTag = document.createElement('section'); // создаем шаблонный элемент section для карточки и скрываем его из DOM при помощи css nth-child(n)
divTag2 = document.createElement('div');
divTag2.setAttribute('class','imgDiv');
spanTag = document.createElement('span');
divTag = document.createElement('div');
imgTag = document.createElement('img');
aTag = document.createElement('a');

containerForm.appendChild(sectionTag); 
sectionTag.appendChild(spanTag);
sectionTag.appendChild(divTag);
sectionTag.appendChild(divTag2);
divTag2.appendChild(imgTag);
sectionTag.appendChild(aTag);

let buttonTag2 = document.createElement('button');
buttonTag2.type = 'button';
buttonTag2.innerText = 'Удалить';
buttonTag2.setAttribute('class','RemoveOneCards');
buttonTag2.setAttribute('onclick','RemoveOneCards(this.parentNode);'); // передаем в function RemoveOneCards() родителя section нажатой кнопки 
sectionTag.appendChild(buttonTag2); // кнопка из задания 3

/*

способ с массивами более громоздкий

let i = 0;
let sectionTag = []; 
let divTag2 = []; 
let spanTag = [];
let divTag = [];
let imgTag = [];
let aTag = [];
*/

function addPost() {  
    
    spanTag.innerText = inputTag1.value;
    divTag.innerText = textareaTag.value;
    imgTag.src = inputTag2.value;
    aTag.innerText = 'Источник: ' + inputTag3.value;
    aTag.href = inputTag3.value;
    aTag.target = '_blank';
    
    containerForm.appendChild(sectionTag.cloneNode(true));
    
    
    /*
    
    способ с массивами более громоздкий
    
    sectionTag[i] = document.createElement('section');  
    divTag2[i] = document.createElement('div');
    divTag2[i].setAttribute('class','imgDiv');
    spanTag[i] = document.createElement('span');
    divTag[i] = document.createElement('div');
    imgTag[i] = document.createElement('img');
    aTag[i] = document.createElement('a');
    
    containerForm.appendChild(sectionTag[i]); 
    sectionTag[i].appendChild(spanTag[i]);
    sectionTag[i].appendChild(divTag[i]);
    sectionTag[i].appendChild(divTag2[i]);
    divTag2[i].appendChild(imgTag[i]);
    sectionTag[i].appendChild(aTag[i]);
    
    sectionTag[i].appendChild(buttonTag2.cloneNode(true)); // кнопка из задания 3

    spanTag[i].innerText = inputTag1.value;

    divTag[i].innerText = textareaTag.value;
    imgTag[i].src = inputTag2.value;
    aTag[i].innerText = 'Источник: ' + inputTag3.value;
    aTag[i].href = inputTag3.value;
    aTag[i].target = '_blank';
    i++;
    */
    
}



// 2

let buttonTag = document.createElement('button');
buttonTag.type = 'button';
buttonTag.id = 'removeCards';
buttonTag.innerText = 'Удалить все карточки';
buttonTag.setAttribute('onclick','RemoveAllCards();');
containerForm.appendChild(buttonTag);

function RemoveAllCards() {
    
    let sectionAllCards = document.getElementsByTagName('section');  
    
    Array.prototype.forEach.call(
        sectionAllCards,
        function(elem, i) {if (i !==0) elem.setAttribute('class','Remove');}
    );
    
}



// 3

// кнопка ставится в DOM в function addPost() из упражнения 1  

function RemoveOneCards(thisSec) {
    thisSec.setAttribute('class','Remove');
}





































