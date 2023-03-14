const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { validate } = require("@babel/types");


const teamInfo = [
    {
        type: 'input',
        name: 'manager',
        message: "What is the Managers name?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Managers name` } },
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the Managers employee ID?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Managers employee ID` } },
    },
    {
        type: 'input',
        name: 'managerEml',
        message: "What is the Managers email adress?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Managers email adress` } },
    },
    {
        type: 'input',
        name: 'managerOff',
        message: "What is the Managers office number",
        validate: (value) => { if (value) { return true } else { return `Please enter the Managers office number` } },
    },
    {
        type: 'list',
        name: 'team',
        message: "Would you like to add a Enginner or Intern",
        choices: ['Engineer', 'Intern'],
        validate: (value) => { if (value) { return true } else { return `Please choose a Engineer or Intern` } },
    }

        .then(({ team }) => {
            if (team == 'Engineer') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'engineer',
                            message: "What is the Engineers name?",
                            validate: (value) => { if (value) { return true } else { return `Please enter the Engineers name` } },
                        },
                        {
                            type: 'input',
                            name: 'engineerId',
                            message: "What is the Engineers employee ID?",
                            validate: (value) => { if (value) { return true } else { return `Please enter the Engineers employee ID` } },
                        },
                        {
                            type: 'input',
                            name: 'engineerEml',
                            message: "What is the Engineers email adress?",
                            validate: (value) => { if (value) { return true } else { return `Please enter the Engineers email adress` } },
                        },
                        {
                            type: 'input',
                            name: 'engineerGitHub',
                            message: "What is the Engineers Github?",
                            validate: (value) => { if (value) { return true } else { return `Please enter the Engineers Github` } },
                        },

                    ])
            }
        })
        .then(({team}) => {
            if(team == 'Intern') {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'intern',
                        message: "What is the Interns name?",
                        validate: (value) => { if (value) { return true } else { return `Please enter the Interns name` } },
                    },
                    {
                        type: 'input',
                        name: 'internId',
                        message: "What is the Interns employee ID?",
                        validate: (value) => { if (value) { return true } else { return `Please enter the Interns employee ID` } },
                    },
                    {
                        type: 'input',
                        name: 'internEml',
                        message: "What is the Interns email adress?",
                        validate: (value) => { if (value) { return true } else { return `Please enter the Interns email adress` } },
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: "What University does the Intern attend?",
                        validate: (value) => { if (value) { return true } else { return `Please enter the Interns university` } },
                    },

                ])
            }
        })

];




