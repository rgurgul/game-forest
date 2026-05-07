export function display({ detail }) {
  let keys = Object.keys(detail);
  keys.forEach((key) => {
    let el = document.querySelector(`#${key}`);
    let result = parseInt(el.innerHTML) + detail[key];
    el.innerHTML = result;
  });
}

export function showResults() {
  setInterval(() => display({ detail: { time: 1 } }), 1000);
}