const {prompt} = require("inquirer");
const fs = require('fs');
// const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
const {Employee, Engineer, Manager, Intern} = require('./lib');
const {managerQuestions, newPersonQuestion} = require('./questions')




const team = []


function managerInfo() {
    prompt(managerQuestions)
    .then(({manager, managerEml, managerId, managerOff}) =>{
    
        const person = new Manager(manager, managerId, managerEml, managerOff)
        team.push(person)
        newMember()
    })
}
function newMember() {
    prompt(newPersonQuestion)
    .then(({team})=>{
        if(team === 'Manager'){
            managerInfo()
        }
        if()
        if()
        if()


//switch case

    })
}

managerInfo()




// function renderEngineer(Engineer) {
//     let userEngineer = '';
//     if (Engineer === 'Engineer') {
//         userEngineer = `<div> 
//         <h2>${data.engineer}</h2>
//         <h3>Engineer</h3>
//         <form> 
//         <label for="enginner"> ID: </label> <input>${data.engineerId}<input><br>
//         <label for="enginnerEML"> Email: </label> <input>${data.engineerEml}<input><br>
//         <label for="enginnerGit"> Github: </label> <input>${data.engineerGitHub}<input>
//         </div>`
//     }
//     return userEngineer;
// }

// function renderIntern(Intern) {
//     let userIntern = '';
//     if (Intern === 'Intern') {
//         userEngineer = `<div> 
//         <h2>${data.inten}</h2>
//         <h3>Intern</h3>
//         <form> 
//         <label for="intern"> ID: </label> <input>"${data.intenId} "<input><br>
//         <label for="internEML"> Email: </label> <input>"${data.intenEml} "<input><br>
//         <label for="internSchool"> School: </label> <input>" ${data.internSchool}"<input>
//         </div>`
//     }

//     return userIntern;
// }

// function generateHtml(data) {
//     ` <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel= "stylesheet" href="style.css">
//     <title>WebDevTeam</title>
// </head>
// <body>
//     <header> 
//     <h1>Web Development Team</h1>
//     </header>
//     <div>
//     <h2>"${data.manager} "</h2>
//     <h3>Manager</h3>
//     <form> 
//     <label for="manager"> ID:</label> <input>" ${data.managerId}"<input><br>
//     <label for="managerEml"> Email: </label> <input>"${data.managerEml} "<input><br>
//     <label for="managerOffice"> Office number: </label> <input>"${data.managerOff}"<input>
//     </div>
//     </div>
//     ${renderEngineer(data.team)}
//     ${renderIntern(data.team)}
// </body>
// </html>`
// }

// function writeToFile(fileName, data) {
//     data = generateHtml(data)
//     fs.writeFile(fileName, data, (err) =>
//         err ? console.log(err) : console.log('You sucessfully created your team'),);
// }

// function init() {
//     fileName = "index.html",
//         inquirer
//             .prompt(teamInfo)
//             .then((data) => {
//                 console.log(data, 'data')
//                 writeToFile(fileName, data)
//             })
// }

// init()



