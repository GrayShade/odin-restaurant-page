import { styles } from "./styles/styles.css"
import { reset } from "./styles/reset.css"
// import {Home} from "./home.js";
import { createHomeContent } from "./home.js";
import { createMenuContent, Menu } from "./menu.js"
import { About } from "./about.js"

class Controller {
  // setting up objects for different modules:
  constructor() {
    // this.homeObj = home.Home
  }

  start() {
    // this.setObjects();
    this.setUpTabListeners();
  }

  // setObjects() {
  //   // this.homeObj = new Home();
  //   // this.menuObj = new Menu();
  //   // this.aboutObj = new About();
  // }
  // setting up event listeners for tab switching logic:
  setUpTabListeners() {
    let tabsArr = document.querySelectorAll('.tab-btn');
    tabsArr.forEach((tabBtn) => {
      tabBtn.addEventListener('click', (e) => {
        console.log('in index.js listener...');
        this.clearContent();
        // this.homeObj.createHomeContent();
        switch (e.target.id) {
          case 'home-btn':
            // alert('home-btn');
            createHomeContent();
            break;
          case 'menu-btn':
            // alert('menu-btn');
            createMenuContent();
            break;
          case 'about-btn':
            // alert('about-btn');
            break;
        }

        // console.log(object);
      })
    })
  }

  clearContent() {
    document.getElementById('content').textContent = '';
  }


}


let ControllerObj = new Controller();
// ControllerObj.setUpTabListeners();
ControllerObj.start();
