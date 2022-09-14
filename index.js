const contactsOperstions = require("./db");

const argv = require("yargs").argv;
console.log(argv);

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperstions.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactsOperstions.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsOperstions.addContact(data);
      console.log(newContact);
      break;

    case "updateById":
      const updateContact = await contactsOperstions.updateById(id, data);
      if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(updateContact);
      break;

    case "remove":
      const removedContact = await contactsOperstions.removeById(id);
      if (!removedContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(removedContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });

// const id = "5";
// invokeAction({ action: "get", id });

// const newData = {
//   name: "Nataliia Boiko",
//   email: "natalabojko@gmail.com",
//   phone: "(050) 373-8465",
// };
// invokeAction({ action: "add", data: newData });

// const updateId = "f64f204c-b783-4549-9f18-732c1ab8bc15";
// invokeAction({ action: "remove", id: updateId });

invokeAction(argv);
