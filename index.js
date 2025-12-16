
import { run, set } from "./bg.js";
import { Arrow, Gift } from "./Gift.js";
import { start, stop, settings } from "./move.js";

let pacmanRef = document.body.querySelector(".hero");
settings.target = pacmanRef;
document.body.addEventListener("keydown", start);
document.body.addEventListener("keyup", stop);
document.body.addEventListener("keydown", createArrow);
document.addEventListener("move", run);
set(["./images/bg2a.png", "./images/bg1a.png"]);

setInterval(() => {
  display({ detail: { time: 1 } });
}, 1000);

function display({ detail }) {
  console.log(detail);
  let keys = Object.keys(detail);
  keys.forEach((xx) => {
    let el = document.querySelector(`#${xx}`);
    let result = parseInt(el.innerHTML) + detail[xx];
    el.innerHTML = result;
  });
}
function createArrow({ code }) {
  if (code != "Space") return;

  new Arrow("./images/arrow.png", pacmanRef.getBoundingClientRect(), gift.img);
}

let imgs = ["./images/gift.jpg", "./images/kamien.png"];
let gift = new Gift(imgs, pacmanRef);
document.querySelector("#speed").innerHTML = gift.speed;
document.addEventListener("result", display);