import React, { useState } from 'react';
import Input from './Input';
import styles from './DataMain.module.css'; // Create this CSS module for styling

const DataMain: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.row}>
        <Input
          label="Name"
          placeholder="Enter your name"
          value={formData.name}
          disabled={false}
          onChange={handleChange}
          name="name"
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          disabled={false}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Address"
          placeholder="Enter your address"
          value={formData.address}
          disabled={false}
          onChange={handleChange}
          name="address"
        />
        {/* Add more inputs here if needed */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataMain;
