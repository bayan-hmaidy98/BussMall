'use strict'

let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
let btn = document.getElementById('button')

let firstIndex;
let secondIndex;
let thirdIndex;

let rounds = 5;
let countclicks = 0;
Bussmall.all = [];

function Bussmall (name, source){
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.display = 0;
    Bussmall.all.push(this)
}

new Bussmall ('bag', 'img/bag.jpg')
new Bussmall ('banana', 'img/banana.jpg')
new Bussmall ('bathroom', 'img/bathroom.jpg')
new Bussmall ('boots', 'img/boots.jpg')
new Bussmall ('breakfast', 'img/breakfast.jpg')
new Bussmall ('bubblegum', 'img/bubblegum.jpg')
new Bussmall ('chair', 'img/chair.jpg')
new Bussmall ('cthulhu', 'img/cthulhu.jpg')
new Bussmall ('dog-duck', 'img/dog-duck.jpg')
new Bussmall ('dragon', 'img/dragon.jpg')
new Bussmall ('pen', 'img/pen.jpg')
new Bussmall ('pet-sweep', 'img/pet-sweep.jpg')
new Bussmall ('scissors', 'img/scissors.jpg')
new Bussmall ('shark', 'img/shark.jpg')
new Bussmall ('sweep', 'img/sweep.png')
new Bussmall ('tauntaun', 'img/tauntaun.jpg')
new Bussmall ('unicorn', 'img/unicorn.jpg')
new Bussmall ('usb', 'img/usb.gif')
new Bussmall ('water-can', 'img/water-can.jpg')
new Bussmall ('wine-glass', 'img/wine-glass.jpg')

console.log(Bussmall.all)
function getRandomIndex(){
    let randomIndex = Math.floor(Math.random() * Bussmall.all.length);
    return randomIndex;        
}

function displayThreeImgs(){
    firstIndex = getRandomIndex();
    secondIndex = getRandomIndex();
    thirdIndex = getRandomIndex();
    

    while(secondIndex === firstIndex || secondIndex === thirdIndex){
    secondIndex = getRandomIndex();}
    while(thirdIndex === firstIndex || thirdIndex === secondIndex){
        thirdIndex = getRandomIndex();
    }
    first.src = Bussmall.all[firstIndex].source;
    second.src = Bussmall.all[secondIndex].source;
    third.src = Bussmall.all[thirdIndex].source;
}
displayThreeImgs();

first.addEventListener('click', voteAndDisplay);
second.addEventListener('click', voteAndDisplay);
third.addEventListener('click', voteAndDisplay);

function voteAndDisplay(event){
    countclicks++;
    if(rounds >= countclicks){
      
            if (event.target.id === 'first') {
                console.log(Bussmall.all[firstIndex].vote++);
            }
            else if (event.target.id === 'second') {
                console.log(Bussmall.all[secondIndex].vote++);
            }
            else if (event.target.id === 'third') {
                console.log(Bussmall.all[thirdIndex].vote++);
            }

           else {
        first.removeEventListener('click', voteAndDisplay)
        second.removeEventListener('click', voteAndDisplay)
        third.removeEventListener('click', voteAndDisplay)
    }
    console.log(event);
}
}
function imageDisplay(){
    for (let i = 0; i <= Bussmall.all.length; i++)
    {
        if (first.src === Bussmall.all[i].source){
            console.log(Bussmall.all[i].display++);
        }
        else if (second.src === Bussmall.all[i].source){
            console.log(Bussmall.all[i].display++);
    }
        else if (third.src === Bussmall.all[i].source){
            console.log(Bussmall.all[i].display++);
        }
}
}

imageDisplay();
btn.addEventListener('click', getList);

function getList(){
    let ul = document.getElementById('unOrLi')
    for (let i = 0; i <= Bussmall.all.length; i++){
        let liEl = document.createElement('li');
        ul.appendChild(liEl);
        liEl.textContent = `${Bussmall.all[i].name} has ${Bussmall.all[i].vote} and ${Bussmall.all[i].display}`

    }
}