const price = 7.88;
const gem = 675;
const bcInGems = 325;

const output = document.querySelector('#coins-phr');
const calculateButton = document.querySelector('#calculate-coins-phr');
const boosterCookiePrice = document.querySelector('#booster-cookie-price')

let bcInCoins;

const getBoosterCookiePrice = async () => {
    const rawResponse = await fetch('https://api.hypixel.net/skyblock/bazaar');    
    const response = await rawResponse.json();
    
    bcInCoins = response.products.BOOSTER_COOKIE.sell_summary[0].pricePerUnit;
    boosterCookiePrice.textContent = `Booster cookie price: $${bcInCoins}`;
}

calculateButton.addEventListener('click', () => {
    let wage = document.querySelector('#wage'); 

    if (/^\d+$/.test(wage.value) == false) {
        return
    }
    
    let coinsPerHour = (wage.value / ((price / gem ) * bcInGems)) * bcInCoins; 

    output.textContent = `Coins per hour: $${Humanize.compactInteger(coinsPerHour, 3)}`; 
});

getBoosterCookiePrice();