// import styles from "./styles/styles.css"
import { reset } from "./styles/reset.css"
import { aboutContent } from "./styles/aboutContent.css"

class Menu {
  createAboutContent() {
    console.log('at menu');

  }
}

export const { createAboutContent } = new Menu();