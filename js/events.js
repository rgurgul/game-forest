import { Arrow } from "./arrow.js";
import { bgMove } from "./bg.js";
import { startMoving } from "./move.js";
import { stopMoving } from "./move.js";
import { display } from "./results.js";

const action = (code, gifts, pacmanRef) => {
  switch (code) {
    case "ArrowLeft":
    case "ArrowRight":
      startMoving(code, pacmanRef);
      break;
    case "Space":
      new Arrow("./images/arrow.png", pacmanRef.getBoundingClientRect(), gifts.img);
      break;
  }
};

const stop = ({ code }) => ["ArrowLeft", "ArrowRight"].some((v) => v === code) && stopMoving();

export function run(gifts, pacmanRef) {
  document.body.addEventListener("keydown", ({ code }) => action(code, gifts, pacmanRef));
  document.body.addEventListener("keyup", stop);
  document.addEventListener("move", bgMove);
  document.addEventListener("result", display);
}
