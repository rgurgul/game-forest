export let moveSettings = {
  direction: false,
  move: false,
  timeout: false,
  target: undefined,
};

function loop() {
  move(moveSettings.direction === "ArrowLeft" ? -5 : 5);
  if (moveSettings.move) requestAnimationFrame(loop);
}

function move(evt) {
  let target = moveSettings.target.getBoundingClientRect();
  let next = parseInt(target.left || 0) + evt;
  if (next > 0 && next && next < document.body.clientWidth - target.width) {
    moveSettings.target.style.left = next + "px";
    document.dispatchEvent(new CustomEvent("move", { detail: next }));
  }
}

export function startMoving(dir) {
  moveSettings.direction = dir;
  if (!moveSettings.move) {
    moveSettings.move = true;
    requestAnimationFrame(loop);
  }
}

export function stopMoving() {
  moveSettings.move = false;
}
