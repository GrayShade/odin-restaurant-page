// import styles from "./styles/styles.css"
import { reset } from "./styles/reset.css"
import { menuContent } from "./styles/menuContent.css"

class Menu {
  createMenuContent() {
    console.log('at menu');

  }
}

export const { createMenuContent } = new Menu();