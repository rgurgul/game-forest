import { Boom } from "./boom.js";
import { El } from "./element.js";

export class Arrow extends El {
  constructor(url, { left }, collideEl) {
    super(collideEl, url);
    this.speed = 10;
    this.createGift();
    this.setStyle(left);
  }
  setStyle(left) {
    this.img.style = `
        position: absolute;
        width: 120px;
        left: ${left}px;
        bottom: ${100}px;
    `;
  }
  moveGift() {
    let next = parseInt(this.img.style.bottom || 0) + 10;
    this.img.style.bottom = next + "px";
    this.checkCollision((hit) => {
      new Boom("./images/boom.png", this.collisionEl.getBoundingClientRect());
      let isGift = this.collisionEl.dataset.isGift;
      hit && document.dispatchEvent(new CustomEvent("result", { detail: { score: +isGift ? -1 : 1 } }));
      this.collisionEl.remove();
      this.clear();
    });
    next > 1000 && this.clear();
  }
}
