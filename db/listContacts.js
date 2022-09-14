const fs = require("fs/promises");
const filePath = require("./filePath");

const listContacts = async () => {
  //   const contacts = await fs.readFile(filePath, "utf-8");
  const data = await fs.readFile(filePath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = listContacts;
