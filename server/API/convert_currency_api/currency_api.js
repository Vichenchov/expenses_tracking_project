require('dotenv').config();
const axios = require("axios");
const currencyApiKey = process.env.CURRENCY_API_KEY;
const currencyApiHost = process.env.CURRENCY_API_HOST;

module.exports.convertCurrenciesToILS = function (fromCurrency, amount) {
    const options = {
        method: 'GET',
        url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/convert',
        params: {
            from: fromCurrency,
            to: 'ILS',
            amount: amount
        },
        headers: {
            'X-RapidAPI-Key': currencyApiKey,
            'X-RapidAPI-Host': currencyApiHost
        }
    };

    var convertedCurrency = axios.request(options).then(response => {
        return response.data.result;
    }).catch(function (error) {
        console.error(error);
    });
    return convertedCurrency;
}

module.exports.getCurrencyList = function () {
    const options = {
        method: 'GET',
        url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/symbols',
        headers: {
            'X-RapidAPI-Key': currencyApiKey,
            'X-RapidAPI-Host': currencyApiHost
        }
    };

    var currencyList = axios.request(options).then(response => {
        return response.data.symbols;
    }).catch(function (error) {
        console.error(error);
    });
    return currencyList;
}