import { Contact } from '../db/models/contact.js';
export const getAllContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

export const getContactByID = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};
