const isPalindrom = (str) => {
    str = str.toLowerCase().trim().replace(/[^A-Za-z0-9]/g,"").replace(/\s/g, "");
    let newStr = str.split('').reverse().join('');
    console.log(newStr);
    return str === "" ? null
    : newStr === str ? true
    : false;
}

const form = document.querySelector('form');
const myUl = document.querySelector('#myUl');
const input = document.querySelector('#search');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let newInput = isPalindrom(input.value);
    if (newInput === true) {
        let newLi = document.createElement('li');
        newLi.append(`${input.value} - True`);
        newLi.setAttribute('class', 'true');
        myUl.appendChild(newLi);
        input.value = '';

    } else if (newInput == false){
        let newLi = document.createElement('li');
        newLi.append(`${input.value} - False`);
        newLi.setAttribute('class', 'false');
        myUl.appendChild(newLi);
        input.value = '';
    } else {
        
    }
});

const tgl = document.querySelector('#tgl');
const btnMenu = document.querySelector('.menu');
const btnExt = document.querySelector('#exit');
btnMenu.addEventListener('click', function(){
    tgl.removeAttribute('class', ' hide-mobile');
});
btnExt.addEventListener('click', function(){
    tgl.setAttribute('class', ' hide-mobile');
});

