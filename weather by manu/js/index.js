const menuBtn = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')

menuBtn.addEventListener('click', menuExpand)

let expanded = 1

function menuExpand(params) {
    if (expanded == 1) {
        navBar.style.cssText="width: 100px"
        expanded = expanded*-1
    } else {
        navBar.style.cssText="width: max-content"
        expanded = expanded *-1        
    }
    
}