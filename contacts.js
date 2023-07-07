const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

/** Get all contacts from contacts.json (array).
 * @returns contact list.
 */
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

/** Get one contact by id.
 * @returns found contact.
 */
const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const foundСontact = contacts.find((contact) => contact.id === contactId);
  return foundСontact || null;
};

/** Remove one contact by id.
 * @returns removed contacts.
*/
const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const foundСontact = contacts.findIndex((contact) => contact.id === contactId);
  if (foundСontact === -1) return null;
  const removedContact = contacts.splice(foundСontact, 1);
  return removedContact || null;
};

/** Add a new contact into contacts.json.
 * @returns new contact.
 */
const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone
  }
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
