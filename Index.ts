import inquirer from "inquirer"
import Choice from "inquirer/lib/objects/choice.js"

const exchangerates: any = {
    USD: 1,
    PKR: 278,
    SAR: 3.75,
    EUR: 0.92,
    INR: 83.42,
    CNY: 7.22
}

// every converter asks 3 questions
let askfrom = await inquirer.prompt(
    [
        {
            name: "fromCurrency",
            message: "Please select the currency you want to convert",
            type: "list",
            choices: ['PKR' , 'USD' , 'SAR' , 'EUR' , 'INR' , 'CNY']
        },
        {
            name: "toCurrency",
            message: "Please select the currency in which you want to convert",
            type: "list",
            choices: ['PKR' , 'USD' , 'SAR' , , 'EUR' , 'INR' , 'CNY']
        },
        {
            name: "askAmount",
            message: "Please enter the amount you want to convert",
            type: "number"
        }
    ]
)

let userfrom = exchangerates[askfrom.fromCurrency] //Storing the user input (from currency)
let userto = exchangerates[askfrom.toCurrency]     //Storing the user input (to currency)
let userAmount = askfrom.askAmount                  // Storing the user amount
let baseAmount = userAmount / userfrom             // if you are using the base rate mothod this will be the formula.
let convertedA = baseAmount * userto

const convertedRate = Math.trunc(convertedA)        //rounding off the result
console.log(convertedRate)