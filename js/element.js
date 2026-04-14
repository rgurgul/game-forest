import { collide } from "./collide.js";

export class El {
  constructor(collisionEl, url) {
    this.collisionEl = collisionEl;
    this.url = url;
  }
  clear() {
    clearInterval(this.img.inte);
    this.img.remove();
  }
  createGift(isGift) {
    let gift = document.createElement("img");
    gift.src = this.url;
    gift.dataset.isGift = isGift ? 1 : 0;
    this.img = gift;
    document.body.appendChild(gift);
    this.setStyle();
    gift.inte = setInterval(this.moveGift.bind(this), this.speed);
  }
  checkCollision(fn) {
    let isCollide = collide(this.img, this.collisionEl);
    let isOut = parseInt(this.img.style.top) > document.body.clientHeight || parseInt(this.img.style.top) < 0;
    isCollide && fn(true);
    isOut && fn(false);
  }
}



