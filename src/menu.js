// import styles from "./styles/styles.css"
import { reset } from "./styles/reset.css";
import { menuContent } from "./styles/menuContent.css";
import image1 from "./images/menu-images/1.jpg";
import image2 from "./images/menu-images/2.jpg";
import image3 from "./images/menu-images/3.jpg";
import image4 from "./images/menu-images/4.jpg";
import image5 from "./images/menu-images/5.jpg";
import image6 from "./images/menu-images/6.jpg";
import image7 from "./images/menu-images/7.jpg";
import image8 from "./images/menu-images/8.jpg";
import image9 from "./images/menu-images/9.jpg";
class Menu {
  constructor() {

  }
  createMenuContent() {
    // As we are switching tabs by replacing content div in body but page remains same.
    // This means any CSS imported in index.js vs explicit CSS imports or from js modules
    // imports indirectly are present on same page & can cause conflicts. So, 
    // replacing other classes with the specific one for its style to take effect.
    // In that specific class file, remember to use specific names for all elements to
    // not conflict with general css files of page.
    document.getElementById('content').setAttribute('class', 'menu-con');

    let paraContainer = document.createElement('div')
    paraContainer.setAttribute('id', 'para-container');
    content.appendChild(paraContainer);

    let h1Ele = document.createElement('h1');
    h1Ele.textContent = 'An Exquisite Menu...';
    paraContainer.appendChild(h1Ele);

    let p2Ele = document.createElement('p');
    // p2Ele.setAttribute('id', 'menu-p');
    p2Ele.setAttribute('class', 'quote');
    p2Ele.textContent = `"The only time to eat diet food is while you're waiting for the steak to cook." - Julia Child`;
    paraContainer.appendChild(p2Ele);

    let cardContainer = document.createElement('div');
    cardContainer.setAttribute('id', 'card-container');
    document.querySelector('.menu-con').appendChild(cardContainer);

    Menu.#createCards();
  }

  static #createCards() {

    // let menuConEle = document.querySelector('.menu-con');

    const imagesObj = {
      'image1': image1,
      'image2': image2,
      'image3': image3,
      'image4': image4,
      'image5': image5,
      'image6': image6,
      'image7': image7,
      'image8': image8,
      'image9': image9
    }

    const textObj = Menu.#getTextObj();
    let cardContainer = document.getElementById('card-container');

    for (let i = 1; i <= 9; i++) {
      let card = document.createElement('div');
      card.setAttribute('id', `card${i}`);
      card.setAttribute('class', 'card');
      cardContainer.appendChild(card);

      Menu.#createCardLeftDiv(i, imagesObj);
      Menu.#createCardRightDiv(i, card);

      Menu.#addTextToCardRightDiv(textObj, i);
    }
  }



  static #createCardLeftDiv(i, imagesObj) {

    const card = document.getElementById(`card${i}`);
    let cardLeftDiv = document.createElement('div');
    cardLeftDiv.setAttribute('class', 'card-left-div');
    card.appendChild(cardLeftDiv);

    let image = document.createElement('img');
    image.setAttribute('class', 'menu-card-images');
    image.setAttribute('src', imagesObj[`image${i}`]);
    cardLeftDiv.appendChild(image);
  }

  static #createCardRightDiv(i, card) {
    let cardRightDiv = document.createElement('div');
    cardRightDiv.setAttribute('class', 'card-right-div');
    card.appendChild(cardRightDiv);

    let cardRTitle = document.createElement('p');
    cardRTitle.setAttribute('id', `card${i}-r-title`);
    cardRTitle.setAttribute('class', 'card-r-title');
    cardRightDiv.appendChild(cardRTitle);

    let cardRDesc = document.createElement('p');
    cardRDesc.setAttribute('id', `card${i}-r-desc`);
    cardRDesc.setAttribute('class', 'card-r-desc');
    cardRightDiv.appendChild(cardRDesc);

    let tagsDiv = document.createElement('div');
    tagsDiv.setAttribute('class', 'tags-div');
    cardRightDiv.appendChild(tagsDiv);

    Menu.#createPriceTagAndValue(i, tagsDiv);
    Menu.#createAvailTagAndValue(i, tagsDiv);

  }

  static #createPriceTagAndValue(i, tagsDiv) {
    // Creating price tag:
    let cardRPrice = document.createElement('p');
    cardRPrice.setAttribute('id', `card${i}-r-price`);
    cardRPrice.setAttribute('class', 'card-r-price');
    tagsDiv.appendChild(cardRPrice);

    // Creating price span & put 'Price' tag in it:
    let cardRPriceEle = document.querySelector(`#card${i}-r-price`);
    let cardRPriceSpan = document.createElement('span');
    cardRPriceSpan.setAttribute('id', `card${i}-r-price-span`);
    cardRPriceSpan.setAttribute('class', 'price-span');
    cardRPriceEle.appendChild(cardRPriceSpan);
    let priceTitle = document.createTextNode('Price: ');
    cardRPriceSpan.appendChild(priceTitle);
  }

  static #createAvailTagAndValue(i, tagsDiv) {
    // Creating Available tag:
    let cardRAvail = document.createElement('p');
    cardRAvail.setAttribute('id', `card${i}-r-avail`);
    cardRAvail.setAttribute('class', 'card-r-avail');
    tagsDiv.appendChild(cardRAvail);

    // Creating available span & put 'Available' text in it:
    let cardRAvailEle = document.querySelector(`#card${i}-r-avail`);
    let cardRAvailSpan = document.createElement('span');
    cardRAvailSpan.setAttribute('id', `card${i}-r-avail-span`);
    cardRAvailSpan.setAttribute('class', 'avail-span');
    cardRAvailEle.appendChild(cardRAvailSpan);
    let availTitle = document.createTextNode('Ready: ');
    cardRAvailSpan.appendChild(availTitle);
  }

  static #addTextToCardRightDiv(textObj, i) {

    let cardRPriceSpan = document.getElementById(`card${i}-r-price-span`);
    let cardRAvailSpan = document.getElementById(`card${i}-r-avail-span`);
    document.getElementById(`card${i}-r-title`).textContent = textObj[`image${i}`][0];
    document.getElementById(`card${i}-r-desc`).textContent = textObj[`image${i}`][1];
    let priceValue = document.createTextNode(textObj[`image${i}`][2]);
    cardRPriceSpan.after(priceValue);
    let availValue = document.createTextNode(textObj[`image${i}`][3]);
    cardRAvailSpan.after(availValue);

  }

  static #getTextObj() {
    return {
      'image1': [
        'Fresh Juice',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '50 PKR',
        '20 min'
      ],
      'image2': [
        'Healthy Breakfast',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '50 PKR',
        '30 min'
      ],
      'image3': [
        'Mix Beans',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '50 PKR',
        '40 min'
      ],
      'image4': [
        'Zinger Burger',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '50 PKR',
        '20 min'
      ],
      'image5': [
        'Soothing Coffee',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '50 PKR',
        '20 min'
      ],
      'image6': [
        'Special Pizza',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '50 PKR',
        '20 min'
      ],
      'image7': [
        'Mix Fries',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '50 PKR',
        '20 min'
      ],
      'image8': [
        'Chicken Nuggets',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '50 PKR',
        '20 min'
      ],
      'image9': [
        'Fresh Salad',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        '50 PKR',
        '20 min'
      ],

    }
  }

}

// { createMenuContent } is an object destructuring pattern. It extracts the property
//  createMenuContent from the instance of the Menu class.
// export const exports this property so that it can be imported and used in other modules.
export const { createMenuContent } = new Menu();

// Note that we are exporting a function after extracting it directly. We are NOT exporting
//  an object. So, in index.js, we now have a function imported. One issue arrises, when we
//  call << createMenuContent >> from index.js & we get inside the manu.js through that
//  function, << this >> does not refer to object of menu.js as we came through a function
// directly. So for workaround of that, I had to use static functions in Menu class as they
//  are accessible on class itself so they can be accessed via Menu.functionName. Functions
// without static keyword would be instance methods & will not be accessible. I could export
// an object or export class but just wanted to do things differently. 