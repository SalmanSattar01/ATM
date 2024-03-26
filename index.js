#! /usr/bin/env node
import inquirer from "inquirer";
// Define the initial balance
let balance = 1000;
// Function to display the ATM options menu
function displayOptions() {
    console.log("ATM Options:");
    console.log("1. Check Balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Exit");
}
// Function to check balance
function checkBalance() {
    console.log(`Your current balance is $${balance}`);
}
// Function to deposit money
function deposit() {
    inquirer.prompt({
        type: 'number',
        name: 'amount',
        message: 'Enter the amount to deposit:'
    }).then(answer => {
        const amount = answer.amount;
        if (amount > 0) {
            balance += amount;
            console.log(`Deposit successful. Your new balance is $${balance}`);
        }
        else {
            console.log("Invalid amount. Please enter a positive number.");
        }
        displayOptions();
        selectOption();
    });
}
// Function to withdraw money
function withdraw() {
    inquirer.prompt({
        type: 'number',
        name: 'amount',
        message: 'Enter the amount to withdraw:'
    }).then(answer => {
        const amount = answer.amount;
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrawal successful. Your new balance is $${balance}`);
        }
        else if (amount > balance) {
            console.log("Insufficient funds.");
        }
        else {
            console.log("Invalid amount. Please enter a positive number.");
        }
        displayOptions();
        selectOption();
    });
}
// Function to select ATM option
function selectOption() {
    inquirer.prompt({
        type: 'number',
        name: 'option',
        message: 'Enter option number:'
    }).then(answer => {
        const option = answer.option;
        switch (option) {
            case 1:
                checkBalance();
                break;
            case 2:
                deposit();
                break;
            case 3:
                withdraw();
                break;
            case 4:
                console.log("Exiting. Thank you!");
                process.exit();
            default:
                console.log("Invalid option. Please select a valid option.");
                displayOptions();
                selectOption();
        }
    });
}
// // Start the ATM
console.log("Welcome to the ATM!");
displayOptions();
selectOption();
