 // TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [];

    /*
        Title, Description, Table of Contents,
        Installation, Usage, License, Contributing, Tests, Questions, GitHub, username
        Email address
    */

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a description of your project.',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please provide installation instructions.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide usage information.',
            },
            {
                type: 'input',
                name: 'license',
                message: 'Please provide license information.',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Please provide contributing information.',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please provide test information.',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Please provide questions information.',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
        ])
        // data is the the object that contains the user's responses
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();
