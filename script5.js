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
        minuets = '0' + minuets
    }
    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds
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
