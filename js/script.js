let navItem = document.querySelectorAll(".nav-item");
let header = document.querySelector("header");
let menuBar = document.querySelector(".fa-bars");
let menuItem = document.querySelector("nav ul");

window.onscroll = () => {
  let scrollValueY = window.scrollY;
  console.log(scrollValueY);

  if (scrollValueY > 50) {
    header.classList.add("active");
    navItem.forEach((e) => {
      e.classList.add("active");
    });
    menuBar.classList.add("active");
  } else {
    header.classList.remove("active");
    navItem.forEach((e) => {
      e.classList.remove("active");
    });
    menuBar.classList.remove("active");
  }
};

let scrollValue = window.scrollY;

menuBar.addEventListener("click", () => {
  if (menuBar.classList.contains("active") && scrollValue > 50) {
    menuBar.classList.replace("active", "active");
  } else {
    menuBar.classList.toggle("active");
    navItem.forEach((e) => {
      e.classList.add("active");
    });
  }

  menuItem.classList.toggle("active");
});

// let listActive = navItem.forEach((element) => {
//   element.classList.add("active");
// });

// // When menu bar is clicked
// menuBar.addEventListener("click", () => {
//   menuItem.classList.toggle("active");
//   listActive;

//   if (menuBar.classList.contains("active") && header.classList.contains("active")) {
//     menuBar.classList.replace("active", "active");
//   } else if (menuBar.classList.contains("active") == false && header.classList.contains("active") == false) {
//     menuBar.classList.add("active");
//   } else {
//     menuBar.classList.remove("active");
//   }
// });

// // When window is on scroll
// window.onscroll = () => {
//   let scrollValueY = window.scrollY;

//   function onTopNavItem() {
//     if (menuBar.classList.contains("active")) {
//       navItem.forEach((element) => {
//         element.classList.add("active");
//       });
//     }
//   }

//   if (scrollValueY > 50) {
//     header.classList.add("active");
//     menuBar.classList.add("active");
//     navItem.forEach((element) => {
//       element.classList.add("active");
//     });
//   } else {
//     header.classList.remove("active");
//     menuBar.classList.remove("active");
//     navItem.forEach((element) => {
//       element.classList.remove("active");
//     });
//     onTopNavItem;
//   }
// };
