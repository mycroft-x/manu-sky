import cities from './jsonviewer.json' assert {type: 'json'};
import { searchWeatherInfo } from "./searchWeather.js";
const searchbar = document.getElementById('search-bar')
// const dropdownContainer = document.getElementById('searchDropdown');

// searchbar.addEventListener('input', updateDropdown)
// searchbar.addEventListener('blur', clearSearchBar)

searchbar.addEventListener('keydown', (event) => handleEnterKey(event))

// function updateDropdown() {
//     const inputValue = searchbar.value.toLowerCase();
//     const filteredSuggestions = cities.filter(suggestion =>
//         suggestion.toLowerCase().includes(inputValue)
//     ).slice(0, 4);
//     dropdownContainer.innerHTML = '';
//     filteredSuggestions.forEach(suggestion => {
//         const suggestionItem = document.createElement('div');
//         suggestionItem.textContent = suggestion;
//         suggestionItem.classList.add('dropdown-item');

//         suggestionItem.addEventListener('mousedown', (event) => {
//             event.preventDefault();
//             searchbar.value = suggestion;
//             dropdownContainer.innerHTML = '';
//             handleEnterKey(event)
//         });
//         dropdownContainer.appendChild(suggestionItem);
//     });
// }
// function clearSearchBar() {
//     dropdownContainer.innerHTML = '';
// }


function handleEnterKey(event) {
    if (event.key == 'Enter') {
        searchWeatherInfo(searchbar.value)
    }
}

