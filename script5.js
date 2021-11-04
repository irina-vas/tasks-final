'use strict';

let clocks = document.createElement('div');
document.body.prepend(clocks);
clocks. classList.add('clocks');
let hoursBlock = document.createElement('span');
clocks.prepend(hoursBlock);
let dotsH = document.createElement('span');
hoursBlock.after(dotsH);
let minuetsBlock = document.createElement('span');
dotsH.after(minuetsBlock);
dotsH.textContent = ':';
let dotsM = document.createElement('span');
minuetsBlock.after(dotsM);
dotsM.textContent = ':';
let secondsBlock = document.createElement('span');
dotsM.after(secondsBlock)
let startBtn = document.createElement('button');
startBtn.textContent = 'START'
secondsBlock.after(startBtn);
let stopBtn = document.createElement('button');
startBtn.after(stopBtn);
stopBtn.textContent = 'STOP'




function setTime() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
        hours = '0' + hours
    }
    let minuets = date.getMinutes();
    if (minuets < 10) {
        minuets = '0' + hours
    }
    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + hours
    }
    hoursBlock.innerHTML = hours;
    minuetsBlock.innerHTML = minuets;
    secondsBlock.innerHTML = seconds;
}

let timer;
function start() {
    timer = setInterval(setTime, 1000);
    setTime();
}

function stop() {
    clearInterval(timer);
    timer = null;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

//second task

let headline = document.createElement('h2');
clocks.after(headline);
headline.textContent = 'EVENTS';
let containerX = document.createElement('p');
containerX.classList.add('containerX')
headline.after(containerX);
containerX.textContent = 'X: ';
let screenX = document.createElement('span');
containerX.append(screenX);

let containerY = document.createElement('p');
containerX.after(containerY);
containerY.textContent = 'Y: ';
let screenY = document.createElement('span');
containerY.append(screenY);

let block = document.createElement('div');
containerY.after(block);
block.classList.add('block');
let blockDesc = document.createElement('p');
block.after(blockDesc);
blockDesc.textContent = 'Координаты внутри блока ';
let blockX = document.createElement('span');
blockDesc.append(blockX);
blockX.textContent = 'X: ';
let blockY = document.createElement('span');
blockDesc.append(blockY);
blockY.textContent = 'Y: '




block.addEventListener('mousemove', (e) => {
    blockX.innerHTML = e.offsetX;
    blockY.innerHTML = e.offsetY;

})

window.addEventListener('mousemove', ((e) => {
    screenX.innerHTML = e.offsetX;
    screenY.innerHTML = e.offsetY;
}))

