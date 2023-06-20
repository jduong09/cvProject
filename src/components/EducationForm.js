import React from 'react';

const EducationForm = ({ inputUniversity, inputDegree, inputStartDate, inputEndDate, handleChange }) => {
  return (
    <form id="form-education">
      <label htmlFor='university'>University:</label>
      <input type="text" id="university" name="university" onChange={(e) => handleChange('name', e)} value={inputUniversity} />

      <label htmlFor='university'>Degree:</label>
      <input type="text" id="university" name="university" onChange={(e) => handleChange('degree', e)} value={inputDegree} />

      <label htmlFor='university'>Start Date:</label>
      <input type="date" id="university" name="university" onChange={(e) => handleChange('startDate', e)} value={inputStartDate} />

      <label htmlFor='university'>End Date:</label>
      <input type="date" id="university" name="university" onChange={(e) => handleChange('endDate', e)} value={inputEndDate} />
      
      <button type="submit">Edit Education</button>
    </form>
  )
}

export default EducationForm;


