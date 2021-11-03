'use strict';
let hoursBlock = document.querySelector('.hours');
let minuetsBlock = document.querySelector('.minuets');
let secondsBlock = document.querySelector('.seconds');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');


function addZero(item) {
    if (item < 10) {
        return '0' + item
    }
}


function setTime() {
    let date = new Date();
    let hours = date.getHours();
    hours < 10 ? '0' + hours
    let minuets = date.getMinutes();
    let seconds = date.getSeconds();
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

