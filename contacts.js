const fs = require('fs/promises');
const { nanoid } = require("nanoid");
const path = require('path');

const contactsPath = path.resolve(__dirname, "db/contacts.json");

async function readData(){
  const dataRaw = await fs.readFile(contactsPath);
  const data = JSON.parse(dataRaw);
  return data;
}

async function writeData(data){
await fs.writeFile(contactsPath, JSON.stringify(data, null, 2))
}

async function listContacts(){
  const  info = await readData();
  return info;
}

 async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find(contact => contact.id === contactId);
      if (!contact) {
        return null;
      }
      return contact;
  }

 async function removeContact(contactId) {
  const contacts = await readData();
  const removeData = contacts.filter((contact) => contact.id !== contactId);
  await writeData(removeData);

  }

async function addContact(name, email, phone) {
    const id = nanoid();
    const newContact = {id, name, email, phone};
    const data = await readData();
    data.push(newContact);
    await writeData(data);

  }

 module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
 }