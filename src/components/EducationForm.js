import React from 'react';

const EducationForm = ({ inputUniversity, inputDegree, inputStartDate, inputEndDate, handleChange, handleSubmit }) => {
  return (
    <form id="form-education" onSubmit={handleSubmit}>
      <label htmlFor='university'>University:</label>
      <input type="text" id="university" name="university" onChange={(e) => handleChange('name', e)} value={inputUniversity} />

      <label htmlFor='degree'>Degree:</label>
      <input type="text" id="degree" name="degree" onChange={(e) => handleChange('degree', e)} value={inputDegree} />

      <label htmlFor='startDate'>Start Date:</label>
      <input type="date" id="startDate" name="startDate" onChange={(e) => handleChange('startDate', e)} value={inputStartDate} />

      <label htmlFor='startDate'>End Date:</label>
      <input type="date" id="startDate" name="startDate" onChange={(e) => handleChange('endDate', e)} value={inputEndDate} />
      
      <button type="submit">Edit Education</button>
    </form>
  )
}

export default EducationForm;

