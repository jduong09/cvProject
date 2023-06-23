import React from 'react';

const ExperienceForm = ({ formAction, inputName, inputTitle, inputLocation, inputStartDate, inputEndDate, achievements, inputAchievement, handleChange, handleSubmit, addAchievement, handleAchievement }) => {
  let listAchievements;
  if (formAction === 'EDIT') {
    listAchievements = achievements.map((achievement, idx) => {
      return (
        <label htmlFor={`input-achievement-${idx}`} key={idx}>
          Achievement:
          <input className="input-achievement-edit" id={`input-achievement-${idx}`} onChange={(e) => handleAchievement(idx, e)} value={achievement}/>
        </label>
      )
    });
  } else {
    listAchievements = achievements.map((achievement, idx) => {
      return (
        <li key={idx}>{achievement}</li>
      )
    });
  }
  return (
    <form id="form-experience" onSubmit={handleSubmit}>
      <h3>{formAction === 'EDIT' ? 'Edit Experience' : 'Add New Experience'}</h3>
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

      <fieldset className={formAction === 'EDIT' ? 'hide' : ''}>
        <legend>Achievements</legend>
        <input type="text" id="experience-achievement" name="experience-achievement" onChange={(e) => handleChange('achievement', e)} value={inputAchievement} />
        <button type="button" onClick={addAchievement}>Add Achievement</button>
      </fieldset>
      
      <button type="submit">{formAction === 'EDIT' ? 'Edit' : 'Add'}</button>
    </form>
  )
}

export default ExperienceForm;