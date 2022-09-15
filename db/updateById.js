const fs = require("fs/promises");
const filePath = require("./filePath");
const listContacts = require("./listContacts");

const updateById = async (id, data) => {
  const contacts = await listContacts();
  const contaktId = String(id);
  const idx = contacts.findIndex((contact) => contact.id === contaktId);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...data, id };
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return contacts[idx];
};

module.exports = updateById;
