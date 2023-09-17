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

sectionFirst.appendChild(container)









