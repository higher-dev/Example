import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { add_business, update_business } from '../store/reducers/businessReducer';

const BusinessModal = ( {current_item, isOpen, onClose, method, index } ) => {
  const dispatch = useDispatch();
  const [businessInfo, setBusinessInfo] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(()=>{
    setBusinessInfo({
      image: current_item?.image || '',
      name: current_item?.name || '',
      detail: current_item?.detail || '',
      date: current_item?.date || '',
      industry: current_item?.industry || '',
      employee_count: current_item?.employee_count || 0
    });
    setErrors({});
  },[isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo({ ...businessInfo, [name]: value });
  };
  
  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setBusinessInfo({ ...businessInfo, [name]: Number(value) });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!businessInfo.image) newErrors.image = 'Image URL is required.';
    if (!businessInfo.name) newErrors.name = 'Business name is required.';
    if (!businessInfo.detail) newErrors.detail = 'Description is required.';
    if (!businessInfo.date) newErrors.date = 'Founded date is required.';
    if (!businessInfo.industry) newErrors.industry = 'Industry is required.';
    if (businessInfo.employee_count <= 0) newErrors.employee_count = 'Employee count must be a positive number.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop form submission if there are errors
    }
    method === 0 
      ? dispatch(add_business(businessInfo)) 
      : dispatch(update_business({new_item: businessInfo, pos: index}));
    onClose(false);
  };

  return (
    <>
      {isOpen ? (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => { onClose(false); }}>✖️</button>
            <div className='business-edit-container'>
              <h1 className="text-center bold">{method === 0 ? 'New ' : "Edit "}Business</h1>
              <form onSubmit={handleSubmit} className="business-form">
                <div className="inputGroup">
                  <label className="pb-1">Image URL:</label>
                  <input 
                    type="text" 
                    name="image" 
                    value={businessInfo.image} 
                    onChange={handleChange} 
                    required 
                  />
                  {errors.image && <span className="text-red-500">{errors.image}</span>}
                </div>

                <div className="inputGroup">
                  <label>Business Name:</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={businessInfo.name} 
                    onChange={handleChange} 
                    required 
                  />
                  {errors.name && <span className="text-red-500">{errors.name}</span>}
                </div>

                <div className="inputGroup">
                  <label>Description:</label>
                  <textarea 
                    name="detail" 
                    value={businessInfo.detail} 
                    onChange={handleChange} 
                    required 
                  />
                  {errors.detail && <span className="text-red-500">{errors.detail}</span>}
                </div>

                <div className="inputGroup">
                  <label>Founded Date:</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={businessInfo.date} 
                    onChange={handleChange} 
                    required 
                  />
                  {errors.date && <span className="text-red-500">{errors.date}</span>}
                </div>

                <div className="inputGroup">
                  <label>Industry:</label>
                  <input 
                    type="text" 
                    name="industry" 
                    value={businessInfo.industry} 
                    onChange={handleChange} 
                    required 
                  />
                  {errors.industry && <span className="text-red-500">{errors.industry}</span>}
                </div>

                <div className="inputGroup">
                  <label>Employee Count:</label>
                  <input 
                    type="number" 
                    name="employee_count" 
                    value={businessInfo.employee_count} 
                    onChange={handleNumberChange} 
                    required 
                  />
                  {errors.employee_count && <span className="text-red-500">{errors.employee_count}</span>}
                </div>
                
                <div className="flex justify-between">
                  <button type="button" className="bg-red-700" onClick={() => { onClose(false); }}>Cancel</button>
                  <button type="submit" className="bg-green-700">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BusinessModal;