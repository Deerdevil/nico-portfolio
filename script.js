'use strict:';

const bioButton = document.querySelector('.bio--img');
const aboutMe = document.getElementById('aboutMe');
const bioClose = document.querySelector('.bio--open');
const openNav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav--menu');
const navClose = document.querySelector('.nav--open');
const hero = document.querySelector('.read--more');
const projectOne = document.querySelector('.project--one');
const projectTwo = document.querySelector('.project--two');
const projectThree = document.querySelector('.project--three');
const projectOneOpen = document.getElementById('project--one');
const projectTwoOpen = document.getElementById('project--two');
const projectThreeOpen = document.getElementById('project--three');
const projectClose = document.querySelector('.modal--open');
const projectClose2 = document.querySelector('.modal--open2');
const projectClose3 = document.querySelector('.modal--open3');
const openPort = document.querySelector('button');
const contact = document.querySelector('.bottom');
const contactModal = document.querySelector('.contact--modal');
//About me
bioButton.addEventListener('click', function () {
  aboutMe.classList.add('about--me--mask--clicked');
  aboutMe.classList.add('about--me--modal--open');

  bioButton.style.display = 'none';
});

bioClose.addEventListener('click', function () {
  aboutMe.classList.add('hidden');
  aboutMe.classList.remove('about--me--mask--clicked');
  aboutMe.classList.remove('about--me--modal--open');
  setTimeout(() => {
    aboutMe.classList.remove('hidden');
  }, 500);
  bioButton.style.display = '';
});

//Open nav
// openNav.addEventListener('click', function () {
//   navMenu.classList.remove('hidden');
// });

// navClose.addEventListener('click', function () {
//   navMenu.classList.add('hidden');
// });
//Open project modals
projectOne.addEventListener('click', function () {
  projectOneOpen.classList.remove('hidden');
});
projectTwo.addEventListener('click', function () {
  projectTwoOpen.classList.remove('hidden');
});
projectThree.addEventListener('click', function () {
  projectThreeOpen.classList.remove('hidden');
});
//Close project modals
projectClose.addEventListener('click', function () {
  projectClose.parentElement?.classList.add('hidden');
});
projectClose2.addEventListener('click', function () {
  projectClose2.parentElement?.classList.add('hidden');
});
projectClose3.addEventListener('click', function () {
  projectClose3.parentElement?.classList.add('hidden');
});
//Copy email address
contact.addEventListener('click', function () {
  contactModal.classList.remove('hidden');
  setTimeout(() => {
    contactModal.classList.add('hidden');
  }, 700);
  navigator.clipboard.writeText('nicholai.oj@gmail.com');
});

//Media query

// const smallDevice = window.matchMedia('(min-width: 800px)');

// function handleDeviceChange(e) {
//   if (e.matches) {
//     navMenu.classList.remove('hidden');
//   } else navMenu.classList.add('hidden');
// }
// handleDeviceChange(smallDevice);
