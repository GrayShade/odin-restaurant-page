// import styles from "./styles/styles.css"
// import { reset } from "./styles/reset.css"
import { homeContent } from "./styles/homeContent.css"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"

class Home {
  createHomeContent() {

    let content = document.getElementById('content');
    // As we are switching tabs by replacing content div in body but page remains same.
    // This means any CSS imported in index.js vs explicit CSS imports or from js modules
    // imports indirectly are present on same page & can cause conflicts. So, 
    // replacing other classes with the specific one for its style to take effect.
    // In that specific class file, remember to use specific names for all elements to
    // not conflict with general css files of page.
    content.setAttribute('class', 'home-con');

    let h1Ele = document.createElement('h1');
    h1Ele.textContent = 'A Surreal Experience...';
    content.appendChild(h1Ele);

    let p1Ele = document.createElement('p');
    p1Ele.setAttribute('id', 'home-p');
    p1Ele.setAttribute('class', 'quote');
    p1Ele.setAttribute('id', 'home-p1Ele');
    p1Ele.textContent = `"The fondest memories are made when gathered around the table." - Unknown`;
    content.appendChild(p1Ele);

    let p2Ele = document.createElement('p');
    p2Ele.setAttribute('id', 'home-p');
    p2Ele.textContent = `Dining out is never about just eating. Its about the experience. Otherwise
     you could have just ordered, Right? We provide you with an experience you'd remember for days
      & long for it again. Eating in a natural cozy environment with birds chirping around & no 
      traffic , no crowds around till miles. Just you & something special you ordered.`;
    content.appendChild(p2Ele);

    let homeBookingBtn = document.createElement('button');
    homeBookingBtn.setAttribute('id', 'home-booking-btn');
    homeBookingBtn.textContent = 'Book now!';
    content.appendChild(homeBookingBtn);

    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'home-images-div');
    content.appendChild(imgDiv);

    for (let i = 0; i <= 1; i++) {
      let img = document.createElement('img');
      img.setAttribute('class', 'home-img');
      img.src = [img1, img2][i];
      img.setAttribute('alt', '');
      imgDiv.appendChild(img);
    }


  }
}

export const { createHomeContent } = new Home();
