let header = document.querySelector("header");
let navListItem = document.querySelectorAll(".nav-item");
let menuBar = document.querySelector(".menu-bar");

let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");

const barList = [bar1, bar2, bar3];

menuBar.addEventListener("click", () => {
  for (let i = 0; i < barList.length; i++) {
    let element = barList[i];
    element.classList.toggle("active");
  }
});

window.onscroll = () => {
  let onScrollHeight = window.scrollY;
  console.log(onScrollHeight);
  if (onScrollHeight > 50) {
    header.classList.add("active");
    navListItem.forEach((item) => {
      item.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    navListItem.forEach((item) => {
      item.classList.remove("active");
    });
  }
};
