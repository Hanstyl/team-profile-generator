// Manager card
const managerHtml = (manager) => {
    return `
            <div class='cell large-3'>
                <div class="managerInfo">
                <h1 class= "manager-color">Manager</h1>
                   <h2>${manager.name}</h2>
                </div>
                <div>
                      <p>ID: ${manager.id}</p>
                      <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                      <p>Office Number: ${manager.officeNumber}</p>
                </div>
            </div>          
    `
        ;
}


// intern Card
const internHtml = (intern) => {
    return `
            <div class= 'cell large-3'>
                <div 'engineer-info'>
                   <h1 class='intern-color'>Intern</h1>
                   <h2>${intern.name}</h2>
                </div>
                <div>
                      <p>ID: ${intern.id}<p>
                      <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                      <p>School: ${intern.school}</p>
                </div> 
            </div>    
    `;
}


// Engineer card
const engineerHtml = (engineer) => {
    return `
            <div class= 'cell large-3'> 
                <div>
                   <h1 class='engineer-color'>Engineer</h1>
                   <h2>${engineer.name}</h2>
                </div>
                <div>
                    <p>ID: ${engineer.id}<p>
                    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p>Github: <a href="https://github.com/${engineer.github}" target="blank">${engineer.github}</a></p>
                </div>  
            </div>    
    `;
}





// If certain employee is selected, push card to main HTML
const displayHTML = (employees) => {
    let employeeCards = [];

    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i])

        if (employees[i].getRole() === "Manager") {
            const manager = managerHtml(employees[i]);
            employeeCards.push(manager)
        }
        else if (employees[i].getRole() === "Engineer") {
            const engineer = engineerHtml(employees[i]);
            employeeCards.push(engineer)
        }
        else if (employees[i].getRole() === "Intern") {
            const intern = internHtml(employees[i]);
            employeeCards.push(intern)
        }
    }
    let htmlEmployee = employeeCards.join('');


    const generateTeamProfile = mainBodyHTML(htmlEmployee);
    return generateTeamProfile;
};




// Main body HTML with interpolation
const mainBodyHTML = (htmlEmployee) => {
    return (
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css"
                integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">
            <title>Team profile Generator</title>
            <link rel="stylesheet" href="../dist/style.css" />
        </head>
        
        <body>
            <main>
        
                <header>
                    <h1 class="text-center"> Team Profile Generator </h1>
                </header>
        
        
                <section>
                    <div class="grid-x">
                            ${htmlEmployee}
                    </div>
                </section>
            </main>
        
            <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js"
                integrity="sha256-pRF3zifJRA9jXGv++b06qwtSqX1byFQOLjqa2PTEb2o=" crossorigin="anonymous"></script>
        </body>
        
        </html>`
    )
};




// Export
module.exports = displayHTML;