import presentDrinks from './utils/presentDrink.js';
import './utils/searchUser.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL);
});