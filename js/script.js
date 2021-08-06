let header = document.querySelector("header");
let navListItem = document.querySelectorAll(".nav-item");
let menuBar = document.querySelector(".fa-bars");

function myFunction(x) {
  x.classList.toggle("fa-times");
}

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
