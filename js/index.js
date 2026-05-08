import { bgSettings } from "./bg.js";
import { run } from "./events.js";
import { Gifts } from "./els/gift.js";
import { showResults } from "./results.js";
import { Pacman } from "./els/pacman.js";

let imgs = ["./images/gift.png", "./images/gift2.png", "./images/gift3.png", "./images/skucha.png"];
bgSettings(["./images/bg2.png", "./images/bg1.png"]);

let pacman = new Pacman();
let gifts = new Gifts(imgs, pacman);

run(gifts, pacman.img);
showResults();
