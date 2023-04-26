import React, { useState } from "react";
import './Selector.css'
import { useNavigate } from "react-router-dom";

const Selector = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${selectedOption}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="data">Select the data you want to see:</label>
        <select id="data" onChange={handleOptionChange}>
          <option value="">-- Select an option --</option>
          <option value="users-income-bmw-mercedes">
            Users with income less than $5 USD and BMW or Mercedes cars
          </option>
          <option value="male-users-phone-price-greater-than-10000">
            Male users with phone price greater than $10,000
          </option>
          <option value="users-last-name-starts-with-m">
            Users whose last name starts with "M" and quote length greater than 15
          </option>
          <option value="users-car-brand-email">
            Users with BMW, Mercedes or Audi cars and no digit in email
          </option>
          <option value="top-10-cities">
            Top 10 cities with highest number of users and their average income
          </option>
        </select>
        <button type="submit">Get Data</button>
      </form>
    </div>
  );
};

export default Selector;
