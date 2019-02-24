import React, { Component } from 'react';
import MainContent from './MainContent.js';
import './Style.css';
class MainApiPage extends Component {

  constructor() {
    super();
    this.state = {
      persons: [],
      pictures: [],
      searchString:"",
      title: "all",
      gender: "all",
      minAge: "",
      maxAge: "",
    }
  }

  handleSearchChange = (searchString) => {
    this.setState({
      searchString: searchString
    })
  }

  handleTitleChange = (title) => {
    
    this.setState({
      title: title
    })
  }

  handleGenderChange = (gender) => {
    this.setState({
      gender: gender
    })
  }

  handleMinAgeChange = (minAge) => {
    this.setState({
      minAge: minAge
    })
  }

  handleMaxAgeChange = (maxAge) => {
    this.setState({
      maxAge: maxAge
    })
  }

  handleDefaultChange = () => {
    this.setState({
      searchString:"",
      title: "all",
      gender: "all",
      minAge: "",
      maxAge: "",
    })
  }

  componentDidMount() {
    // For MainContent
    fetch('https://randomuser.me/api/?results=100')
      .then(results => {
        return results.json();
      }).then(data => {

        let persons = data.results.map(pic => {
          let person = JSON.parse(JSON.stringify(pic));
          return person;
        });
        this.setState({
          persons: persons,
        });
      })
  }

  render() {
    return (
      <div>
        <MainContent
          persons={this.state.persons}
          searchString={this.state.searchString}
          title={this.state.title}
          gender={this.state.gender}
          minAge={this.state.minAge}
          maxAge={this.state.maxAge}
          handleSearchChange={this.handleSearchChange}
          handleTitleChange={this.handleTitleChange}
          handleGenderChange={this.handleGenderChange}
          handleMinAgeChange={this.handleMinAgeChange}
          handleMaxAgeChange={this.handleMaxAgeChange}
          handleDefaultChange={this.handleDefaultChange}
        />
      </div>
    );
  }
}
export default MainApiPage;