import React, { Component } from 'react';
import SearchPanel from './SearchPanel.js';
class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      active: false
    };
  }
  toggle = () => {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }
  render() {
    const activeClass = this.state.active ? "active" : "inactive";
    return (
            <div>
              <div className="searchButton" onClick={this.toggle}>Search</div>
              <SearchPanel
                activeClass = {activeClass}
                persons={this.props.persons}
                searchString= {this.props.searchString}
                title= {this.props.title}
                gender= {this.props.gender}
                minAge= {this.props.minAge}
                maxAge= {this.props.maxAge}
                handleSearchChange = {this.props.handleSearchChange}      
                handleTitleChange = {this.props.handleTitleChange}        
                handleGenderChange = {this.props.handleGenderChange}        
                handleMinAgeChange = {this.props.handleMinAgeChange}       
                handleMaxAgeChange = {this.props.handleMaxAgeChange}
                handleDefaultChange = {this.props.handleDefaultChange}
              />
            
            </div>
    );
  }
}

  export default SearchBar;