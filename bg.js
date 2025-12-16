function createImg(url,i) {
  let img = document.createElement("div");
  img.style.backgroundImage = `url(${url})`;
  img.style.backgroundRepeat = `repeat-x`;
  img.style.position = "absolute";
  img.dataset.i = i;
  img.style.width = "100vw";
  img.style.height = "100vh";
  img.style.border = "2px solid";
  document.body.appendChild(img);
  return img;
}

let imgs = [];

export function set(params=[]) {
  params.forEach((url,i) => {
    imgs.push(createImg(url,i+1));
  });
}

export function run({ detail }) {
  imgs.forEach((img) => (img.style.backgroundPosition = `${-detail / img.dataset.i/2}px bottom`));
}
