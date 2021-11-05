'use strict';

let url = 'https://jsonplaceholder.typicode.com/users';
let root = document.createElement('div');
document.body.prepend(root);
root.classList.add('root');
let btn = document.createElement('button');
document.querySelector('.root').after(btn);
btn.textContent='LOAD USERS';
btn.addEventListener('click', () => {
    getData();
    btn.classList.add('hidden');
})

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let users = data.map(i => {
        return `
        <div class="card">
          <h2 class="name">${i.name}</h2>
          <p class="userName">user name: ${i.username}</p>
          <div class="adress">adress : 
            <span class="city">${i.address.city}, </span>
            <span class="suite">${i.address.suite}</span>
          </div>
          <p class="company">working in ${i.company.name}</p>
          <div class="contacts">
            <span>contacts: </span>
            <span>${i.email}, </span>
            <span>${i.phone}</span>
          </div>
        </div>
        `
    }).join('');
    console.log(users)
    root.innerHTML = users;

}

