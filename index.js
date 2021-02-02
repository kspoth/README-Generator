const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

const userQuestions = [
  "What is your GitHub username?",
  "Title:",
  "Description:",
  "Table of Contents:",
  "Installation:",
  "Usage:",
  "Licenses:",
  "Contributing:",
  "Tests:",
  "Questions:",
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success README.md Generated");
    }
  });
}

async function init() {

  await inquirer
    .prompt([
      {
        type: "input",
        message: userQuestions[0],
        name: "username",
      },
      {
        type: "input",
        message: userQuestions[1],
        name: "title",
      },
      {
        type: "input",
        message: userQuestions[2],
        name: "description",
      },
      {
        type: "input",
        message: userQuestions[3],
        name: "tableOfContents",
      },
      {
        type: "input",
        message: userQuestions[4],
        name: "install",
      },
      {
        type: "input",
        message: userQuestions[5],
        name: "usage",
      },
      {
        type: "checkbox",
        message: userQuestions[6],
        name: "license",
        choices: ["MIT" , "GPLv3" , "AGPL"],
      },
      {
        type: "input",
        message: userQuestions[7],
        name: "contributing",
      },
      {
        type: "input",
        message: userQuestions[8],
        name: "tests",
      },
      {
        type: "input",
        message: userQuestions[9],
        name: "questions",
      },
    ])
}
  init();