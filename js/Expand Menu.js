let plus = document.querySelector(".fa-plus"),
  menu = document.querySelector(".menu-container"),
  x = 0;

plus.onclick = function () {
  if (x === 0) {
    x = 3;
    menu.style.transform = `scale(${x})`;
    this.style.transform = "rotate(45deg)";
  } else {
    x = 0;
    menu.style.transform = `scale(${x})`;
    this.style.transform = "rotate(0deg)";
  }
};
