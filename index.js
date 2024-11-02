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
// const sec = document.querySelector('.hide');
// console.log(sec);

const html = `<p>SHARE</p>
 <img src="/images/icon-facebook.svg" alt="facebook" class ="face">
 <img src="/images/icon-pinterest.svg" alt="pinterest">
 <img src="/images/icon-twitter.svg" alt="x">`;

const html2 = `<div class="js-div">
<div class="nest-div">
<p>SHARE</p>
 <img src="/images/icon-facebook.svg" alt="facebook">
 <img src="/images/icon-pinterest.svg" alt="pinterest">
 <img src="/images/icon-twitter.svg" alt="x" >
 </div>
 <div class="js-divv">
<img src="/images/icon-share.svg" alt="ahre icon" class="sharerr" />
 </div>
 </div>`;

//  <button type="button" class="button"> </button>

const shareBtn = () => {
  if (window.innerWidth < 768) {
    // profileInfo.classList.toggle('hidden');
    last.innerHTML = html2;
    // btn.classList.add('hidden');
    last.classList.remove('hidden');
    profileDiv.classList.add('hidden');
  } else {
    socials.innerHTML = html;
    display.classList.toggle('hidden');
  }
};

btn.addEventListener('click', shareBtn);
