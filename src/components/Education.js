import React, { Component } from 'react';
import EducationForm from './EducationForm';

class Education extends Component {
  constructor(props) {
    super(props);

    /*
    school name, title of study, date of stud
    */
    this.state = {
      inputUniversity: '',
      inputDegree: '',
      inputStartDate: '',
      inputEndDate: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    /* if formAction is edit then we want to edit a form
    if formAction is add, then we want to add a education.
    */
   const formData = {
    "name": this.state.inputUniversity,
    "degree": this.state.inputDegree,
    "startDate": this.state.inputStartDate,
    "endDate": this.state.inputEndDate
   }

   this.props.addEducation(formData);

   this.setState({
    inputUniversity: '',
    inputDegree: '',
    inputStartDate: '',
    inputEndDate: ''
   });
  }
  
  render() {
    const { education } = this.props;
    const { inputUniversity, inputDegree, inputStartDate, inputEndDate } = this.state;

    const listOfEducation = Object.entries(education).map((item,idx) => {
      return (
        <li className='list-item-education' key={idx}>
          <h3>{item[1].name}</h3>
          <span>{item[1].degree}</span>
          <span>{item[1].startDate} - {item[1].EndDate}</span>
        </li>
      )
    });
    return (
      <div className="div-education">
        <ul id="list-education">{listOfEducation}</ul>
        <EducationForm inputUniversity={inputUniversity} inputDegree={inputDegree} inputStartDate={inputStartDate} inputEndDate={inputEndDate} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
};

export default Education;