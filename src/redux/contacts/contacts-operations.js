import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsAPI from "services/contacts-api";

export const fetchContacts = createAsyncThunk(
  "contscts/fetchContacts",
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  "contscts/addContact",
  async (contact) => {
    const addContact = await contactsAPI.addContact(contact);
    return addContact;
  }
);

export const deleteContact = createAsyncThunk(
  "contscts/deleteContact",
  async (id) => {
    const deletedContact = await contactsAPI.deleteContact(id);
    return deletedContact;
  }
);
