import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import PersonTile from './PersonTile.js';
class MainContent extends Component {
    render() {
          
        let searchString = this.props.searchString;
        let title = this.props.title;
        let gender = this.props.gender;
        let minAge = this.props.minAge;
        let maxAge = this.props.maxAge;
        let persons = this.props.persons.map(person => {

            //  SearchString
            let name = person.name.first + " " + person.name.last;
            if (name.indexOf(searchString) === -1) {
                return null;
            }

            // Title
            if (title === "mr" && person.name.title !== "mr") return null;
            if (title === "ms" && person.name.title !== "ms") return null;
            if (title === "mrs" && person.name.title !== "mrs") return null;
            if (title === "miss" && person.name.title !== "miss") return null;
            if (title === "madam" && person.name.title !== "madam") return null;
            if (title === "mademoiselle" && person.name.title !== "mademoiselle") return null;
            if (title === "monsieur" && person.name.title !== "monsieur") return null;

            // Gender
            if (gender === "male" && person.gender !== "male") return null;
            if (gender === "female" && person.gender !== "female") return null;

            //Age
            if (Number(minAge) > person.dob.age ||
                (Number(maxAge) > 0 && Number(maxAge) < person.dob.age)) return null;
            return (
                <PersonTile
                    title={person.name.title}
                    first={person.name.first}
                    last={person.name.last}
                    gender={person.gender}
                    age={person.dob.age}
                    email={person.email}
                    phone={person.phone}
                    image={person.picture.large}
                    key={person.login.uuid}
                />
            )

        });
        return (
            <div id="MainContent">
                <h1 id="Tile">Find your other half!</h1>
                <SearchBar
                    persons={this.props.persons}
                    searchString={this.props.searchString}
                    title={this.props.title}
                    gender={this.props.gender}
                    minAge={this.props.minAge}
                    maxAge={this.props.maxAge}
                    handleSearchChange={this.props.handleSearchChange}
                    handleTitleChange={this.props.handleTitleChange}
                    handleGenderChange={this.props.handleGenderChange}
                    handleMinAgeChange={this.props.handleMinAgeChange}
                    handleMaxAgeChange={this.props.handleMaxAgeChange}
                    handleDefaultChange={this.props.handleDefaultChange}
                />
                <div className="Persons">
                    {persons}
                </div>
                <footer id="footer">
                    FindYourOtherHalf.com © 2018 Project: Wojciech Moczydlowski
          </footer>
            </div>
        );
    }
}
export default MainContent;