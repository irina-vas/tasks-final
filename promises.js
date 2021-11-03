'use strict';

const url = 'https://trevadim.github.io/vue/data/data.json';
let data = fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        addInfo(data)
    })

let root = document.createElement('div');
document.body.prepend(root);
root.classList.add('main_block');



let layout = `
    <div class="planet_card">
        <h2 class="jupiter"></h2>
            <figure>
                <img src="">
            </figure>
            <div class="title">и</div>
            <div class="info"></div>
    </div>


    <div class="planet_card">
        <h2 class="mars"></h2>
        <figure>
            <img src="">
        </figure>
        <div class="title">и</div>
        <div class="info"></div>
    </div>

    <div class="planet_card">
        <h2 class="mercury"></h2>
        <figure>
            <img src="">
        </figure>
        <div class="title">и</div>
        <div class="info"></div>
    </div>

    <div class="planet_card">
        <h2 class="saturn"></h2>
            <figure>
                <img src="">
            </figure>
            <div class="title">и</div>
            <div class="info"></div>
    </div>

    <div class="planet_card">
    <h2 class="uran"></h2>
        <figure>
            <img src="">
        </figure>
        <div class="title">и</div>
        <div class="info"></div>
    </div>

    <div class="planet_card">
    <h2 class="venus"></h2>
        <figure>
            <img src="">
        </figure>
        <div class="title">и</div>
        <div class="info"></div>
    </div>


<button>CLICK!</button>
`;


root.insertAdjacentHTML('afterbegin', layout);



function addInfo(data) {
    let dataObject = JSON.parse(JSON.stringify(data))
    let planetsData = dataObject.planets;
    console.log(planetsData)
    console.log(dataObject)


    let titles = document.getElementsByClassName('title');
    console.log(titles)

    let arrTitle = []
    for (let i of titles) {

        let arrPlanets = Object.values(planetsData);
        console.log(arrPlanets)
        i.innerHTML = arrPlanets[0].title;
    }



    console.log(arrTitle);
    for (let title in planetsData) {
        arrTitle.innerHTML = planetsData[title].title;

    }

    let arrPlanets = Object.values(planetsData);
    console.log(arrPlanets)
}

// }



