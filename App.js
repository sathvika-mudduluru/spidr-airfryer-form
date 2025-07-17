import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    priceGuess: "",
    spidrPin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "spidrPin") {
      const raw = value.replace(/\D/g, "").slice(0, 16);
      const formatted = raw.replace(/(.{4})/g, "$1-").slice(0, 19);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="form-container">
      <h2>Want in on the Spidr Air Fryer?</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="priceGuess" type="number" placeholder="Guess the Air Fryer’s Cost ($)" value={formData.priceGuess} onChange={handleChange} required />
        <input name="spidrPin" placeholder="Spidr PIN (####-####-####-####)" value={formData.spidrPin} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
