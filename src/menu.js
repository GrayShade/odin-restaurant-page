// import styles from "./styles/styles.css"
import { reset } from "./styles/reset.css"
import { menuContent } from "./styles/menuContent.css"

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
  
let cardContainer = document.createElement('div');
cardContainer.setAttribute('id', 'card-container');
document.querySelector('.menu-con').appendChild(cardContainer); 
  }

  createCards() {
  
    
    // let menuConEle = document.querySelector('.menu-con');
    let cardContainer = document.getElementById('card-container');

    for(let i=1; i<=6; i++) {
    let card = document.createElement('div');
    card.setAttribute('id', `card${i}`);
    card.setAttribute('class', 'card');
    cardContainer.appendChild(card);
    let cardLeftDiv = document.createElement('div');
    cardLeftDiv.setAttribute('class', 'card-left-div');
    card.appendChild(cardLeftDiv);
    let cardRightDiv = document.createElement('div');
    cardRightDiv.setAttribute('class', 'card-right-div');
    card.appendChild(cardRightDiv);
    }
  }



}
// { createMenuContent, createCards } is an object destructuring pattern. It extracts the properties
//  createMenuContent and createCards from the instance of the Menu class.
// export const exports these properties so that they can be imported and used in other modules.

export const { createMenuContent, createCards } = new Menu();
// export const { createCards } = menuClassObj;