// import styles from "./styles/styles.css"
import { reset } from "./styles/reset.css"
import { homeContent } from "./styles/homeContent.css"
import img1 from "./images/1.jpg"
import img3 from "./images/3.jpg"

class Home {
  createHomeContent() {
    console.log('at home');
    let content = document.getElementById('content');
    let h1Ele = document.createElement('h1');
    h1Ele.textContent = 'An Experience To Remember...';
    content.appendChild(h1Ele);

    let pEle = document.createElement('p');
    pEle.textContent = `Dining out is never about just eating. Its about the experience. Otherwise
     you could have just ordered, Right? We provide you with an experience you'd remember for days
      & long for it again. Eating in a natural cozy environment with birds chirping around & no 
      traffic , no crowds around till miles. Just you & something special you ordered.`;
    content.appendChild(pEle);
    // <div id="images">
    //   <img src="./images/1.jpg" alt="">
    // </div>
    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'images-div');
    content.appendChild(imgDiv);

    for(let i=0; i<=1;i++) {
    let img = document.createElement('img');
    img.setAttribute('class', 'home-img');
    img.src = [img1, img3][i];
    img.setAttribute('alt', '');
    imgDiv.appendChild(img);
    }
  }
}

export const { createHomeContent } = new Home();
