export function collide(el1, el2) {
  var gift = el1.getBoundingClientRect();
  var santa = el2.getBoundingClientRect();
  return gift.right > santa.left && gift.left < santa.right && gift.bottom > santa.top && gift.top < santa.bottom;
  //result && callback();
}