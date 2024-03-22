#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter firstNumber",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter secondNumber",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "select one of the operators to perform Operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log("The Sum of your number is: ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("The Difference of your number is:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("The Difference of your number is:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("the Quotient of your number is: ", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select valid Operator");
}
