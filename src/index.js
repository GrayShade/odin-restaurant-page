import { styles } from "./styles/styles.css"
import { reset } from "./styles/reset.css"
// import {Home} from "./home.js";
import { createHomeContent } from "./home.js";
import { createMenuContent, Menu } from "./menu.js"
import { About } from "./about.js"

class Controller {

  constructor() {

  }

  start() {
    // this.setObjects();

    this.applyCurrentTabStyle();
    createHomeContent();
    this.setUpEventListeners();
  }

  // setting up event listeners for tab switching logic:
  setUpEventListeners() {
    
    let tabsArr = document.querySelectorAll('.tab-btn');
    tabsArr.forEach((tabBtn) => {
      tabBtn.addEventListener('click', (e) => {
        console.log('in index.js listener...');
        this.applyCurrentTabStyle(e);
        this.clearContent();
        // this.homeObj.createHomeContent();
        switch (e.target.id) {
          case 'homeTab-btn':
            createHomeContent();
            // As content will be cleared on each tab change, so have to set
            //  booking button listener every time:
            this.setUpBookingBtnListener();
            break;
          case 'menuTab-btn':
            // alert('menu-btn');
            createMenuContent();
            break;
          case 'aboutTab-btn':
            // alert('about-btn');
            break;
        };
       
      });
    });
    // set it up when page loads first time:
    this.setUpBookingBtnListener();
  };

  applyCurrentTabStyle(e = '') {
    let currEleId;
    if (e == '') {
      currEleId = 'homeTab-btn';
    }
    else {
      currEleId = e.target.id;
    }

    if (currEleId == 'home-booking-btn') {

    }

    let tabBtnsArr = document.querySelectorAll('.tab-btn');
    for (let i = 0; i < tabBtnsArr.length; i++) {
      // for styling tab buttons:
      if (tabBtnsArr[i].id == currEleId) {
        tabBtnsArr[i].style.background = '#add8e6';
        // tabBtnsArr[i].style.color = '#4682b4';
      }
      // for styling menu button:
      else if (currEleId == 'home-booking-btn') {
        tabBtnsArr[1].style.background = '#add8e6';
        tabBtnsArr[0].style.background = '';
        tabBtnsArr[2].style.color = '#69717a';
      }
      else {
        tabBtnsArr[i].style.background = '';
        tabBtnsArr[i].style.color = '#69717a';
      }
    }

  }

  clearContent() {
    document.getElementById('content').textContent = '';
  }

  setUpBookingBtnListener() {
    let bookingBtnEle = document.getElementById('home-booking-btn');
    bookingBtnEle.addEventListener('click', e => {
      this.clearContent();
      this.applyCurrentTabStyle(e);
      createMenuContent();
    });
  }

}


let ControllerObj = new Controller();
// ControllerObj.setUpTabListeners();
ControllerObj.start();
