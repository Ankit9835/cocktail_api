import fetchDrink from './fetchDrink.js';
import displayData from './displayData.js';
import { showLoading } from './toggleLoading.js';

const showDrink = async (url) => {
    showLoading();
    // display data
    const data = await fetchDrink(url);
    console.log(data);
    // show data
    const section = await displayData(data);
    //console.log(section);
}

export default showDrink;