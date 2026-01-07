import React, { useEffect, useState } from 'react';

const ContactForm = ({ onSubmit, existing }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (existing) {
      setName(existing.name);
      setPhone(existing.phone);
      setEmail(existing.email);
    }
  }, [existing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone, email });

    if (!existing) {
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        required
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        required
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        value={email}
        required
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">
        {existing ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ContactForm;
