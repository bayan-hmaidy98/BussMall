'use strict'

let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')

let button = document.getElementById('button')


let firstIndex;
let secondIndex;
let thirdIndex;


let rounds = 25;


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
    


    while(secondIndex === firstIndex || secondIndex === thirdIndex || thirdIndex === firstIndex) {
    firstIndex = getRandomIndex();
    secondIndex = getRandomIndex();
    thirdIndex = getRandomIndex();}
    

  
    first.src = Bussmall.all[firstIndex].source;
    Bussmall.all[firstIndex].display++
    second.src = Bussmall.all[secondIndex].source;
    Bussmall.all[secondIndex].display++
    third.src = Bussmall.all[thirdIndex].source;
    Bussmall.all[thirdIndex].display++

}
displayThreeImgs();

first.addEventListener('click', voteAndDisplay);
second.addEventListener('click', voteAndDisplay);
third.addEventListener('click', voteAndDisplay);

function voteAndDisplay(event){
    countclicks++;
    if(rounds >= countclicks){
      
            if (event.target.id === 'first') {
                Bussmall.all[firstIndex].vote++;
            }
            else if (event.target.id === 'second') {
                Bussmall.all[secondIndex].vote++;
            }
            else if (event.target.id === 'third') {
                Bussmall.all[thirdIndex].vote++;
            }

            displayThreeImgs();
           
    // console.log(event);
}
else {
    first.removeEventListener('click', voteAndDisplay)
    second.removeEventListener('click', voteAndDisplay)
    third.removeEventListener('click', voteAndDisplay)
    
}
}
button.addEventListener('click', getList);



function getList(event){
   button.removeEventListener('click', getList)
    let ul = document.getElementById('unOrLi')
    for (let i = 0; i <= Bussmall.all.length-1; i++){
        let liEl = document.createElement('li');
        ul.appendChild(liEl);
        liEl.textContent = `${Bussmall.all[i].name} has ${Bussmall.all[i].vote} votes and displayed ${Bussmall.all[i].display} times.`
    

    }
    
}

