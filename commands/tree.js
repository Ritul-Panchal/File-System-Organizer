// OBJECTIVE OF THIS FILE:
// In this file treeFn takes the path of a folder and prints all the files/folders in that folder.
// after writing the function we export it so that we can use it from anywhere just by require.


let fs = require('fs');
let path = require('path');

function treeFn(srcPath){
    let baseName = path.basename(srcPath);
    console.log(baseName);
    console.log("\n\t"+"└──");
    let files = fs.readdirSync(srcPath);
    let allEntities = "";
    for (let i = 0; i < files.length; i++){
        allEntities += '\n\t' + "├──" + files[i];
    }

    console.log(allEntities);
}


module.exports = {
    treeFn : treeFn
}