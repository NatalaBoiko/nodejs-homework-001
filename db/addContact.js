const { v4 } = require("uuid");
const fs = require("fs/promises");
const filePath = require("./filePath");
const listContacts = require("./listContacts");

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), ...data };

  contacts.push(newContact);

  await fs.writeFile(filePath, JSON.stringify(contacts));
  return newContact;
};

module.exports = addContact;
