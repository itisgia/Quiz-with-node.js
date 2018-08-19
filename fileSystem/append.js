const fs = require('fs');

var content = 'This is the content, which we wanted added to the file ';

fs.appendFile('./files/append.txt', content , function (err) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log('content has appended.');
    }
})
