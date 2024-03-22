import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Kindly enter your first number :",
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Kindly enter your second number :",
});
let Total = input1.num1 + input2.num2;
console.log(Total);
