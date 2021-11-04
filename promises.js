'use strict';

const url = 'https://trevadim.github.io/vue/data/data.json';

function fetchingData() {
    let data = fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            addInfo(data)
        })
}


let root = document.createElement('div');
document.body.prepend(root);
root.classList.add('main_block');
let btn = document.createElement('button');
btn.textContent='GET INFO';
root.after(btn);
btn.addEventListener('click', () => {
    fetchingData()
    btn.classList.add('hidden');
})




function addInfo(data) {
    let dataObject = JSON.parse(JSON.stringify(data))
    let planetsData = dataObject.planets;
    console.log(planetsData);
    let planetsArr = [];


    for (let i in planetsData) {
        planetsArr.push(planetsData[i])
    }


    let planets = planetsArr.map(i => {
        return `

      <div class="card">
        <h2 class="title">${i.title}</h2>
        <figure>
            <img src=${i.url}>
        </figure>
        <div class="info">${i.info[0]}</div>
      </div>

    `
    })

    root.innerHTML = planets;

}



