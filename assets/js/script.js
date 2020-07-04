function randomcolor() {
  let r = Math.floor(Math.random() * (255 - 200 + 1) + 200);
  let g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
  let b = Math.floor(Math.random() * (255 - 1 + 1) + 1);
  let colorrvb = "rgb(" + r + "," + g + "," + b + ")";
  return colorrvb;
}
let navList = document.getElementById("nav-list");

for (let i = 1; i <= 22; i++) {
  const newLi = document.createElement("li");
  navList.appendChild(newLi);
  let newA = document.createElement("a");
  newA.setAttribute("href", "#" + i);
  newLi.appendChild(newA);
  newA.style.background = randomcolor();

  let contentA = document.createTextNode(i);
  newA.appendChild(contentA);
}

const lastLi = document.createElement("li");
navList.appendChild(lastLi);
let lastA = document.createElement("a");
lastA.setAttribute("href", "#nav");
lastLi.appendChild(lastA);
lastA.style.background = randomcolor();
let lastContentA = document.createTextNode("↓");
lastA.appendChild(lastContentA);
