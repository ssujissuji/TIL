const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//YOU CODE GOES HERE:
const text = document.querySelectorAll("span");
for (let i = 0; i < colors.length; i++) {
  text[i].style.color = colors[i];
}
