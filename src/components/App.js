import React, { Component } from 'react';
import '../styles/App.css';
import Education from './Education';
import Experience from './Experience';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      phoneNumber: '123-123-1232',
      inputName: '',
      inputEmail: '',
      inputPhoneNumber: '',
      editMode: false,
      education: {
        "1": {
          "name": "Blue State University",
          "degree": "Statistics",
          "startDate": "2015-09-04",
          "endDate": "2019-05-12"
        },
        "2": {
          "name": "Targon University",
          "degree": "Biology",
          "startDate": "2019-09-09",
          "endDate": null
        }
      },
      experience: {
        "1": {
          "name": "Google",
          "title": "FrontEnd Developer",
          "location": "Los Angeles, CA",
          "startDate": "2019-09-09",
          "endDate": null,
          "achievements": ['Run', 'walk']
        }
      },
      skill: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.hideEdit = this.hideEdit.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.addNewExperience = this.addNewExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
  }

  // Need to add verification
  handleChange(input, e) {
    e.preventDefault();
    if (input === 'name') {
      this.setState({
        inputName: e.currentTarget.value,
      });
    } else if  (input === 'email') {
      this.setState({
        inputEmail: e.currentTarget.value,
      });
    } else {
      this.setState({
        inputPhoneNumber: e.currentTarget.value,
      });
    }
  }

  // Need to add verification
  handleSubmit(e) {
    e.preventDefault();
    const { inputName, inputEmail, inputPhoneNumber } = this.state;
    this.setState({
      name: inputName,
      email: inputEmail,
      phoneNumber: inputPhoneNumber,
      inputName: '',
      inputEmail: '',
      inputPhoneNumber: ''
    });
  }

  toggleEdit(e) {
    e.preventDefault();
    this.setState({
      editMode: true
    });
  }

  hideEdit(e) {
    e.preventDefault();
    this.setState({
      editMode: false
    });
  }

  addEducation(formData) {
    const newIndex = Object.keys(this.state.education).length + 1;
    const newObj = this.state.education;
    newObj[newIndex] = formData;

    this.setState({
      education: newObj
    });
  }

  editEducation(formData) {
    const copyEducationObj = this.state.education;
    copyEducationObj[formData.idx] = {
      "name": formData.name,
      "degree": formData.degree,
      "startDate": formData.startDate,
      "endDate": formData.endDate
    }

    this.setState({
      education: copyEducationObj
    });
  }

  addNewExperience(formData) {
    const lengthExperienceObj = Object.keys(this.state.experience).length;
    const newExperienceObj = this.state.experience;
    newExperienceObj[lengthExperienceObj + 1] = formData;

    this.setState({
      experience: newExperienceObj
    });
  }

  editExperience(formData) {
    const copyExperienceObj = this.state.experience;
    copyExperienceObj[formData.idx] = {
      "name": formData.name,
      "title": formData.title,
      "location": formData.location,
      "startDate": formData.startDate,
      "endDate": formData.endDate,
      "achievements": formData.achievements
    }

    this.setState({
      experience: copyExperienceObj
    });
  }
 
  render() {
    const { name, email, phoneNumber, inputName, inputEmail, inputPhoneNumber, editMode, education, experience } = this.state;
    return (
      <div id="app">
        <header>
          <div className='div-gen-info'>
            <h1 id="resume-name">{name}</h1>
            <div>
              <ul className='list-gen-info'>
                <li id="resume-email">{email}</li>
                <li id="resume-phone-number">{phoneNumber}</li>
              </ul>
            </div>
          </div>
          <button id="btn-edit-resume" onClick={this.toggleEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
          </button>
        </header>
        <main>
          <div id="div-form-gen" className={`div-form ${editMode ? "" : "hide"}`}>
            <div className="form-header">
              <h2>Edit Info</h2>
              <button id="btn-close-gen" className="btn-close" onClick={this.hideEdit}>X</button>
            </div>
            <form id="form-gen-info" onSubmit={this.handleSubmit}>
              <label htmlFor='name'>Name:</label>
              <input type="text" id="name" name="name" placeholder="Justin Duong" onChange={(e) => this.handleChange('name', e)} value={inputName} />
              <label htmlFor='email'>Email:</label>
              <input type="email" id="email" name="email" placeholder="sld@gmail.com" onChange={(e) => this.handleChange('email', e)} value={inputEmail} />
              <label htmlFor='phoneNumber'>Phone Number:</label>
              <input type="text" id="phoneNumber" name="phoneNumber" placeholder="123-232-1232" onChange={(e) => this.handleChange('phone-number', e)} value={inputPhoneNumber} />
              <button type="submit" id="btn-gen-info">Submit</button>
            </form>
          </div>
          <Education education={education} addEducation={this.addEducation} editEducation={this.editEducation} />
          <Experience experience={experience} addNewExperience={this.addNewExperience} editExperience={this.editExperience} />
        </main>
      </div>
    );
  }
}

export default App;
