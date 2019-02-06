import { 
    Contact, 
    ContactList
} from 'fo-test';

// See src/objects/Contact.ts
let contact: Contact = {
    id: {
        email: "maoo@finos.org",
        twitter: "maoo",
        phone: "+34 123 456 7890"
    }
};
console.log(contact);

// See src/objects/ContactList.ts
let contactList: ContactList = {
    contacts: [contact]
}
console.log(contactList);