// Required packages
const fs = require('fs');
const inquirer = require('inquirer');


// Module Exports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const displayHTML = require('./src/spawnSiteHTML');


// Role Array
const teamRole = [];



// initial prompt to create employee/role
const initialSetupQA = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addTeamRole',
            message: 'Do you need to add an employee to the team?',
            default: 'true'
        }
    ])
        .then(answers => {
            if (answers.addTeamRole) {
                promptEmployeeCreation();
            } else {
                writeToFile();
            }
        })
};


// Role selection
const promptEmployeeCreation = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'Select the designated team members role',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
        .then(answers => {
            if (answers.employeeRole === 'Manager') {
                promptManager();
            }
            else if (answers.employeeRole === 'Engineer') {
                promptEngineer();
            }
            else if (answers.employeeRole === 'Intern') {
                promptIntern();
            }
        })
};

// Manager prompt
const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Manager's name? (Required)",
        },
        {
            type: "input",
            name: "managerId",
            message: "Manager's Id.",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Manager's email",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Managers office phone number."
        }
    ])
        .then(answers => {
            initialSetupQA();
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            console.log(manager) // remove after test

            team.push(manager);
        })
};

// Engineer prompt
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Engineer's name? (Required)",
        },
        {
            type: "input",
            name: "engineerId",
            message: "Engineer's Id.",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Engineer's email",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Engineers GitHub Username."
        }
    ])
        .then(answers => {
            initialSetupQA();
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            console.log(engineer) // remove after test

            team.push(engineer);
            console.log(team); // Remove after test
        })
};


// Intern Prompt 
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Intern's name? (Required)",
        },
        {
            type: "input",
            name: "internId",
            message: "Intern's Id.",
        },
        {
            type: "input",
            name: "internEmail",
            message: "Intern's email",
        },
        {
            type: "input",
            name: "school",
            message: "School name intern attended."
        }
    ])
        .then(answers => {
            initialSetupQA();
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            console.log(intern) // Remove after test

            team.push(intern);
        })
};


// Write to file
const writeToFile = () => {
    fs.writeFileSync('./dist/index.html', displayHTML(teamRole))
}




// Function Call
initialSetupQA();