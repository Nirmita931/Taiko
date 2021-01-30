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