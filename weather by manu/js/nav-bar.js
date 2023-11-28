const menuBtn = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')
const navLabels = document.getElementsByClassName('for-expand')

let expanded = 1
menuBtn.addEventListener('click', () => {
        navBar.style.cssText = expanded == 1 ? "width: 100px" : "width: max-content";
        if (expanded == 1) {
            for (const i of navLabels) {
                i.removeAttribute('hidden')
            }  
        } else if (expanded == -1){
            for (const i of navLabels) {
                i.setAttribute('hidden', '')
            }  
        }
        expanded *= -1;
    })