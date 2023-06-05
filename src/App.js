import React, { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [selectedContact, setSelectedContact] = useState(null);

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAddContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact({ name: '', phone: '', email: '' });
  };

  const handleDeleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const handleViewContactDetails = (contact) => {
    setSelectedContact(contact);
  };

  const handleEditContact = (index, updatedContact) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = updatedContact;
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Contact Manager</h1>

      {/* Contact Form */}
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newContact.phone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddContact}>
          Add Contact
        </button>
      </form>

      {/* Contact List */}
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <span>{contact.name}</span>
            <button onClick={() => handleViewContactDetails(contact)}>
              View Details
            </button>
            <button onClick={() => handleDeleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Contact Details */}
      {selectedContact && (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Phone: {selectedContact.phone}</p>
          <p>Email: {selectedContact.email}</p>
          <button onClick={() => setSelectedContact(null)}>Close</button>
        </div>
      )}

      {/* Edit Contact */}
      {/* Implement your own logic for editing contacts */}
    </div>
  );
};

export default App;
