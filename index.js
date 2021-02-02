const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");



const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the application for project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the name of the github repo or the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project. The why, what and how"
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and screenshots on how to use your application."
    },
    {
        type: "input",
        name: "credits",
        message: "Did anyone collaborate on this project? Credit them here."
    },
    {
        type: "list",
        name: "license",
        message: "Are there any appropriate licenses that need listing?",
        choices: [
            "afl-3.0",
            "apache-2.0",
            "artistic-2.0",
            "bsl-1.0",
            "bsd-2-clause",
            "bsd-3-clause",
            "bsd-3-clause-clear",
            "cc",
            "cc0-1.0",
            "cc-by-4.0",
            "cc-by-sa-4.0",
            "wtfpl",
            "ecl-2.0",
            "epl-1.0",
            "epl-2.0",
            "eupl-1.1",
            "agpl-3.0",
            "gpl",
            "gpl-2.0",
            "gpl-3.0",
            "lgpl",
            "lgpl-2.1",
            "lgpl-3.0",
            "isc",
            "lppl-1.3c",
            "ms-pl",
            "mit",
            "mpl-2.0",
            "osl-3.0",
            "postgresql",
            "ofl-1.1",
            "ncsa",
            "unlicense",
            "zlib",
            "N/A"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Where there any other contributors you would like to include?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests are available for the project?"
    },
    {
        type: "input",
        name: "questions1",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "questions2",
        message: "What is your email address?"
    }
]

function generateReadme(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Your readme is being generated");
        generateReadme("readme.md", generateMarkdown({...inquirerResponses}));
    })
}

init();