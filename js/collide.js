export function collide(el1, el2) {
  if(!el1 || !el2) return;
  var pos1 = el1.getBoundingClientRect();
  var pos2 = el2.getBoundingClientRect();
  return pos1.right > pos2.left && pos1.left < pos2.right && pos1.bottom > pos2.top && pos1.top < pos2.bottom;
}