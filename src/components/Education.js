import React, { Component } from 'react';
import EducationForm from './EducationForm';

class Education extends Component {
  constructor(props) {
    super(props);

    /*
    school name, title of study, date of stud
    */
    this.state = {
      formHidden: true,
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
    this.setAddForm = this.setAddForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  // Event Listener for onClick method
  // Sends name of education be edited.
  setEditForm(idx, e) {
    e.preventDefault();
    const educationObj = this.props.education[idx + 1];

    this.setState({
      formHidden: false,
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

  setAddForm(e) {
    e.preventDefault();
    this.setState({
      formHidden: false,
      formAction: 'ADD',
      inputUniversity: '',
      inputDegree: '',
      inputStartDate: '',
      inputEndDate: ''
    });
  }

  hideForm(e) {
    e.preventDefault();
    this.setState({
      formHidden: true
    });
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
    formHidden: true,
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
    const { formHidden, formAction, inputUniversity, inputDegree, inputStartDate, inputEndDate } = this.state;

    const listOfEducation = Object.entries(education).map((item,idx) => {
      return (
        <li className='list-item-education' key={idx}>
          <div>
            <h2>{item[1].name}</h2>
            <span>{item[1].startDate} - {item[1].endDate}</span>
          </div>
          <span>{item[1].degree}</span>
          <button type="button" onClick={(e) => this.setEditForm(idx, e)}>Edit</button>
        </li>
      )
    });
    return (
      <div className="div-education">
        <h2>Education</h2>
        <ul id="list-education">{listOfEducation}</ul>
        <button id="btn-add-education" className="btn-add" onClick={this.setAddForm}>Add Education</button>
        <EducationForm formHidden={formHidden} formAction={formAction} inputUniversity={inputUniversity} inputDegree={inputDegree} inputStartDate={inputStartDate} inputEndDate={inputEndDate} handleChange={this.handleChange} handleSubmit={this.handleSubmit} hideForm={this.hideForm} />
      </div>
    );
  }
};

export default Education;