function randomcolor() {
  let r = Math.floor(Math.random() * (255 - 200 + 1) + 200);
  let g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
  let b = Math.floor(Math.random() * (255 - 1 + 1) + 1);
  let colorrvb = "rgb(" + r + "," + g + "," + b + ")";
  return colorrvb;
}
const navList = document.getElementById("nav-list");
const color = [];

// get same color for header & cut section

function createElement(elparent, elchild, attr, valueid, index, text) {
  const parentElement = document.createElement(elparent);
  navList.appendChild(parentElement);
  let childElement = document.createElement(elchild);
  childElement.setAttribute(attr, "#" + valueid);
  parentElement.appendChild(childElement);
  childElement.style.background = color[index - 1];
  let textElement = document.createTextNode(text);
  childElement.appendChild(textElement);
}

for (let i = 1; i <= 22; i++) {
  color.push(randomcolor());
  createElement("li", "a", "href", i, i, i);
  let sectionCut = document.getElementById(i);
  sectionCut.style.background = color[i - 1];
}
createElement("li", "a", "href", "nav", 1, "↓");
