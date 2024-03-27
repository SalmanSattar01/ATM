#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 2000;
let myPin = 1234;
console.log("Welcome to the ATM!");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please Enter Your Pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Deposit", "Exit"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["Withdraw Manually", "Fast Cash"],
            },
        ]);
        if (operationAns.operation === "Withdraw Manually") {
            let withdrawAns = await inquirer
                .prompt([
                {
                    name: "withdraw",
                    message: " Please Enter Your Amount",
                    type: "number",
                },
            ])
                .then((answer) => {
                const withdraw = answer.withdraw;
                if (withdraw > 0 && withdraw <= myBalance) {
                    myBalance -= withdraw;
                    console.log(`Withdrawal successful. Your new balance is $${myBalance}`);
                }
                else if (withdraw > myBalance) {
                    console.log("Insufficient funds.");
                }
                else {
                    console.log("Invalid amount. Please enter a positive number.");
                }
            });
        }
        else {
            let operationAns = await inquirer.prompt([
                {
                    name: "operation",
                    message: "Please Select Option",
                    type: "list",
                    choices: ["500", "1000", "5000", "10000"],
                },
            ]);
            if (operationAns.operation === "500") {
                if (500 > 0 && 500 <= myBalance) {
                    myBalance -= 500;
                    console.log(`Withdrawal successful. Your new balance is $${myBalance}`);
                }
                else if (500 > myBalance) {
                    console.log("Insufficient funds.");
                }
            }
            else if (operationAns.operation === "1000") {
                if (1000 > 0 && 1000 <= myBalance) {
                    myBalance -= 1000;
                    console.log(`Withdrawal successful. Your new balance is $${myBalance}`);
                }
                else if (1000 > myBalance) {
                    console.log("Insufficient funds.");
                }
            }
            else if (operationAns.operation === "5000") {
                if (5000 > 0 && 5000 <= myBalance) {
                    myBalance -= 5000;
                    console.log(`Withdrawal successful. Your new balance is $${myBalance}`);
                }
                else if (5000 > myBalance) {
                    console.log("Insufficient funds.");
                }
            }
            else if (operationAns.operation === "10000") {
                if (10000 > 0 && 10000 <= myBalance) {
                    myBalance -= 10000;
                    console.log(`Withdrawal successful. Your new balance is $${myBalance}`);
                }
                else if (10000 > myBalance) {
                    console.log("Insufficient funds.");
                }
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your balcne is ${myBalance}`);
    }
    else if (operationAns.operation === "Deposit") {
        let depositAns = await inquirer
            .prompt([
            {
                name: "deposit",
                message: " Please Enter Your Amount",
                type: "number",
            },
        ])
            .then((answer) => {
            const deposit = answer.deposit;
            if (deposit > 0) {
                myBalance += deposit;
                console.log(`Deposit successful. Your new balance is $${myBalance}`);
            }
            else {
                console.log("Invalid amount. Please enter a positive number.");
            }
        });
    }
    else if (operationAns.operation === "Exit") {
        console.log(`Thanks For Using ATM Machine`);
    }
}
else {
    console.log(" your pin is in correct");
}
