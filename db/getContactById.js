const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const contacts = await listContacts();
  const contaktId = String(id);
  const result = contacts.find((contact) => contact.id === contaktId);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContactById;
