'use strict';

let url = 'https://jsonplaceholder.typicode.com/users';


async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    // let root = document.createElement('div');
    // document.body.prepend(root);
    // console.log(root);

    let users = data.map(i => {
        return `
        <div class="card">
            <div class="id">${i.id}</div>
            <div className="name">${i.name}</div>
            <div class="userName">${i.username}</div>
            <div class="email">${i.email}</div>
        </div>
        `
    }).join('');
    console.log(users)
    document.querySelector('.root').innerHTML = users;

    return users
}
getData()

// function getUsers(data) {
//     let dataUsers = data;
//     console.log(dataUsers);
//
//     let root = document.createElement('div');
//     document.body.prepend(root);
//     console.log(root);
//
//     let cards = dataUsers.map(i => {
//         return
//         `<div class="card">
//             <div class="id">${i.id}</div>
//             <div className="name">${i.name}</div>
//             <div class="userName">${i.username}</div>
//             <div class="email">${i.email}</div>
//         </div>
//         `
//
//     }).join('');
//     console.log(cards)
//
//
// }

