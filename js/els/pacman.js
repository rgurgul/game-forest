export class Pacman {
  moveSettings = {
    direction: false,
    move: false
  };
  constructor() {
    this.img = document.body.querySelector(".hero");
  }
  loop() {
    this.move(this.moveSettings.direction === "ArrowLeft" ? -5 : 5);
    if (this.moveSettings.move) requestAnimationFrame(this.loop.bind(this));
  }
  move(evt) {
    let target = this.img.getBoundingClientRect();
    let next = parseInt(target.left || 0) + evt;
    if (next > 0 && next && next < document.body.clientWidth - target.width) {
      this.img.style.left = next + "px";
      document.dispatchEvent(new CustomEvent("move", { detail: next }));
    }
  }
  startMoving(dir) {
    this.moveSettings.direction = dir;
    if (!this.moveSettings.move) {
      this.moveSettings.move = true;
      requestAnimationFrame(this.loop.bind(this));
    }
  }
  stopMoving() {
    this.moveSettings.move = false;
  }
  boom() {
    this.img.style.scale = 1.1;
    setTimeout(() => (this.img.style.scale = 1), 100);
  }
}
