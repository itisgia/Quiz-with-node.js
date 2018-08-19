// console.log('creat file page');
const fs = require('fs'); //we need this file. reqire();
// const j = require('jquery');
fs.writeFile('./files/message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});




//core modules
//local moduels
//thirs party
