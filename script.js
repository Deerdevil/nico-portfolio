"use strict:";

const bioButton = document.querySelector(".bio--img");
const aboutMe = document.getElementById("aboutMe");
const bioClose = document.querySelector(".bio--open");
const openNav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav--menu");
const navClose = document.querySelector(".nav--open");
const hero = document.querySelector(".read--more");
const projectOne = document.querySelector(".project--one");
const projectTwo = document.querySelector(".project--two");
const projectOneOpen = document.getElementById("project--one");
const projectTwoOpen = document.getElementById("project--two");
const projectThreeOpen = document.getElementById("project--three");
const projectClose = document.querySelector(".modal--open");
const openPort = document.querySelector("button");
//About me
bioButton.addEventListener("click", function () {
  aboutMe.classList.add("about--me--mask--clicked");
  aboutMe.classList.add("about--me--modal--open");

  bioButton.style.display = "none";
});

bioClose.addEventListener("click", function () {
  aboutMe.classList.add("hidden");
  aboutMe.classList.remove("about--me--mask--clicked");
  aboutMe.classList.remove("about--me--modal--open");
  setTimeout(() => {
    aboutMe.classList.remove("hidden");
  }, 500);

  // aboutMe.classList.remove("about--me--mask");
  bioButton.style.display = "";
});

//Open nav
openNav.addEventListener("click", function () {
  navMenu.classList.remove("hidden");
});

navClose.addEventListener("click", function () {
  navMenu.classList.add("hidden");
});

projectOne.addEventListener("click", function () {
  projectOneOpen.classList.remove("hidden");
});
projectTwo.addEventListener("click", function () {
  projectTwoOpen.classList.remove("hidden");
});
// projectTwo.addEventListener("click", function () {
//   projectTwoOpen.classList.remove("hidden");
// });

projectClose.addEventListener("click", function () {
  projectClose.parentElement?.classList.add("hidden");
});
