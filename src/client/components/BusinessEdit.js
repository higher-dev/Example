import React, { useState } from 'react';

const BusinessEdit = () => {
  const [businessInfo, setBusinessInfo] = useState({
    image: '',
    name: '',
    detail: '',
    date: '',
    industry: '',
    employee_count: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo({ ...businessInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, e.g., sending data to an API
    console.log('Business Information Submitted:', businessInfo);
    // Reset form
    setBusinessInfo({ name: '', description: '', address: '', contact: '' });
  };

  return (
    <div className='business-edit-container'>
      <h2>Add Business Information</h2>
      <form onSubmit={handleSubmit} className="business-form">
        <div className="inputGroup">
          <label>Business Name:</label>
          <input 
            type="text" 
            name="name" 
            value={businessInfo.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="inputGroup">
          <label className="">Description:</label>
          <textarea 
            name="description" 
            value={businessInfo.description} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="inputGroup">
          <label>Address:</label>
          <input 
            type="text" 
            name="address" 
            value={businessInfo.address} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="inputGroup">
          <label>Contact Info:</label>
          <input 
            type="tel" 
            name="contact" 
            value={businessInfo.contact} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusinessEdit;
