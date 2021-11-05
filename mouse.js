
let headline = document.createElement('h2');
document.body.prepend(headline);
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
