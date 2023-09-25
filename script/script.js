const root = document.getElementById("root");

const sectionFirst = document.createElement('section');
sectionFirst.classList.add('section-first');
root.appendChild(sectionFirst);
document.body.appendChild(root);


sectionFirst.style.backgroundImage = "URL('media/box.svg')";

const h1 = document.createElement('h1');
h1.textContent = 'РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ';
sectionFirst.appendChild(h1);


const p = document.createElement('p');
p.textContent = 'стадионы, газопроводы, мосты, дамбы';
sectionFirst.appendChild(p);

const container = document.createElement('div');
container.classList.add('whiteContainer');


for (let i = 0; i <= 3; i++) {
    let box = document.createElement('div');
    box.classList.add('box-container');
    container.appendChild(box);
    
    let h3 = document.createElement('h3');
    h3.textContent = '26';
    box.appendChild(h3);

    let h4= document.createElement('h4');
    h4.textContent = 'лет';
    box.appendChild(h4);

    let h5 = document.createElement('h5');
    h5.textContent = 'на рынке';
    box.appendChild(h5);
}
sectionFirst.appendChild(container);

const sectionSecond = document.createElement('section');
sectionSecond.classList.add('section-second');
root.appendChild(sectionSecond);
// document.body.appendChild(root);

const h2 = document.createElement('h2');
h2.textContent = 'НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ';
sectionSecond.appendChild(h2);

const container2 = document.createElement('div');
container2.classList.add('bigContainer');

for (let i = 0; i <= 2; i++) {
    let project = document.createElement('div');
    project.classList.add('project-container');
    container2.appendChild(project);

    let img = document.createElement('img');
    img.src = "URL('HW-Header/media/Project.svg')";
    project.appendChild(img);

    let hr= document.createElement('hr');
    project.appendChild(hr);

    let h4= document.createElement('h4');
    h4.textContent = 'Арена';
    project.appendChild(h4);

    let firstItem = document.createElement('p');
    firstItem.textContent = 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.';
    project.appendChild(firstItem);
    container2.appendChild(project);
}
sectionSecond.appendChild(container2);

const request = document.createElement('section');
request.classList.add('sectionRequest');
root.appendChild(request);
// document.body.appendChild(root);

const divItems = document.createElement('div');
divItems.classList.add('div-items');
request.appendChild(divItems);

const divForItems = document.createElement('div');
divForItems.classList.add('div-for-items');


const nextSection = document.createElement('h2');
nextSection.textContent = 'САМЫЕ УМНЫЕ ПРОЕКТЫ';
divForItems.appendChild(nextSection);

const littleSection = document.createElement('h3');
littleSection.textContent = 'РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!';
divForItems.appendChild(littleSection);

divItems.appendChild(divForItems);


const button = document.createElement('button');
button.innerHTML = 'ВАШ ЗАПРОС';
button.classList.add('customButton');
divItems.appendChild(button);

const services = document.createElement('section');
services.classList.add('sectionServices');
root.appendChild(services);

const lightServices = document.createElement('h2');
lightServices.textContent = 'ЧЕМ МЫ ЗАНИМАЕМСЯ?';
services.appendChild(lightServices);

const serviceItem = document.createElement('div');
serviceItem.classList.add('service_item');

for (let i = 0; i <= 2; i++) {
    let group = document.createElement('div');
    group.classList.add('group');
    serviceItem.appendChild(group);

    let img = document.createElement('img');
    img.src = "URL('HW-Header/media/home.svg')";
    group.appendChild(img);

    let h4= document.createElement('h4');
    h4.textContent = 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ';
    group.appendChild(h4);

    // services.appendChild(serviceItem);
}
services.appendChild(serviceItem);

const services1 = document.createElement('section');
services1.classList.add('sectionServices1');
root.appendChild(services1);

const lightServices1 = document.createElement('h2');
lightServices1.textContent = 'ЧЕМ МЫ ЗАНИМАЕМСЯ?';
services1.appendChild(lightServices1);

const serviceItem1 = document.createElement('div');
serviceItem1.classList.add('service_item1');

for (let i = 0; i <= 5; i++) {
    let group1 = document.createElement('div');
    group1.classList.add('group1');
    serviceItem1.appendChild(group1);

    let img = document.createElement('img');
    img.src = "URL('HW-Header/media/home.svg')";
    group1.appendChild(img);

    let h4= document.createElement('h4');
    h4.textContent = 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ';
    group1.appendChild(h4);
}
    services1.appendChild(serviceItem1);












