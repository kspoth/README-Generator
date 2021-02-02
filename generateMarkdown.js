// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  
## Description
${data.description}
## Github Repo
github.com/${data.questions}/${data.github}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${data.license}
## Contributing

${data.contributing}
## Tests
${data.tests}

## Questions
If you have any questions on the functionality, or in general please visit http://github.com/${data.questions1} or reach out to ${data.questions2}
`;
}

module.exports = generateMarkdown;


