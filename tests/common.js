/* globals gauge*/
"use strict";
const path = require('path');
const {
    click,
    text
} = require('taiko');
const assert = require("assert");

step("Click <args>", async(args) => {
    await click(args);
});

step("Verify <message>", async(message) => {
    assert.ok(await text(message,{selectHiddenElements: true}).exists())
});