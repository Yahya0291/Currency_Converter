import inquirer from "inquirer";
const exchangerates = {
    USD: 1,
    PKR: 278,
    SAR: 3.75,
    EUR: 0.92,
    INR: 83.42,
    CNY: 7.22
};
let askfrom = await inquirer.prompt([
    {
        name: "fromCurrency",
        message: "Please select the currency you want to convert",
        type: "list",
        choices: ['PKR', 'USD', 'SAR', 'EUR', 'INR', 'CNY']
    },
    {
        name: "toCurrency",
        message: "Please select the currency in which you want to convert",
        type: "list",
        choices: ['PKR', 'USD', 'SAR', , 'EUR', 'INR', 'CNY']
    },
    {
        name: "askAmount",
        message: "Please enter the amount you want to convert",
        type: "number"
    }
]);
let userfrom = exchangerates[askfrom.fromCurrency];
let userto = exchangerates[askfrom.toCurrency];
let userAmount = askfrom.askAmount;
let baseAmount = userAmount / userfrom;
let convertedA = baseAmount * userto;
//console.log(convertedA)
const convertedRate = Math.trunc(convertedA);
console.log(convertedRate);
