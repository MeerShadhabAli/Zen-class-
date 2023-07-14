// Node.js=> server-side javaScript runtime Environment 

const fs = require('fs');

fs.stat('C:\Users\meers\Documents\ZEN CLASS/nodejs/', (err, stat) => {

    if(err){
        console.error(err);
        return;
    }
    //  console.log(stats.isSymbolicLick());

    console.log(stats.size)

})