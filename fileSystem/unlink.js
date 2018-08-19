// unlink (= delete) the folder / files

const fs = require('fs');

fs.unlink('./files/append.txt', (err) => {
  if (err) throw err;
  console.log('successfully deleted /files/append.txt');
});
