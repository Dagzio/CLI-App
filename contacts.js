const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

/** Get all contacts from contacts.json (array) */
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

/** Get one contact by id */
const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const foundСontact = contacts.find((contact) => contact.id === contactId);
  return foundСontact || null;
};

/** Remove one contact by id */
const removeContact = async (contactId) => {
  const data = await fs.readFile(contactsPath);
};

/** Add a new contact into contacts.json */
const addContact = async (name, email, phone) => {
  const data = await fs.readFile(contactsPath);
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
