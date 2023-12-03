import { isBig } from "./timings.js"
const menuBtn = document.getElementById('menu-btn')
const navBar = document.getElementById('nav-bar')
const navLabels = document.getElementsByClassName('for-expand')
const navLabelSmall = document.getElementsByClassName('for-expands')
const navLabelMenu = document.getElementsByClassName('for-expandm')
const homeBtn = document.getElementById('home-btn')
const searchBtn = document.getElementById('search-btn')
const homeSmall = document.getElementById('home-small')
const searchSmall = document.getElementById('search-small')
const home = document.getElementById('home')
const search = document.getElementById('search')
let expanded = 1


    if (isBig()) {
        menuBtn.addEventListener('click', () => {
            navBar.style.cssText = expanded == 1 ? "width: 100px" : "width: max-content";
            if (expanded == 1) {
                for (let i of navLabels) {
                    i.removeAttribute('hidden')
                }
            } else if (expanded == -1) {
                for (let i of navLabels) {
                    i.setAttribute('hidden', '')
                }
            }
            expanded *= -1;
        })
    } else if (!(isBig())) {
        navBar.style.width = '100%'
        document.getElementById('menu-image').addEventListener('click', () => {
            if (expanded == 1) {
                for (let i of navLabelMenu) {
                    i.style.display = 'inline-flex'
                }
            } else if (expanded == -1) {
                for (let i of navLabelMenu) {
                    i.style.display = 'none'
                }
            }
            expanded *= -1;
        })
    }


homeBtn.addEventListener('click', () => {
    switchTabs(search, home)
})
homeSmall.addEventListener('click', () => {
    switchTabs(search, home)
})
searchBtn.addEventListener('click', () => {
    switchTabs(home, search)
})
searchSmall.addEventListener('click', () => {
    switchTabs(home, search)
})


function switchTabs(currentTab, otherTab) {
    currentTab.style.display = 'none';
    otherTab.style.display = 'flex';
}