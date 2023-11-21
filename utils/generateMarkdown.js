// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  } else {
    return ""
  }
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `[license](#license)`
} else {
  return ""
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    This project is under ${license} license.
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
    
    ${data.description}
    
## Table of Contents
    
[Installation](#installation)
[Usage](#usage)
[Questions](#questions)
${renderLicenseLink(data.license)}
    
## Installation
    
    ${data.installation}
    
## Usage

    ${data.usage}
    
## How to Contribute

    ${data.contribution}

## Tests
    
    ${data.tests}

## Questions:

    Link to GitHub: [GitHub](github.com/${data.github})
    Send email if you have questions or want to contribute: [Email](${data.email})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
