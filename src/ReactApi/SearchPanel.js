import React, { Component } from 'react';
import './Style.css';
class SearchPanel extends Component {

  handleSearchChange = (event) => {
    this.props.handleSearchChange(event.target.value)
  }

  handleTitleChange = (event) => {
    this.props.handleTitleChange(event.target.value)
  }

  handleGenderChange = (event) => {
    this.props.handleGenderChange(event.target.value)
  }

  handleMinAgeChange = (event) => {
    this.props.handleMinAgeChange(event.target.value)
  }

  handleMaxAgeChange = (event) => {
    this.props.handleMaxAgeChange(event.target.value)
  }

  handleDefaultChange = () => {
    this.props.handleDefaultChange()
  }

  render() {
    const activeClass = this.props.activeClass;
    return (

      <div className={activeClass}>
        <form>
          <div id="SearchPanelFlexContainer">
            <div className="rowSearchPanel100">
              <input
                id="searchInput"
                type="text"
                placeholder="Search"
                value={this.props.searchString}
                onChange={this.handleSearchChange} />
            </div>
            <div className="rowSearchPanel50 rowSearchPanelLeft50">
              <label className="searchPanelLabel">Title:</label>
            </div>
            <div className="rowSearchPanel50">
              <select onChange={this.handleTitleChange} value={this.props.title} className="selectInput">
                <option value="all">all</option>
                <option value="mr">mr</option>
                <option value="ms">ms</option>
                <option value="mrs">mrs</option>
                <option value="miss">miss</option>
                <option value="madam">madam</option>
                <option value="mademoiselle">mademoiselle</option>
                <option value="monsieur">monsieur</option>
              </select>
            </div>
            <div className="rowSearchPanel50 rowSearchPanelLeft50">
              <label className="searchPanelLabel">Gender:</label>
            </div>
            <div className="rowSearchPanel50">
              <select onChange={this.handleGenderChange} value={this.props.gender} className="selectInput">
                <option value="all">all</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="rowSearchPanel50 rowSearchPanelLeft50">
              <label className="searchPanelLabel">Age:</label>
            </div>
            <div className="rowSearchPanel50 ageInput">
              <input type="text" placeholder="od" onChange={this.handleMinAgeChange} value={this.props.minAge} className="ageInput"/>
              <input type="text" placeholder="do" onChange={this.handleMaxAgeChange} value={this.props.maxAge} className="ageInput"/>
            </div>
            <div className="rowSearchPanel100">
              <input type="button" id="resetButton" value="Default" onClick={this.handleDefaultChange} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchPanel;