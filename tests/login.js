/* globals gauge*/
"use strict";
const path = require('path');
const {
    write,
    into,
    textBox,
    click
} = require('taiko');

step("Enter Username and password", async() => {
    await write("Admin", into(textBox({id:"txtUsername"})))
    await write("admin123", into(textBox({id:"txtPassword"})))
})

step("Enter username and password from csv <table>", async(table) => {
	for(var row of table.rows){
        await write(row.cells[0], into(textBox({id:"txtUsername"})));
        await write(row.cells[1], into(textBox({id:"txtPassword"})));
    }
});