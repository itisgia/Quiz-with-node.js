// var name = 'Jiah';
//
// // console.log('Hello ' + name);
// console.log(`Hello ${name}`); //adding a var into a string/ tipback and ${}
// console.log('first node project running');

// console.log(__dirname); //A good way to navigate files.
// console.log(__filename);

//standard out : calling standard output. telling we want somethon output in our server / in: input data
//process: when run vode server,
process.stdout.write('\n\nWhat is your name?\n\n'); //\n : gives little bit of whitespace
process.stdin.on('data', function(answer) {
    process.stdout.write(`\n\nHello ${answer} \n\n`);
    process.exit();
}); //we're allowing us
