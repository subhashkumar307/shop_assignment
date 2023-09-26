/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { toast } from "react-toastify";

const EnquireForm = () => {

    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const initialState = {
        enquiryType: "",
        email: "",
        name: "",
        phoneNumber: "",
        city: "",
        message: "",
      };
  const [inputData, setInputData] = useState(initialState);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = {
      profession: inputData.enquiryType,
      email: inputData.email,
      name: inputData.name,
      number: inputData.phoneNumber,
      city: inputData.city,
      message: inputData.message,
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    };

    try {
      const response = await fetch(
        "https://admin.aplapollo.com/api/contacts",
        config
      );
      const res_mail = await fetch("https://aplmail.aplapollo.com/register", config);
      if (res_mail) {
        // alert("Your enquiry has been successfully submitted");
        toast.success("Your enquiry has been successfully submitted");
        setInputData(initialState);
        setIsLoading(false);
        setIsActive(false);
      } else {
        alert("Failed to submit the form");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={`sidebar-contact ${isActive ? "active" : ""}`}>
      <div className={`toggle ${isActive ? "active" : ""}`} onClick={handleToggle}>Enquire Now</div>
      <h2>Enquire Now</h2>
      <form id="myForm" onSubmit={handleFormSubmit}>
        <div className="scroll">
          <div className="input-item select-input">
            <select
              className="custom-select"
              name="enquiryType"
              value={inputData.enquiryType}
              onChange={handleInputChange}
              required
            >
              <option value="" selected>
                Enquiry type*
              </option>
              <option value="Domestic Purchase">Domestic Purchase</option>
              <option value="International Purchase">
                International Purchase
              </option>
              <option value="Products Catalogue">Products Catalogue</option>
              <option value="New Dealership Request">
                New Dealership Request
              </option>
              <option value="Grievances">Grievances</option>
            </select>
          </div>
          <div className="input-item">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email-ID*"
              value={inputData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-item">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name*"
              value={inputData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-item">
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone No*"
              value={inputData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-item">
            <input
              type="text"
              name="city"
              placeholder="City*"
              value={inputData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-item">
            <input
              type="text"
              name="message"
              placeholder="Please Write Your Query Here..."
              value={inputData.message}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="btn theme-btn-1 scolleq text-uppercase"
            type="submit"
          >
            {isLoading && <div className="loader me-2"></div> } <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquireForm;
