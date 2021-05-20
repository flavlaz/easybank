//hamburger menu functionality
const menuBtn = document.getElementById('menu-btn');
const header = document.getElementById('header');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', ()=> {
    header.classList.toggle('open');
    if(header.classList.contains('open')){
        overlay.classList.remove('over-out')
        overlay.classList.add('over-in');
    } else {
        overlay.classList.remove('over-in');
        overlay.classList.add('over-out');
    }
})
