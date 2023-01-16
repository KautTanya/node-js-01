const fs = require('fs').promises;
const path = require('path');

// const contactsPath = path.resolve(__dirname, 'contacts.json');
const contactsPath = path.resolve('db/contacts.json');
console.log(contactsPath);



const listContacts = async()=>{
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    // const targetData = JSON.parse(data);
    // return targetData;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
listContacts(); 
// TODO: задокументировать каждую функцию
// function listContacts() {
//   fs.readFile(contactsPath, 'utf8', (error, data)=>{
//     if(error){
//       console.error(error);
//     }
//     console.log(data);
//   })
//     // ...твой код
//   }
  
  // function getContactById(contactId) {
  //   // ...твой код
  // }
  
  // function removeContact(contactId) {
  //   // ...твой код
  // }
  
  // function addContact(name, email, phone) {
  //   // ...твой код
  // }
 module.exports = {
  listContacts,
 }