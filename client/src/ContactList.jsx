import React from 'react';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div>
      <h2>All Contacts</h2>
      <ul>
        {contacts && contacts.map((c) => (
          <li key={c._id}>
            <strong>{c.name}</strong> - {c.phone} - {c.email}
            <button onClick={() => onEdit(c)}>Edit</button>
            <button onClick={() => onDelete(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;





