#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "height",
        type: "number",
        message: "Enter your height in meters:",
    },
    {
        name: "weight",
        type: "number",
        message: "Enter your weight in Kilogram:",
    }
]);
let calculateBMI = (answer.weight / (answer.height * answer.height));
console.log();
if (answer.weight > 0 && answer.height > 0) {
    console.log(`your bmi is : ${calculateBMI}`);
}
else {
    console.log("Please enter valid height and weight");
}
;
if (calculateBMI >= 18 && calculateBMI <= 25) {
    console.log("COngratukations! You BMI falls within normal range.");
}
else if (calculateBMI > 25) {
    console.log("You are considerd as over-weight.");
}
else if (calculateBMI < 18) {
    console.log("You are considerd as Under-weight.");
}
