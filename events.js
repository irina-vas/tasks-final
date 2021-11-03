'use strict';
let block = document.querySelector('.block');

block.addEventListener('mousemove', (e) => {
    console.log(e)
    let blockX = document.querySelector('.x_coordinate').innerHTML = e.offsetX;
    let blockY = document.querySelector('.y_coordinate').innerHTML = e.offsetY;

})

window.addEventListener('mousemove', ((e) => {
    let screenX = document.querySelector('.x').innerHTML = e.offsetX;;
    let screenY = document.querySelector('.y').innerHTML = e.offsetY;
}))