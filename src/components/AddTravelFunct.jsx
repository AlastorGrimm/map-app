import React, { useState } from 'react';
import   './travellingTable';
import { addTravel } from '../api/travel.api';
import './tableBody';


function Form() {
    const [formData, setFormData] = useState({
      travelName: "",
      country: "",
      dateBegin: "",
      dateEnd: "",
      isFinished: false
    });
  
    function handleInputChange(event) {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      // Add the form data to the table
      addTravel(formData);
      // Clear the form
      setFormData({
        travelName: "",
        country: "",
        dateBegin: "",
        dateEnd: "",
        isFinished: false
      });
    }
  
    return (
        <div>
      <form onSubmit={handleSubmit}>
 <input
          type="text"
          name="travelName"
          placeholder="Enter travel name"
          value={formData.travelName}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="country"
          placeholder="Enter country"
          value={formData.country}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="dateBegin"
          placeholder="Enter date begin"
          value={formData.dateBegin}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="dateEnd"
          placeholder="Enter date end"
          value={formData.dateEnd}
          onChange={handleInputChange}
        />
        <label>
          Is Finished:
          <input
            type="checkbox"
            name="isFinished"
            checked={formData.isFinished}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      </div>
    );

  }
  export default Form;