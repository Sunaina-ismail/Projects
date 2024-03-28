#! /usr/bin/env node


import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

console.log("\x1b[1mWelcome to the ATM machine!\x1b[0m ");

let yourPin = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: " Enter your Pin code.",
});

if (yourPin.pin === myPin) {
  console.log("Valid pin code");

  let atmOption = await inquirer.prompt([
    {
      name: "option",
      type: "list",
      message: "What would you like to do? ",
      choices: ["Withdraw", "Check Balance", "Fastcash","Deposit"],
    },
  ]);

  if (atmOption.option === "Withdraw") {
    let amountAns = await inquirer.prompt({
      name: "amount",
      type: "number",
      message: "Enter the amount you want to withdraw:",
    });
    let remainingBalance = myBalance - amountAns.amount;
    if (amountAns.amount <= myBalance) {
      console.log(
        `withdrawal successfull! Now your remaining balance is : ${remainingBalance}`
      );
    } else {
      console.log("Insufficient Balance! Enter lower amount");
    }
  } else if (atmOption.option === "Check Balance") {
    console.log(`your current balance is : ${myBalance}`);
  } else if (atmOption.option === "Fastcash") {
    let fastCash = await inquirer.prompt([
      {
        name: "cash",
        type: "list",
        message: "Select the amount you want to withdraw.",
        choices: ["1000", "2000", "5000", "10000"],
      },
    ]);

    let selectedAmount = fastCash.cash;

    if (
      selectedAmount === "1000" ||
      selectedAmount === "2000" ||
      selectedAmount === "5000" ||
      selectedAmount === "10000"
    ) {
      myBalance -= fastCash.cash;
      console.log(
        `Fast cash withdrawal successful! Now your remaining balance is : ${myBalance}`
      );
    } else {
      console.log("Invalid option selected.");
    }
}else if (atmOption.option === "Deposit"){
  let depositcash = await inquirer.prompt({
      name: "amountdeposit",
      type: "number",
      message: ("Enter the amount you want to deposit:")
  });
 let  depositedBalance = myBalance + depositcash.amountdeposit
 console.log(`Deposit successful! Now your current balance is : ${depositedBalance}`);
 
}

}else {
    console.log("Invalid Pin code, TRY AGAIN.");
    
}
if (myPin === yourPin.pin)
console.log("\n\x1b[1mThank you for using this ATM. Have a great day!\x1b[0m");

