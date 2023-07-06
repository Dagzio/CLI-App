const contacts = require("./contacts");

const get = async () => {
const getAll = await contacts.listContacts();
return console.log(getAll);
}

get();