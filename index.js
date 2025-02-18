// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'; // Correct path for your generateMarkdown.js

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL', 'Apache', 'ISC', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
    console.log(`${fileName} has been generated`);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers); // Call generateMarkdown correctly
        writeToFile('README.md', readmeContent); // Write to file
    })
    .catch((err) => console.error(err)); // Catch any errors
}

// Function call to initialize app
init();

