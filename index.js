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
const last = document.querySelector('.mobsoc');
console.log(last);

//created html for the wider screens sections socials using js and using innerHTML to replace the targeted div when the button is clicked
const html = `<p>SHARE</p>
 <img src="/images/icon-facebook.svg" alt="facebook" class ="face">
 <img src="/images/icon-pinterest.svg" alt="pinterest">
 <img src="/images/icon-twitter.svg" alt="x">`;

//created html for the mobile view socials sections using js and using innerHTML to replace the targeted div when the button is clicked
const html2 = `<div class="js-div">
<div class="nest-div">
<p>SHARE</p>
 <img src="/images/icon-facebook.svg" alt="facebook">
 <img src="/images/icon-twitter.svg" alt="x" >
  <img src="/images/icon-pinterest.svg" alt="pinterest">
 </div>
 <div class="js-divv">
<img src="/images/icon-share.svg" alt="ahre icon" class="sharerr" />
 </div>
 </div>`;

//shareBtn function here handles functionality and using window.innerWidth the display changes on various screensizes
const shareBtn = () => {
  if (window.innerWidth < 768) {
    last.innerHTML = html2;
    last.classList.remove('hidden');
    profileDiv.classList.add('hidden');
    display.classList.toggle('hidden');
  } else if (window.innerWidth >= 768 && window.innerWidth < 1025) {
    socials.innerHTML = html;
    display.classList.toggle('hidden');
  } else {
    socials.innerHTML = html;
    display.classList.toggle('hidden');
  }
};

//and finally event handler higher order function here accepst a callback function that our functionality is encpsulated in and works when the share button is pressed
btn.addEventListener('click', shareBtn);
