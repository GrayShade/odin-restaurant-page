// import styles from "./styles/styles.css"
import { reset } from "./styles/reset.css"
import { menuContent } from "./styles/menuContent.css"

class Menu {
  createMenuContent() {
    // As we are switching tabs by replacing content div in body but page remains same.
    // This means any CSS imported in index.js vs explicit CSS imports or from js modules
    // imports indirectly are present on same page & can cause conflicts. So, 
    // replacing other classes with the specific one for its style to take effect.
    // In that specific class file, remember to use specific names for all elements to
    // not conflict with general css files of page.
    document.getElementById('content').setAttribute('class', 'menu-con');
  }
}

export const { createMenuContent } = new Menu();