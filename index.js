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
    
## License
    
## How to Contribute
    
## Tests
    
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
    ])
    .then((answers) => {
        const readMeContent = generateReadMe(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfullly created README.md!')
        )
    })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
