const fs = require('fs/promises');
const { nanoid } = require("nanoid");
const path = require('path');

const contactsPath = path.resolve(__dirname, "db/contacts.json");

async function readData(){
  try{
    const dataRaw = await fs.readFile(contactsPath);
    const data = JSON.parse(dataRaw);
    return data;
  } catch(error){
    console.log(error);
  }

}

async function writeData(data){
  try{
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2))
  } catch(error){
    console.log(error);
  }

}

async function listContacts(){
  try{
    const  info = await readData();
    return info;
  } catch(error){
    console.log(error);
  }
  
}

 async function getContactById(contactId) {
  try{
    const contacts = await listContacts();
    const contact = contacts.find(contact => contact.id === contactId);
        if (!contact) {
          return null;
        }
        return contact;
  } catch(error){
    console.log(error);
  }

  }

 async function removeContact(contactId) {
  try{
    const contacts = await readData();
    const removeData = contacts.filter((contact) => contact.id !== contactId);
    await writeData(removeData);
  } catch(error){
    console.log(error);
  }
  }

async function addContact(name, email, phone) {
  try{
    const id = nanoid();
    const newContact = {id, name, email, phone};
    const data = await readData();
    data.push(newContact);
    await writeData(data);

  } catch(error){
    console.log(error);
  }
   

  }

 module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
 }