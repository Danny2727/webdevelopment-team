function generateHtml(team) {
    return ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    ${renderTeam(team)}
</body>
</html>`
}

function renderTeam(team) { 
 renderedTeam = [];
    for (let i = 0; i < team.length; i++){
    if(team[i].getRole() === `Manager`){
        renderedTeam.push(generateManager(team[i]))
    } 
    if(team[i].getRole() === `Engineer`){
        renderedTeam.push(generateEngineer(team[i]))
     } 
     if(team[i].getRole() === `Intern`){
        renderedTeam.push(generateIntern(team[i]))
     } 
 }
 return renderedTeam.join();
}

function generateManager(manager){
  return  `<div>
    <h2>"${manager.manager}"</h2>
    <h3>Manager</h3>
    <form>
        <label for="manager"> ID:</label> <input>${manager.managerId}<input><br>
        <label for="managerEml"> Email: </label> <input>"${manager.managerEml}"<input><br>
        <label for="managerOffice"> Office number: </label> <input>${manager.managerOff}<input>
</div>
</div>`
}

function generateEngineer(engineer){
 return  `<h2>${engineer.engineer}</h2>
    <h3>Engineer</h3>
    <form>
        <label for="enginner"> ID: </label> <input>${engineer.engineerId}<input><br>
        <label for="enginnerEML"> Email: </label> <input>${engineer.engineerEml}<input><br>
        <label for="enginnerGit"> Github: </label> <input>${engineer.engineerGitHub}<input>
</div>`

}

function generateIntern(intern){
   return `<h2>${intern.intern}</h2>
    <h3>Intern</h3>
    <form>
        <label for="intern"> ID: </label> <input>${intern.internId}<input><br>
        <label for="internEML"> Email: </label> <input>${intern.internEml}<input><br>
        <label for="internSchool"> School: </label> <input>${intern.internSchool}<input>
        </div>`
}

module.exports = generateHtml;

