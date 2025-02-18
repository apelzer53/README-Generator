// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License Badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    ISC: 'https://opensource.org/licenses/ISC'
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `
  ## License
  This project is licensed under the ${license} License.
  For more information, visit the [${license} License](${renderLicenseLink(license)}).
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, contact me via my Github at [${data.github}](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

// Exporting the function properly for import in index.js
export default generateMarkdown;

