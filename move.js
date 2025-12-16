export let settings = {
  direction: false,
  move: false,
  timeout: false,
  target: undefined,
};

function loop() {
  move(settings.direction === "left" ? -5 : 5);
  if (settings.move) requestAnimationFrame(loop);
}

function move(evt) {
  let target = settings.target.getBoundingClientRect();
  let next = parseInt(target.left || 0) + evt;
  if (next > 0 && next && next < document.body.clientWidth - target.width) {
    settings.target.style.left = next + "px";
    document.dispatchEvent(new CustomEvent("move", { detail: next }));
  }
}

export function start(evt) {
  switch (evt.code) {
    case "ArrowLeft":
      startMoving("left");
      break;
    case "ArrowRight":
      startMoving("right");
      break;
    default:
      console.log("key not ok");
      break;
  }
}

function startMoving(dir) {
  settings.direction = dir;
  if (!settings.move) {
    settings.move = true;
    requestAnimationFrame(loop);
  }
}

export function stop(evt) {
  switch (evt.code) {
    case "ArrowLeft":
      stopMoving();
      break;
    case "ArrowRight":
      stopMoving();
      break;
  }
}

function stopMoving() {
  settings.move = false;
}
