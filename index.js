const hambuger = document.querySelector("#hambuger");
const closeMenu = document.querySelector("#close-menu");
const nav = document.querySelector("nav");

hambuger.addEventListener('click', function(){
    nav.classList.toggle('show-menu');
    hambuger.classList.add('hide-icon');
    closeMenu.classList.remove('hide-icon');
});

closeMenu.addEventListener('click', function(){
    nav.classList.toggle('show-menu');
    hambuger.classList.remove('hide-icon');
    closeMenu.classList.add('hide-icon');
})