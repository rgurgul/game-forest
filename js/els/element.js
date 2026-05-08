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
  collide(el1, el2) {
    if (!el1 || !el2) return;
    var pos1 = el1.getBoundingClientRect();
    var pos2 = el2.getBoundingClientRect();
    return pos1.right > pos2.left && pos1.left < pos2.right && pos1.bottom > pos2.top && pos1.top < pos2.bottom;
  }
  checkCollision(fn) {
    let isCollide = this.collide(this.img, this.collisionEl.img);
    let isOut = parseInt(this.img.style.top) > document.body.clientHeight || parseInt(this.img.style.top) < 0;
    isCollide && fn(true);
    isOut && fn(false);
  }
}
