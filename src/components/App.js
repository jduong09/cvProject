import React, { Component } from 'react';
import '../styles/App.css';
import Education from './Education';

/*
A section to add general information like name, email, phone number.
A section to add your educational experience (school name, title of study, date of study)
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
*/

/*
Be sure to include an edit and submit button for each section or for the whole CV,
your preference. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
*/

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
      experience: {},
      skill: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addEducation = this.addEducation.bind(this);
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
      phoneNumber: inputPhoneNumber
    });
  }

  toggleEdit(e) {
    e.preventDefault();
    this.setState({
      editMode: !this.state.editMode
    });
  }

  addEducation(formData) {
    const newIndex = Object.keys(this.state.education).length + 1;
    const newObj = this.state.education;
    newObj[newIndex] = formData;

    console.log(newObj);
    this.setState({
      education: newObj
    });
  }

  render() {
    const { name, email, phoneNumber, inputName, inputEmail, inputPhoneNumber, editMode, education } = this.state;
    return (
      <div id="app">
        <header>
          <div>
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
          <form id="form-gen-info" className={editMode ? "" : "hide"} onSubmit={this.handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type="text" id="name" name="name" placeholder="Justin Duong" onChange={(e) => this.handleChange('name', e)} value={inputName} />
            <label htmlFor='email'>Email:</label>
            <input type="email" id="email" name="email" placeholder="sld@gmail.com" onChange={(e) => this.handleChange('email', e)} value={inputEmail} />
            <label htmlFor='phoneNumber'>Phone Number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="123-232-1232" onChange={(e) => this.handleChange('phone-number', e)} value={inputPhoneNumber} />
            <button type="submit" id="btn-gen-info">Submit</button>
          </form>
          <Education education={education} addEducation={this.addEducation} />
        </main>
      </div>
    );
  }
}

export default App;
