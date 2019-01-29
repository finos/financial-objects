import { Contact } from "../objects/Contact";

// Ssee src/objects/Contact.ts
let contact: Contact = {
    type: "org.finos.fo.Contact",
    id: {
        email: "maoo@finos.org",
        twitter: "maoo",
        phone: "+34 123 456 7890"
    }
};
console.log(contact);
