const contacts = require("./contacts");

// const get = async () => {
// const getAll = await contacts.listContacts();
// return console.log(getAll);
// }

// get();

const getContact = async (id) => {
  const foundContact = await contacts.getContactById(id);
  return console.log(foundContact);
};

getContact("AeHIrLTr6JkxGE6SN-0Rw");
