const menuBtn = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')
const navLabels = document.getElementsByClassName('for-expand')
const homeBtn = document.getElementById('home-btn')
const searchBtn = document.getElementById('search-btn')
const home = document.getElementById('home')
const search = document.getElementById('search')

let expanded = 1
menuBtn.addEventListener('click', () => {
        navBar.style.cssText = expanded == 1 ? "width: 100px" : "width: max-content";
        if (expanded == 1) {
            for (let i of navLabels) {
                i.removeAttribute('hidden')
            }  
        } else if (expanded == -1){
            for (let i of navLabels) {
                i.setAttribute('hidden', '')
            }  
        }
        expanded *= -1;
    })

homeBtn.addEventListener('click', () => {
    switchTabs(search, home)})
searchBtn.addEventListener('click', () => {
    switchTabs(home, search)})

function switchTabs(currentTab, otherTab) {
    currentTab.style.display = 'none';
    otherTab.style.display = 'flex';
}