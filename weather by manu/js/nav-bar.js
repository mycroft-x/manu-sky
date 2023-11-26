const menuBtn = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')

let expanded = 1
menuBtn.addEventListener('click', function() {
    navBar.style.cssText = expanded == 1 ? "width: 100px" : "width: max-content";
    expanded *= -1 
})