const menuBtn = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')
const middle = document.getElementById('home-middle')

menuBtn.addEventListener('click', menuExpand)

const dawn = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
const dusk = [18, 19, 20, 21, 22, 23, 1, 2, 3, 4, 5]

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

// middle.style.background="url('/img/images/night.jpg')"


if (dawn.includes(D)){
    middle.style.background = "url('/img/images/day.jpg')"
} else {
    middle.style.background = "url('/img/images/night.jpg')"
}  


theming()

