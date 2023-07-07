const contacts = require("./contacts");

const getContactList = async () => {
const getAllContacts = await contacts.listContacts();
return console.log(getAllContacts);
}

// getContactList();

// const getContact = async (id) => {
//   const foundContact = await contacts.getContactById(id);
//   return console.log(foundContact);
// };

// getContact("AeHIrLTr6JkxGE6SN-0Rw");


// const removeContactById = async (id) => {
//   const removedContact = await contacts.removeContact(id);
//   return console.log(removedContact);
// };

// removeContactById("j__Wzuze1dLVBODXEoR4K");

const addContact = async (...data) => {
const newContacts = await contacts.addContact(...data);
return console.log(getContactList());
};

addContact("Mango", "mamama@mail.com", "722-22-880");