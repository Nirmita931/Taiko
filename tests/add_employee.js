/* globals gauge*/
"use strict";
const path = require('path');
const {
    click,
    textBox,
    attach,
    write,
    into,
    fileField,
    press,
    $,
    radioButton,
    dropDown,
    checkBox,
    toRightOf,
    clear
} = require('taiko');
const assert = require("assert");
const fs = require("fs");
let employee_data = JSON.parse(fs.readFileSync('data/employee.json'));

step("Enter Employee details", async() => {
    await write("Test", into(textBox({id:"firstName"})));
    await write("user", into(textBox({id:"lastName"})));
    await attach("data/images/blue.jpg", into(fileField({id:"photofile"})))
});

step("Enter employee personal detail", async () => {
    await clear(textBox(toRightOf("License Expiry Date")));
    await write("2021-1-30", into(clear(textBox(toRightOf("License Expiry Date")))));
    await press("Enter");
    await write("1234", $("#personal_txtNICNo"));
    await radioButton("Female").select();
    await dropDown("Marital Status").select("Single");
    await checkBox("smoker").check();
});

step("Enter Employee details from json", async () => {
	await write(employee_data.employee.first_name, into(textBox({id:"firstName"})));
    await write(employee_data.employee.last_name, into(textBox({id:"lastName"})));
    await attach("data/images/blue.jpg", into(fileField({id:"photofile"})))
});
