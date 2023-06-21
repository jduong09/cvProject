import React, { Component } from 'react';
import EducationForm from './EducationForm';

class Education extends Component {
  constructor(props) {
    super(props);

    /*
    school name, title of study, date of stud
    */
    this.state = {
      formAction: 'ADD',
      editIdx: '',
      inputUniversity: '',
      inputDegree: '',
      inputStartDate: '',
      inputEndDate: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEditForm = this.setEditForm.bind(this);
  }

  // Event Listener for onClick method
  // Sends name of education be edited.
  setEditForm(idx, e) {
    e.preventDefault();
    const educationObj = this.props.education[idx + 1];

    this.setState({
      formAction: 'EDIT',
      editIdx: idx + 1,
      inputUniversity: educationObj.name,
      inputDegree: educationObj.degree,
      inputStartDate: educationObj.startDate,
      inputEndDate: educationObj.endDate || ''
    });
  }

  handleChange(input, e) {
    e.preventDefault();

    if (input === 'name') {
      this.setState({
        inputUniversity: e.currentTarget.value
      });
    } else if (input === 'degree') {
      this.setState({
        inputDegree: e.currentTarget.value
      });
    } else if (input === 'startDate') {
      this.setState({
        inputStartDate: e.currentTarget.value
      });
    } else {
      this.setState({
        inputEndDate: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addEducation, editEducation } = this.props;
    const { formAction, editIdx, inputUniversity, inputDegree, inputStartDate, inputEndDate } = this.state;
    /* if formAction is edit then we want to edit a form
    if formAction is add, then we want to add a education.
    */
   const formData = {
    "name": inputUniversity,
    "degree": inputDegree,
    "startDate": inputStartDate,
    "endDate": inputEndDate
   }

   if (formAction === 'ADD') {
    addEducation(formData);
   } else {
    formData['idx'] = editIdx;
    editEducation(formData);
   }

   this.setState({
    formAction: 'ADD',
    editIdx: '',
    inputUniversity: '',
    inputDegree: '',
    inputStartDate: '',
    inputEndDate: ''
   });
  }
  
  render() {
    const { education } = this.props;
    const { formAction, inputUniversity, inputDegree, inputStartDate, inputEndDate } = this.state;

    const listOfEducation = Object.entries(education).map((item,idx) => {
      return (
        <li className='list-item-education' key={idx}>
          <h3>{item[1].name}</h3>
          <span>{item[1].degree}</span>
          <span>{item[1].startDate} - {item[1].endDate}</span>
          <button type="button" onClick={(e) => this.setEditForm(idx, e)}>Edit</button>
        </li>
      )
    });
    return (
      <div className="div-education">
        <h2>Education</h2>
        <ul id="list-education">{listOfEducation}</ul>
        <EducationForm formAction={formAction} inputUniversity={inputUniversity} inputDegree={inputDegree} inputStartDate={inputStartDate} inputEndDate={inputEndDate} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
};

export default Education;