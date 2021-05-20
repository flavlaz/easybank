//hamburger menu functionality
const menuBtn = document.getElementById('menu-btn');
const body = document.querySelector('body');
const header = document.getElementById('header');
const overlay = document.getElementById('overlay');
const fadeElements = document.querySelectorAll('.has-fade');


menuBtn.addEventListener('click', ()=> {
    header.classList.toggle('open');
    if(header.classList.contains('open')){
        fadeElements.forEach(function(element){
            element.classList.remove('over-out')
            element.classList.add('over-in');
        });
        body.classList.add('noscroll');

    } else {
        fadeElements.forEach(function(element){
            element.classList.remove('over-in');
            element.classList.add('over-out');
        })
        body.classList.remove('noscroll');
    }
})
