var menuBtn = document.getElementById('menu-btn')
var navBar = document.getElementById('nav-bar')
var navLabels = document.getElementsByClassName('for-expand')
var homeBtn = document.getElementById('home-btn')
var searchBtn = document.getElementById('search-btn')
var home = document.getElementById('home')
var search = document.getElementById('search')

var expanded = 1
menuBtn.addEventListener('click', () => {
        navBar.style.cssText = expanded == 1 ? "width: 100px" : "width: max-content";
        if (expanded == 1) {
            for (var i of navLabels) {
                i.removeAttribute('hidden')
            }  
        } else if (expanded == -1){
            for (var i of navLabels) {
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