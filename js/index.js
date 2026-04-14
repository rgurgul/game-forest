import { Arrow } from "./arrow.js";
import { bgMove, bgSettings } from "./bg.js";
import { Gift } from "./gift.js";
import { moveSettings, startMoving, stopMoving } from "./move.js";
import { display } from "./results.js";

let pacmanRef = document.body.querySelector(".hero");
let imgs = ["./images/gift.png", "./images/gift2.png", "./images/gift3.png", "./images/skucha.png"];
document.addEventListener("result", display);
let gift = new Gift(imgs, pacmanRef);
document.body.addEventListener("keydown", ({ code }) => {
  ["ArrowLeft", "ArrowRight"].some((v) => v === code) && startMoving(code);
  code === "Space" && new Arrow("./images/arrow.png", pacmanRef.getBoundingClientRect(), gift.img);
});
document.body.addEventListener(
  "keyup",
  ({ code }) => ["ArrowLeft", "ArrowRight"].some((v) => v === code) && stopMoving(),
);
document.addEventListener("move", bgMove);
moveSettings.target = pacmanRef;
bgSettings(["./images/bg2.png", "./images/bg1.png"]);
setInterval(() => display({ detail: { time: 1 } }), 1000);
