'use strict';
let hoursBlock = document.querySelector('.hours');
let minuetsBlock = document.querySelector('.minuets');
let secondsBlock = document.querySelector('.seconds');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');


// function addZero(item) {
//     if (item < 10) {
//         return '0' + item
//     }
// }


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
stopBtn.addEventListener('click', stop());

