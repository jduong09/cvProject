import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formHidden: true,
      formAction: 'ADD',
      editIdx: '',
      inputName: '',
      inputTitle: '',
      inputLocation: '',
      inputStartDate: '',
      inputEndDate: '',
      inputAchievement: '',
      arrAchievements: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addAchievement = this.addAchievement.bind(this);
    this.setEditForm = this.setEditForm.bind(this);
    this.handleAchievement = this.handleAchievement.bind(this);
    this.setAddForm = this.setAddForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleChange(inputName, e) {
    e.preventDefault();

    if (inputName === 'name') {
      this.setState({
        inputName: e.currentTarget.value
      });
    } else if (inputName === 'title') {
      this.setState({
        inputTitle: e.currentTarget.value
      });
    } else if (inputName === 'location') {
      this.setState({
        inputLocation: e.currentTarget.value
      });
    } else if (inputName === 'startDate') {
      this.setState({
        inputStartDate: e.currentTarget.value
      });
    } else if (inputName === 'endDate') {
      this.setState({
        inputEndDate: e.currentTarget.value
      });
    } else if (inputName === 'achievement') {
      this.setState({
        inputAchievement: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { addNewExperience, editExperience } = this.props;
    const { formAction, editIdx, inputName, inputTitle, inputLocation, inputStartDate, inputEndDate, arrAchievements } = this.state;

    const formData = {
      name: inputName,
      title: inputTitle,
      location: inputLocation,
      startDate: inputStartDate,
      endDate: inputEndDate,
      achievements: arrAchievements
    }

    if (formAction === 'ADD') {
      addNewExperience(formData);
    } else {
      formData["idx"] = editIdx;
      editExperience(formData);
    }

    this.setState({
      formHidden: true,
      formAction: 'ADD',
      inputName: '',
      inputTitle: '',
      inputLocation: '',
      inputStartDate: '',
      inputEndDate: '',
      inputAchievement: '',
      arrAchievements: []
    });
  }

  addAchievement(e) {
    e.preventDefault();
    const { arrAchievements, inputAchievement } = this.state;

    const newArr = arrAchievements;
    newArr.push(inputAchievement);

    this.setState({
      arrAchievements: newArr,
      inputAchievement: ''
    });
  }

  setEditForm(idx, e) {
    e.preventDefault();
    const experienceObj = this.props.experience[idx + 1];
    this.setState({
      formHidden: false,
      formAction: 'EDIT',
      editIdx: idx + 1,
      inputName: experienceObj.name,
      inputTitle: experienceObj.title,
      inputLocation: experienceObj.location,
      inputStartDate: experienceObj.startDate,
      inputEndDate: experienceObj.endDate || '',
      arrAchievements: experienceObj.achievements
    });
  }

  handleAchievement(idx, e) {
    e.preventDefault();
    const newAchievements = this.state.arrAchievements;
    newAchievements.splice(idx, 1, e.currentTarget.value);

    this.setState({
      arrAchievements: newAchievements
    });
  }

  setAddForm(e) {
    e.preventDefault();
    this.setState({
      formHidden: false,
      formAction: 'ADD',
      inputName: '',
      inputTitle: '',
      inputLocation: '',
      inputStartDate: '',
      inputEndDate: '',
      arrAchievements: []
    });
  }

  hideForm(e) {
    e.preventDefault();
    this.setState({
      formHidden: true
    });
  }

  render() {
    const { formHidden, formAction, inputName, inputTitle, inputDegree, inputLocation, inputStartDate, inputEndDate, inputAchievement, arrAchievements } = this.state;
    const listOfExperience = Object.entries(this.props.experience).map((item, idx) => {
      const listOfAchievements = item[1].achievements.map((achievement, idx) => {
        return <li key={idx}>{achievement}</li>
      });

      return (
        <li className='list-item-experience' key={idx}>
          <h3>{item[1].name}</h3>
          <span>{item[1].title}</span>
          <span>{item[1].location}</span>
          <span>{item[1].startDate} - {item[1].endDate}</span>
          <ul>{listOfAchievements}</ul>
          <button className="btn-edit-experience" type="button" onClick={(e) => this.setEditForm(idx, e)}>Edit</button>
        </li>
      )
    });

    return (
      <div id="div-experience">
        <h2>Experience</h2>
        <ul id="list-experience">
          {listOfExperience}
        </ul>
        <button id="btn-add-experience" className="btn-add" onClick={this.setAddForm}>Add Experience</button>
        <ExperienceForm
          formHidden={formHidden}
          formAction={formAction}
          inputName={inputName}
          inputTitle={inputTitle}
          inputDegree={inputDegree}
          inputLocation={inputLocation}
          inputStartDate={inputStartDate}
          inputEndDate={inputEndDate}
          achievements={arrAchievements}
          inputAchievement={inputAchievement}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          addAchievement={this.addAchievement}
          handleAchievement={this.handleAchievement}
          hideForm={this.hideForm}
        />
      </div>
    )
  }
}

export default Experience;