const {prompt} = require("inquirer");
const fs = require('fs');
const {Employee, Engineer, Manager, Intern} = require('./lib');
const {managerQuestions, newPersonQuestions, engineerQuestions, internQuestions} = require('./questions');
const generateHtml = require("./team");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "./dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");





const team = []


function managerInfo() {
    prompt(managerQuestions)
    .then(({manager, managerEml, managerId, managerOff}) =>{
    
        const person = new Manager(manager, managerId, managerEml, managerOff)
        team.push(person)
        newMember()
    })
}

function engineerInfo() {
    prompt(engineerQuestions)
    .then(({engineer, engineerEml, engineerId, engineerGitHub}) =>{

        const person = new Engineer(engineer, engineerEml, engineerId, engineerGitHub)
        team.push(person)
        newMember()
    })
}

function internInfo() {
    prompt(internQuestions)
    .then(({intern, internEml, internId, internSchool}) =>{

        const person = new Intern(intern, internEml, internId, internSchool)
        team.push(person)
        newMember()
    })
}

function newMember() {
    prompt(newPersonQuestions)
    .then(({team})=>{
        if(team === 'Manager'){
            managerInfo()
        }
        if(team === 'Engineer'){
            engineerInfo()
        }
        if(team === 'Intern'){
            internInfo()
        }
        if(team === 'Done'){
           writeFile()
        }
    })
}

function writeFile () {
    var data = generateHtml(team)
    fs.writeFile("team.html",data,(err) => 
    err ? console.log(err): console.log("You have succesfully created your team"),);  
}



managerInfo()





