// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const generateReadMe = ({ title, description, installation, usage, contribution, tests }) =>
    `# ${title}

## Description
    
    ${description}
    
## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
## Installation
    
    ${installation}
    
## Usage

    ${usage}
    
## License
    
## How to Contribute

    ${contribution}

## Tests
    
    ${tests}

    `;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe how users will install your application:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can people contribute to your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Describe how to test your application:'
        }
    ])
    .then((answers) => {
        const readMeContent = generateReadMe(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        )
    })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
