import { El } from "./element.js";

export class Boom extends El {
  constructor(url, { left, top }) {
    super(undefined, url);
    this.speed = 40;
    this.createGift();
    this.img.style = `
        position: absolute;
        width: 120px;
        left: ${left}px;
        bottom: ${top}px;
    `;
  }
  moveGift() {
    this.img.style.opacity = (this.img.style.opacity || 1) - 0.1;
    this.img.style.scale = (this.img.style.scale || 1) + 1;
    setTimeout(() => this.destroy, 1000);
  }
  setStyle() {}
}