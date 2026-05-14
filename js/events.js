import { Arrow } from "./els/arrow.js";
import { bgMove } from "./bg.js";
import { display } from "./results.js";
import { pacman } from "./els/pacman.js";
import { Gifts } from "./els/gift.js";

const gifts = new Gifts([...[1, 2, 3].map((e) => `./images/gift${e}.png`), "./images/skucha.png"], pacman);

const action = ({ code }) =>
  ({
    ArrowLeft: (code) => pacman.startMoving(code),
    ArrowRight: (code) => pacman.startMoving(code),
    Space: () => new Arrow("./images/arrow.png", pacman.img.getBoundingClientRect(), gifts),
  })[code]?.(code);

const stop = ({ code }) => ["ArrowLeft", "ArrowRight"].includes(code) && pacman.stopMoving();

export function run() {
  addEventListener("keydown", action);
  addEventListener("keyup", stop);
  document.addEventListener("move", bgMove);
  document.addEventListener("result", display);
}
