const inquirer = require('inquirer');
const fs = require('fs');


const readme_file = `README_NEW.md`;
const mdStyle = require('./mdstyle.js');


inquirer
   .prompt([
    {
        type: 'input',
        message: 'Project Name?',
        name: 'project',
    },{
        type: 'input',
        message:'What\'s your name?',
        name: 'author',
    },{
        type: 'input',
        message:'Your Personal Contact info? Email-Twitter-Instagram-Webpage?',
        name: 'contact',
    },{
        type: 'input',
        message: 'Project Description',
        name: 'description',
    },{
        type: 'input',
        message: 'Why you build this project?',
        name: 'why',
    },{
        type: 'checkbox',
        message: 'Which technology are you using?',
        name: 'technologies',
        choices: ['HTML', 'CSS', 'JS', 'NodeJS'],
        default: 'HTML',
    },{
        type: 'input',
        message: 'How to use your project?',
        name: 'howto',
    },{
        type: 'input',
        message: 'What\'s the features of your project?',
        name: 'features',
    },{
        type: 'input',
        message: 'Want to add Credits?',
        name: 'Credits',
    },{
        type: 'input',
        message: 'What\'s your GitHub link?',
        name: 'github',
    }
   ])




  .then((data) => {
    const mdGenerator = `${readme_file}`

    fs.writeFile(mdGenerator, mdStyle(data), (err) =>
      err
        ? console.log(err)
        : console.log(`Yay! Your ${readme_file} is created :-)! `)
    );
  });
