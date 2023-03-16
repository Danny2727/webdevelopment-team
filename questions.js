const managerQuestions = [
    {
        type: 'input',
        name: 'manager',
        message: "What is the Managers name?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Managers name.` } },
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the Managers employee ID?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Managers employee ID.` } },
    },
    {
        type: 'input',
        name: 'managerEml',
        message: "What is the Managers email address?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Managers email address.` } },
    },
    {
        type: 'input',
        name: 'managerOff',
        message: "What is the Managers office number?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Managers office number.` } },
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineer',
        message: "What is the Engineers name?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Engineers name.` } },
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the Engineers employee ID?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Engineers employee ID.` } },
    },
    {
        type: 'input',
        name: 'engineerEml',
        message: "What is the Engineers email address?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Engineers email address.` } },
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: "What is the Engineers Github?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Engineers Github.` } },
    },


]
const internQuestions = [
    {
        type: 'input',
        name: 'intern',
        message: "What is the Interns name?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Interns name.` } },
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the Interns employee ID?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Interns employee ID.` } },
    },
    {
        type: 'input',
        name: 'internEml',
        message: "What is the Interns email address?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Interns email address.` } },
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What University does the Intern attend?",
        validate: (value) => { if (value) { return true } else { return `Please enter the Interns university.` } },
    },

]

const newPersonQuestions = [
    {
        type: 'list',
        name: 'team',
        message: "Would you like to add a Manager, Enginner, Intern or have you finished adding members to the team.",
        choices: ['Manager', 'Engineer', 'Intern', 'Done'],

        validate: (value) => { if (value) { return true } else { return `Please choose a Manager, Engineer, Intern or select that you have finished creating your team.` } },
    }
]

module.exports = (managerQuestions, newPersonQuestions, engineerQuestions, internQuestions)