import { El } from "./element.js";

export class Gift extends El {
  constructor(urls, collideEl) {
    super(collideEl);
    this.urls = urls;
    this.speed = 30;
    this.url = this.getRandom(urls);
    this.createGift(this.url.includes("gift"));
    this.setStyle();
    this.msg({ speed: this.speed });
  }
  setStyle() {
    this.img.style = `
      position:absolute;
      left: ${400 + Math.random() * (document.body.clientWidth - 600) + "px"}
    `;
  }
  getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  msg(data) {
    document.dispatchEvent(new CustomEvent("result", { detail: data }));
  }
  moveGift() {
    this.img.style.rotate = `${parseInt(this.img.style.rotate || 0) + 0.5 ? 5 : -5}deg`;
    this.img.style.top = parseInt(this.img.style.top || 0) + 10 + "px";
    this.checkCollision((hit) => {
      if (hit) {
        this.speed--;
        this.msg({ score: +this.img.dataset.isGift ? 1 : -1, speed: -1 });
      }
      this.clear();
      this.url = this.getRandom(this.urls);
      this.createGift(this.url.includes("gift"));
    });
  }
}
