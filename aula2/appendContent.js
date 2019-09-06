var fs = require('fs');
fs.appendFile('mynewfile1.txt', "\nThis is an append", function(err){
    if(err) throw err;
    console.log('updated');
})