const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

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
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for your project or select none:',
            choices: ['Mit', 'none']
        }
    ])
    .then((answers) => {
        const readMeContent = generateMarkdown(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        )
    })
