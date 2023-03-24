function generateHtml(team) {
    return ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="styles.css">
        <title>Document</title>
    </head>
    <body>
    <div class="header">
    <h1>Web Development Team</h1>
    </div>
    ${renderTeam(team)}
</body>
</html>`
}

function renderTeam(team) {
    renderedTeam = [];
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === `Manager`) {
            renderedTeam.push(generateManager(team[i]))
        }
        if (team[i].getRole() === `Engineer`) {
            renderedTeam.push(generateEngineer(team[i]))
        }
        if (team[i].getRole() === `Intern`) {
            renderedTeam.push(generateIntern(team[i]))
        }
    }
    return renderedTeam.join();
}

function generateManager(manager) {
    return`<div class="card" style="width: 18rem;">
    <h2 id="name">${manager.name}</h2>
    <p id="employee">Manager</p>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">ID: ${manager.id}</li>
       <li class="list-group-item">Email: ${manager.email}</li>
       <li class="list-group-item">Office Number: ${manager.office}</li>
     </ul>
   </div>`
}

function generateEngineer(engineer) {
    return`<div class="card" style="width: 18rem;">
    <h2 id="name">${engineer.name}</h2>
    <p id="employee">Engineer</p>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">ID: ${engineer.id}</li>
       <li class="list-group-item">Email: ${engineer.email}</li>
       <li class="list-group-item">GitHub: ${engineer.github}</li>
     </ul>
   </div>`

}

function generateIntern(intern) {
    return  `<div class="card" style="width: 18rem;">
    <h2 id="name">${intern.name}</h2>
    <p id="employee">Intern</p>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">ID: ${intern.id}</li>
       <li class="list-group-item">Email: ${intern.email}</li>
       <li class="list-group-item">School: ${intern.school}</li>
     </ul>
   </div>`
}

module.exports = generateHtml;

