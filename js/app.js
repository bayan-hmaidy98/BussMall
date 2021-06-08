'use strict'

let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')

let button = document.getElementById('button')

let checkArr = [-1, -1, -1];
let firstIndex;
let secondIndex;
let thirdIndex;


let rounds = 25;
let arrOfVotes = [];
let arrOfDisplay = [];
let arrOfNames = [];
let countclicks = 0;
Bussmall.all = [];

function Bussmall (name, source){
    this.name = name;
    this.source = source;
    this.vote = 0;
    this.display = 0;
    Bussmall.all.push(this)
    arrOfNames.push(this.name)

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
    


    while(secondIndex === firstIndex || secondIndex === thirdIndex || thirdIndex === firstIndex || checkArr.includes(firstIndex) || checkArr.includes(secondIndex) || checkArr.includes(thirdIndex)) {
    firstIndex = getRandomIndex();
    secondIndex = getRandomIndex();
    thirdIndex = getRandomIndex();}
    checkArr = [];
    checkArr.push(firstIndex, secondIndex, thirdIndex)
    
  
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

console.log(Bussmall.all);
function voteAndDisplay(event){
    countclicks++;
    if(rounds >= countclicks){
      
            if (event.target.id === 'first') {
                Bussmall.all[firstIndex].vote++;
                console.log(Bussmall.all);
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
    saveToLS();
    
}
}
button.addEventListener('click', getList);

function saveToLS(){
    
    let savedItem = JSON.stringify(Bussmall.all)
    localStorage.setItem('votes',savedItem);
}
function gettingVoterIncreased(){
    let data = localStorage.getItem('votes')
    let conver = JSON.parse(data)
    // Bussmall.all = conver;
    if (data !==null){
Bussmall.all=conver;
    }
    // getList();
}

function getList(event){
   button.removeEventListener('click', getList)
    let ul = document.getElementById('unOrLi')
    for (let i = 0; i <= Bussmall.all.length-1; i++){
        let liEl = document.createElement('li');
        ul.appendChild(liEl);
        liEl.textContent = `${Bussmall.all[i].name} has ${Bussmall.all[i].vote} votes and displayed ${Bussmall.all[i].display} times.`
        arrOfVotes.push(Bussmall.all[i].vote);
        arrOfDisplay.push(Bussmall.all[i].display)
    }
    getChart();
}

function getChart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrOfNames,
            datasets: [{
                label: '# of Votes',
                data: arrOfVotes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }, {
                label: '# of shown',
                data: arrOfDisplay,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
                
            },
            indexAxis: 'y'},  
        
    })
    }
    gettingVoterIncreased();