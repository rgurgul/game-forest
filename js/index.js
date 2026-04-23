import { bgSettings } from "./bg.js";
import { connect } from "./events.js";
import { Gifts } from "./gift.js";
import { display } from "./results.js";

let imgs = ["./images/gift.png", "./images/gift2.png", "./images/gift3.png", "./images/skucha.png"];
bgSettings(["./images/bg2.png", "./images/bg1.png"]);

let pacmanRef = document.body.querySelector(".hero");
let gifts = new Gifts(imgs, pacmanRef);

connect(gifts, pacmanRef);
setInterval(() => display({ detail: { time: 1 } }), 1000);
