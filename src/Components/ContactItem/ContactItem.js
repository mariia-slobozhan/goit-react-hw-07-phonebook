import React from "react";
import { useDeleteContactMutation } from "redux/contacts/contactsSlice";
import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.item} id={contact.id}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.tel}>{contact.phone}</span>
      <button
        className={s.button}
        onClick={() => deleteContact(contact.id)}
        type="button"
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
};
