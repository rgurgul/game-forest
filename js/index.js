import { Arrow } from "./arrow.js";
import { bgMove, bgSettings } from "./bg.js";
import { Gift } from "./gift.js";
import { moveSettings, startMoving, stopMoving } from "./move.js";
import { display } from "./results.js";

let pacmanRef = document.body.querySelector(".hero");
let imgs = ["./images/gift.png", "./images/gift2.png", "./images/gift3.png", "./images/skucha.png"];
let gift = new Gift(imgs, pacmanRef);
moveSettings.target = pacmanRef;
bgSettings(["./images/bg2.png", "./images/bg1.png"]);
setInterval(() => display({ detail: { time: 1 } }), 1000);
const go = ({ code }) => {
  ["ArrowLeft", "ArrowRight"].some((v) => v === code) && startMoving(code);
  code === "Space" && new Arrow("./images/arrow.png", pacmanRef.getBoundingClientRect(), gift.img);
};
const stop = ({ code }) => ["ArrowLeft", "ArrowRight"].some((v) => v === code) && stopMoving();

document.body.addEventListener("keydown", go);
document.body.addEventListener("keyup", stop);
document.addEventListener("move", bgMove);
document.addEventListener("result", display);

