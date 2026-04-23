import { Arrow } from "./arrow";
import { bgMove } from "./bg.js";
import { startMoving } from "./move";
import { stopMoving } from "./move.js";
import { display } from "./results.js";

const go = (code, gifts, pacmanRef) => {
  switch (code) {
    case "ArrowLeft":
      startMoving(code, pacmanRef);
      break;
    case "ArrowRight":
      new Arrow("./images/arrow.png", pacmanRef.getBoundingClientRect(), gifts.img);
      break;
  }
};

const stop = ({ code }) => ["ArrowLeft", "ArrowRight"].some((v) => v === code) && stopMoving();

export function connect(gifts, pacmanRef) {
  document.body.addEventListener("keydown", ({ code }) => go(code, gifts, pacmanRef));
  document.body.addEventListener("keyup", stop);
  document.addEventListener("move", bgMove);
  document.addEventListener("result", display);
}
