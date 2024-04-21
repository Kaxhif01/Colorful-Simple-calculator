#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.redBright("\n \tWelcome to my Calculator machine\n"));


const answer = await inquirer.prompt([
  { message: chalk.yellowBright("Enter first number"), type: "number", name: "firstNumber" },
  { message: chalk.yellowBright("Enter second number"), type: "number", name: "secondNumber" },
  {
    message: chalk.magentaBright("Select one of the operators to perform operation"),
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Exponentiation",
      "Modulus",
    ],
  },
]);

//condition statement

if (answer.operator === "Addition") {
  console.log(chalk.greenBright(`Your answer is : ${answer.firstNumber + answer.secondNumber}`));
} else if (answer.operator === "Subtraction") {
  console.log(chalk.greenBright(`Your answer is : ${answer.firstNumber - answer.secondNumber}`));
} else if (answer.operator === "Multiplication") {
  console.log(chalk.greenBright(`Your answer is : ${answer.firstNumber * answer.secondNumber}`));
} else if (answer.operator === "Division") {
  console.log(chalk.greenBright(`Your answer is : ${answer.firstNumber / answer.secondNumber}`));
} else if (answer.operator === "Exponentiation") {
  console.log(chalk.greenBright(`Your answer is : ${answer.firstNumber ** answer.secondNumber}`));
} else if (answer.operator === "Modulus") {
  console.log(chalk.greenBright(`Your answer is : ${answer.firstNumber % answer.secondNumber}`));
} else {
  console.log(chalk.red("Please select valid operator"));
}
