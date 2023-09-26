import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const SubscribeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const initialState = { email: '' };
  const [formData, setFormData] = useState(initialState);
  const { email } = formData;

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      const body = JSON.stringify({ data: formData });

      const res = await axios.post('https://aplmail.aplapollo.com/subscribe', body, config);

      if (res) {
        toast.success('Your contact has been successfully submitted');
        setFormData(initialState);
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form className="def-form subscribe-form" onSubmit={onSubmit}>
      <div className="input-wrap">
        <input type="email" name="email" value={email} onChange={handleInputChange} 
        className="form-input" placeholder="Email to Subscribe*" required />
      </div>
      <div className="submit-wrap">
        <button className="submit-btn" type="submit">
          {
            isLoading ? <div className="loader"></div>
            : <span><i class="fa-regular fa-envelope"></i></span>
          } 
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;