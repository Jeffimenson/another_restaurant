import './style.css';

import {logo, manEatingBurger} from './image_mod/image_barrel.js';
import {make} from './jeffQuery.js'

const body = document.querySelector('body');
const content = document.querySelector('#content');

const fakeLinks = [];
createHeader(fakeLinks);
createFooter();
const menuFakeLink = fakeLinks[0];
const contactFakeLink = fakeLinks[1];
const aboutFakeLink = fakeLinks[2];

loadAbout(aboutFakeLink, fakeLinks);
let lastContext = 'about';
content.classList.add(lastContext);


aboutFakeLink.addEventListener('click', () => {
    changeContentContext('about');
    clearContent(content);
    loadAbout(aboutFakeLink, fakeLinks);
});

contactFakeLink.addEventListener('click', ()=>{
    changeContentContext('contact');
    clearContent(content); //this not working for some reason
    loadContact(contactFakeLink, fakeLinks);
});

menuFakeLink.addEventListener('click', () => {
    changeContentContext('menu');
    clearContent(content);
    loadMenu(menuFakeLink, fakeLinks);
});

function createHeader(fakeLinks){
    const header = make('header');
    const logoImg = make('img.logo', header);
    logoImg.src = logo;
    logoImg.alt = 'logo';

    fakeLinks[0] = make('button.fake-link#menu', header);
    fakeLinks[0].textContent = 'Menu';
    fakeLinks[1] = make('button.fake-link#contact', header);
    fakeLinks[1].textContent = 'Contact';
    fakeLinks[2] = make('button.fake-link#about', header);
    fakeLinks[2].textContent = 'About';

    const orderButton = make('button#order', header);
    orderButton.textContent = 'Order now';

    body.prepend(header);
}

function createFooter(){
    const footer = make('footer', body);
    
    const row1 = make('div.row', footer);
    for (let i = 0; i < 4; i++){
        const listCol = make('div.list-col', row1);
        const list = make('ul', listCol);
        for (let j = 0; j < 3 + i; j++) {
            const li = make('li', listCol);
            const a = make('a', li);
            a.textContent = 'Stuff stuff';
            a.href = '#';
        }
    }

    const row2 = make('div.row', footer);
    for (let i = 0; i < 5; i++){
        const dummyLink = make('a', row2);
        dummyLink.textContent = "More stuff";
        dummyLink.href = "#";
    } 
}

function loadAbout(aboutLink, fakeLinks) {
    reassignSelectedFakeLink(aboutLink, fakeLinks);

    const heading1 = make('h1', content);
    heading1.textContent = "About us";
    const img = make('img', content);
    img.src = manEatingBurger;
    img.alt = "man enjoying bcbonalds burger";
    const heading2 = document.createElement('h2');
    heading2.textContent = "Dedication to you";
    content.append(heading2);
    const para = document.createElement('p');
    para.textContent = "We redefine fast food with imaginative flavors and a quirky atmosphere all for our mission to make dining fun and unforgettable! Join us at BcBonalds for a delightful experience that leaves you smiling with every bite.";
    content.append(para);
}

function loadContact(contactLink, fakeLinks){
    reassignSelectedFakeLink(contactLink, fakeLinks);

    const heading2 = document.createElement('h2');
    heading2.textContent = "Reach us at:";
    content.append(heading2);
    const para = document.createElement('p');
    para.append(document.createTextNode('bcbonaldsisgreat@bcbonalds.com'))
    para.append(document.createElement('br'));
    para.append(document.createTextNode('669-420-6969'));
    content.append(para);
}

function loadMenu(menuLink, fakeLinks){
    reassignSelectedFakeLink(menuLink, fakeLinks);

    const featured = make('div.sidebar.featured', content);;
    const featTab = make('div.sidetab', featured);
    const featImg = make('img', featTab);
    featImg.src = 'https://s7d1.scene7.com/is/image/mcdonalds/desserts_shakes_300x300:category-panel-left-desktop' ;
    featImg.alt = 'featured image';
    const featName = make('p', featTab);
    featName.textContent = 'Featured';
    
    const sidebar = make('div.sidebar', content);
    
    const tab = make('div.sidetab.selected', sidebar);
    const tabImg = make('img', tab);
    tabImg.src = 'https://s7d1.scene7.com/is/image/mcdonalds/burgers_300x300:category-panel-left-desktop';
    tab.alt = 'tab picture';
    const tabName = make('p', tab);
    tabName.textContent = "Burgers";

    for (let i = 0; i < 5; i++){
        const tab = make('div.sidetab', sidebar);
        const tabImg = make('img', tab);
        tabImg.src = 'https://s7d1.scene7.com/is/image/mcdonalds/burgers_300x300:category-panel-left-desktop';
        tab.alt = 'tab picture';
        const tabName = make('p', tab);
        tabName.textContent = "Burgers";

    }

    const menuHolder = make('div.menu-holder', content);
    const heading1 = make('h1', menuHolder);
    heading1.textContent = "Our food";
    for (let i = 0; i < 8; i++){
        const entryArticle = makeEntry('BcBurger', 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:1-4-product-tile-desktop', true);
        menuHolder.append(entryArticle);
    }

}

function makeEntry(name, img, isLimited){
    const entryArticle = document.createElement('article');
    const entryImg = document.createElement('img');
    entryImg.src = img;
    entryImg.alt = 'entry image for ' + name;
    entryArticle.append(entryImg);

    if (isLimited) {
        const limitedP = make('p.limited', entryArticle);
        limitedP.textContent = 'Limited Time Only'
    }
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

function changeContentContext(context){
    content.classList.remove(lastContext);
    content.classList.add(context);
    lastContext = context;
}

