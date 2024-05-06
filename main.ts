#! /usr/bin/env node

import inquirer from "inquirer";

 let todos = [];
let condition = true;


while (condition)

{

let todoQuestions = await inquirer.prompt([{

        name : "todoAdd",
        type : "input",
        message : "what would you like to add todo?"


},

{

    name : "todoMoreadd",
    type : "confirm",
    message : "would you like to add more in your todo list?",
    default : "true"


},
]
);

if (todoQuestions.todoAdd.length>=2) {

    todos.push(todoQuestions.todoAdd)
} else {
    condition = false
}

console.log(todos);



}