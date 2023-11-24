const navBtn = document.querySelector('.nav-button');
const navMobile = document.querySelector('.mobile-nav');


navBtn.addEventListener('click', function(){
    navMobile.classList.toggle('mobile-nav-active');
});