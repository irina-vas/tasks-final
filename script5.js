'use strict';
// let hoursBlock = document.querySelector('.hours');
// let minuetsBlock = document.querySelector('.minuets');
// let secondsBlock = document.querySelector('.seconds');
// let startBtn = document.querySelector('.start');
// let stopBtn = document.querySelector('.stop');

let clocks = document.createElement('h2');
document.body.prepend(clocks);
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

let timerId;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

