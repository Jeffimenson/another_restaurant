import './style.css';

import logo from './bcbonalds.jpg';
import manEatingBurger from './man_eating_burger.jpeg';

const body = document.querySelector('body');
const content = document.querySelector('#content');

const fakeLinks = [];
createHeader(fakeLinks);
const menuFakeLink = fakeLinks[0];
const contactFakeLink = fakeLinks[1];
const aboutFakeLink = fakeLinks[2];

loadAbout(aboutFakeLink, fakeLinks);

aboutFakeLink.addEventListener('click', () => {
    clearContent(content);
    loadAbout(aboutFakeLink, fakeLinks);
});

contactFakeLink.addEventListener('click', ()=>{
    clearContent(content); //this not working for some reason
    loadContact(contactFakeLink, fakeLinks);
});

menuFakeLink.addEventListener('click', () => {
    clearContent(content);
    loadMenu(menuFakeLink, fakeLinks);
});

function createHeader(fakeLinks){
    const header = document.createElement('header');
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.alt = 'logo';
    logoImg.classList.add('logo');
    header.append(logoImg);

    for (let i = 0; i < 3; i++){
        const newButton = document.createElement('button');
        newButton.classList.add('fake-link');
        header.append(newButton);
        fakeLinks[i] = newButton;
    }
    fakeLinks[0].setAttribute('id', 'menu');
    fakeLinks[0].textContent = 'Menu';
    fakeLinks[1].setAttribute('id', 'contact');
    fakeLinks[1].textContent = 'Contact';
    fakeLinks[2].setAttribute('id', 'about');
    fakeLinks[2].textContent = 'About';

    const orderButton = document.createElement('button');
    orderButton.setAttribute('id', 'order');
    orderButton.textContent = 'Order now';
    header.append(orderButton);

    body.prepend(header);
}

function loadAbout(aboutLink, fakeLinks) {
    reassignSelectedFakeLink(aboutLink, fakeLinks);

    const heading1 = document.createElement('h1');
    heading1.textContent = "About us";
    content.append(heading1);
    const img = document.createElement('img');
    img.src = manEatingBurger;
    img.alt = "man enjoying bcbonalds burger";
    content.append(img);
    const heading2 = document.createElement('h2');
    heading2.textContent = "Dedication to you";
    content.append(heading2);
    const para = document.createElement('p');
    para.textContent = "We redefine fast food with imaginative flavors and a quirky atmosphere all for our mission to make dining fun and unforgettable! Join us at BcBonalds for a delightful experience that leaves you smiling with every bite.";
    content.append(para);
}

function loadContact(contactLink, fakeLinks){
    reassignSelectedFakeLink(contactLink, fakeLinks);


    const heading1 = document.createElement('h1');
    heading1.textContent = "Need to Contact us?";
    content.append(heading1);
    const heading2 = document.createElement('h2');
    heading2.textContent = "Reach us at:";
    content.append(heading2);
    const para = document.createElement('p');
    para.textContent = "bcbonaldsisgreat@bcbonalds.com \n 843-420-6969";
    content.append(para);
}

function loadMenu(menuLink, fakeLinks){
    reassignSelectedFakeLink(menuLink, fakeLinks);

    const heading1 = document.createElement('h1');
    heading1.textContent = "Our food";
    content.append(heading1);

    const menuHolder = document.createElement('div');
    menuHolder.classList.add('menu-holder');
    content.append(menuHolder);

    for (let i = 0; i < 8; i++){
        const entryArticle = makeEntry('BcBurger®', 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-4-product-tile-desktop');
        menuHolder.append(entryArticle);
    }
}

function makeEntry(name, img){
    const entryArticle = document.createElement('article');
    const entryImg = document.createElement('img');
    entryImg.src = img;
    entryImg.alt = 'entry image for ' + name;
    entryArticle.append(entryImg);
    const entryName = document.createElement('p');
    entryName.textContent = name;
    entryArticle.append(entryName);

    return entryArticle;
}



function reassignSelectedFakeLink(fakeLink, fakeLinks){
    fakeLinks.map((fakeLink => {
        fakeLink.classList.remove('selected');
    }));
    fakeLink.classList.add('selected');
}

function clearContent(content){
    content.textContent = "";
}


/* make this here now lol
    <header>
        <img class="logo" src="bcbonalds.jpg" alt="logo">
        <button class="fake-link" id="menu">Menu</button>
        <button class="fake-link" id="contact">Contact</button>
        <button class="fake-link selected" id="About">About</button>
        <button id="order">Order</button>
    </header>

    <div id="content">
        <h1>About us</h1>
        <img src="man_eating_burger.jpeg" alt="man enjoying bcbonalds burger">
        <h2>Dedication to you</h2>
        <p>
            BcBonalds, where we redefine fast food with imaginative flavors, a quirky atmosphere,
            and a mission to make dining fun and unforgettable! Join us for a delightful experience that
            leaves you smiling with every bite.
        </p>
    </div>
*/