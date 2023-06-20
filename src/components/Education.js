import React, { Component } from 'react';
import EducationForm from './EducationForm';

class Education extends Component {
  constructor(props) {
    super(props);

    /*
    school name, title of study, date of stud
    */
    this.state = {
      name: '',
      degree: '',
      startDate: '',
      endDate: '',
      inputUniversity: '',
      inputDegree: '',
      inputStartDate: '',
      inputEndDate: ''
    }

    this.handleChange = this.handleChange.bind(this);
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
        <EducationForm inputUniversity={inputUniversity} inputDegree={inputDegree} inputStartDate={inputStartDate} inputEndDate={inputEndDate} handleChange={this.handleChange} />
      </div>
    );
  }
};

export default Education;