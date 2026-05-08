export class Pacman {
  constructor() {
    this.img = document.body.querySelector(".hero");
  }
  boom() {
    this.img.style.scale = 1.1;
    setTimeout(() => (this.img.style.scale = 1), 100);
  }
}
