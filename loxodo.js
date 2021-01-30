const { openBrowser, goto, textBox, into, write, click, closeBrowser, clear, below } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("http://loxodo.tech/");
        await write("taiko", into(textBox({name:"tenant"})));
        await write("user1@taiko.com", into(textBox("Email/Username")));
        await write("user1", into(textBox("Password")));
        await click("Log in");
        await click("inbound");
        await click("inbound request");
        await click("add");
        await write("ExID001", into(textBox({formcontrolname:"extid"})));
        await write("POID002", into(textBox({formcontrolname:"poid"})));
        await write("1/25/2020", into(textBox({formcontrolname:"start_date"})));
        await write("1/26/2020", into(textBox({formcontrolname:"end_date"})));
        await click("next");
        await write("shipping company", into(textBox({formcontrolname:"companyName"})));
        await write("Supplier company", into(textBox({formcontrolname:"companyName"},below("Supplier Address"))));
        await write("boli@sevadev.com", into(textBox({formcontrolname:"email"})));
        await write("boli@sevadev.com", into(textBox({formcontrolname:"email"},below("Supplier Address"))));
        await click("next");
        await click("add");
        await write("t", into(textBox("search item")));
        await click("tcup1");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
