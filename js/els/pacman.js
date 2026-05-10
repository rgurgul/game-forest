class Pacman {
  direction = false;
  move = false;
  speed = 10;

  constructor() {
    this.img = document.body.querySelector(".hero");
  }
  loop() {
    this.go(this.direction === "ArrowLeft" ? -this.speed : this.speed);
    if (this.move) requestAnimationFrame(this.loop.bind(this));
  }
  go(evt) {
    let target = this.img.getBoundingClientRect();
    let next = parseInt(target.left || 0) + evt;
    if (next > 0 && next && next < document.body.clientWidth - target.width) {
      this.img.style.left = next + "px";
      document.dispatchEvent(new CustomEvent("move", { detail: next }));
    }
  }
  startMoving(dir) {
    this.direction = dir;
    if (!this.move) {
      this.move = true;
      requestAnimationFrame(this.loop.bind(this));
    }
  }
  stopMoving() {
    this.move = false;
  }
  boom() {
    this.img.style.scale = 1.1;
    setTimeout(() => (this.img.style.scale = 1), 100);
  }
}

export const pacman = new Pacman();
