import { collide } from "./collide.js";

export class Element {
  speed = 30;
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

export class Arrow extends Element {
  constructor(url, { left }, ob) {
    super(ob, url);
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

export class Gift extends Element {
  constructor(urls, ob) {
    super(ob);
    this.urls = urls;
    this.url = this.getRandom(urls);
    this.createGift(this.url.includes("gift"));
    this.setStyle();
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
  moveGift() {
    this.img.style.rotate = `${parseInt(this.img.style.rotate || 0) + 0.5 ? 5 : -5}deg`;
    this.img.style.top = parseInt(this.img.style.top || 0) + 10 + "px";
    this.checkCollision((hit) => {
      let isGift = this.img.dataset.isGift;
      if (hit) {
        this.speed--;
        document.dispatchEvent(new CustomEvent("result", { detail: { score: +isGift ? 1 : -1, speed: -1 } }));
      }
      this.clear();
      this.url = this.getRandom(this.urls);
      this.createGift(this.url.includes("gift"));
    });
  }
}

export class Boom extends Element {
  constructor(url, { left, top }) {
    super(undefined, url);
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
    setTimeout(() => this.clear, 1000);
  }
  setStyle() {}
}
