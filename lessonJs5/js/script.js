function addLi() {
    let ul = document.getElementsByClassName('menu'),
        li = document.createElement('li');
        li.appendChild(document.createTextNode('Пятый пункт'));
        li.setAttribute('class', 'menu-item');
        ul[0].appendChild(li);
}
addLi();

function changebg() {
    document.body.style.background = ("url(../img/apple_true.jpg) center no-repeat");
}
changebg();

function changeText() {
    document.getElementById("title").innerHTML= ("Мы продаем только <b> подлинную </b> технику Apple");
}
changeText();

function moveNav() {
    let ul = document.getElementsByClassName('menu')[0];
        ul.insertBefore(ul.childNodes[5], ul.childNodes[3]);
console.log(ul);
}
moveNav();

document.getElementsByClassName('adv')[0].remove();

document.getElementById('prompt').innerHTML=prompt('Как вы относитесь к технике Apple?');