const fs = require("fs/promises");
const filePath = require("./filePath");
const listContacts = require("./listContacts");

const removeById = async (id) => {
  const contacts = await listContacts();
  const contaktId = String(id);
  const idx = contacts.findIndex((contact) => contact.id === contaktId);
  if (idx === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(idx, 1);
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return removedContact;

  //   const newContacts = contacts.filter((item) => item.id !== id);
  //   await fs.writeFile(filePath, JSON.stringify(newContacts));
  //   return newContacts;
};

module.exports = removeById;
