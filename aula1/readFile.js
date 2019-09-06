const fs = require('fs');

function moreWork(){
    console.log('doing more work.....');
}

fs.readFile('file1.txt','utf8' , (err, data)=> {
    if(err) throw err;
    console.log(data);   
});
moreWork();