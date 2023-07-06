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
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
};

/** Remove one contact by id */
const removeContact = async (contactId) => {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
};

/** Add a new contact into contacts.json */
const addContact = async (name, email, phone) => {
  // ...твой код. Возвращает объект добавленного контакта.
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
