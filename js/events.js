import { Arrow } from "./els/arrow.js";
import { bgMove } from "./bg.js";
import { display } from "./results.js";

const action = (code, gifts, pacmanRef) => {
  switch (code) {
    case "ArrowLeft":
    case "ArrowRight":
      pacmanRef.startMoving(code);
      break;
    case "Space":
      new Arrow("./images/arrow.png", pacmanRef.img.getBoundingClientRect(), gifts);
      break;
  }
};

const stop = (code, pacmanRef) => ["ArrowLeft", "ArrowRight"].some((v) => v === code) && pacmanRef.stopMoving();

export function run(gifts, pacmanRef) {
  document.body.addEventListener("keydown", ({ code }) => action(code, gifts, pacmanRef));
  document.body.addEventListener("keyup", ({ code }) => stop(code, pacmanRef));
  document.addEventListener("move", bgMove);
  document.addEventListener("result", display);
}
