'use strict';
const btn = document.querySelector('.share-button');
console.log(btn);
const socials = document.querySelector('.icons');
console.log(socials);
const display = document.querySelector('.hidden');
console.log(display);
const profileDiv = document.querySelector('.profile');
console.log(profileDiv);
const profileInfo = document.querySelector('.profile-info');
console.log(profileInfo);
// const sec = document.querySelector('.hide');
// console.log(sec);

const html = `<p>SHARE</p>
 <img src="/images/icon-facebook.svg" alt="facebook" class ="face">
 <img src="/images/icon-pinterest.svg" alt="pinterest">
 <img src="/images/icon-twitter.svg" alt="x">`;

const html2 = `<p>SHARE</p>
 <img src="/images/icon-facebook.svg" alt="facebook">
 <img src="/images/icon-pinterest.svg" alt="pinterest">
 <img src="/images/icon-twitter.svg" alt="x">
`;

const shareBtn = () => {
  if (window.innerWidth < 768) {
    // profileInfo.classList.toggle('hidden');
    profileInfo.innerHTML = html2;
    // profileDiv.classList.toggle('hidden');
  } else {
    socials.innerHTML = html;
    display.classList.toggle('hidden');
  }
};

btn.addEventListener('click', shareBtn);
