import './style.css';

import logo from './bcbonalds.jpg';
import manEatingBurger from './man_eating_burger.jpeg';

const body = document.querySelector('body');
const content = document.querySelector('#content');
const fakeLinks = [];

createHeader();
loadAbout(fakeLinks[2], fakeLinks);

function createHeader(){
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

function loadAbout(aboutFakeLink, fakeLinks) {
    fakeLinks.map((fakeLink => {
        fakeLink.classList.remove('selected');
    }));
    aboutFakeLink.classList.add('selected');

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
    para.textContent = "BcBonalds, where we redefine fast food with imaginative flavors, a quirky atmosphere, and a mission to make dining fun and unforgettable! Join us for a delightful experience that leaves you smiling with every bite.";
    content.append(para);
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