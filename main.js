#!/usr/bin/env node

let helpObj = require('./commands/help');
let treeObj = require('./commands/tree');
let organizerObj = require('./commands/organizer');
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch(command){
    case "help":
        helpObj.helpFn();
        break;
    case "tree":
        treeObj.treeFn(path);
        break;
    case "organizer":
        organizerObj.organizeFn(path);
        break;
    default:
        console.log("Invalid command");
        break;
}