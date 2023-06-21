import React from 'react';

const ExperienceForm = ({ inputName, inputTitle, inputLocation, inputStartDate, inputEndDate, achievements, inputAchievement, handleChange, handleSubmit, addAchievement }) => {
  const listAchievements = achievements.map((achievement, idx) => {
    return (
      <li key={idx}>{achievement}</li>
    )
  })
  return (
    <form id="form-education" onSubmit={handleSubmit}>
      <h3>Add New Experience</h3>
      <label htmlFor='experience-name'>Company/Job Name:</label>
      <input type="text" id="experience-name" name="experience-name" onChange={(e) => handleChange('name', e)} value={inputName} />

      <label htmlFor='experience-title'>Job Title:</label>
      <input type="text" id="experience-title" name="experience-title" onChange={(e) => handleChange('title', e)} value={inputTitle} />

      <label htmlFor='experience-location'>Location:</label>
      <input type="text" id="experience-location" name="experience-location" onChange={(e) => handleChange('location', e)} value={inputLocation} />

      <label htmlFor='experience-startDate'>Start Date:</label>
      <input type="date" id="experience-startDate" name="experience-startDate" onChange={(e) => handleChange('startDate', e)} value={inputStartDate} />

      <label htmlFor='experience-endDate'>End Date:</label>
      <input type="date" id="experience-endDate" name="experience-endDate" onChange={(e) => handleChange('endDate', e)} value={inputEndDate} />

      {listAchievements}

      <fieldset>
        <legend>Achievements</legend>
        <input type="text" id="experience-achievement" name="experience-achievement" onChange={(e) => handleChange('achievement', e)} value={inputAchievement} />
        <button type="button" onClick={addAchievement}>Add Achievement</button>
      </fieldset>
      
      <button type="submit">Add Education</button>
    </form>
  )
}

export default ExperienceForm;