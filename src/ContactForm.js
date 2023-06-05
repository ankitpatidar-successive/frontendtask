// ContactForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './actions';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, email }));
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
