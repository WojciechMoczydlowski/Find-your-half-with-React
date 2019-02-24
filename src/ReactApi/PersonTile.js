import React, { Component } from 'react';

class PersonTile extends Component {

    render() {
        return (
            <div className="flexContainer">
                <div className="col25">
                   <img className="personImage" alt="person" src={this.props.image}/>
                </div>
                <div className="col75">
                    <div className = "row100">
                        <div className = "row40">
                            <p className="description">Full Name:</p> 
                        </div>
                        <div className = "row60">
                            <p className="string">{this.props.title} {this.props.first} {this.props.last}</p>
                        </div>
                    </div>
                    <div className = "row100">
                        <div className = "row40">
                         <p className="description">Gender:</p> 
                        </div>
                        <div className = "row60">
                        <p className="string">{this.props.gender}</p>
                        </div>
                    </div>
                    <div className = "row100">
                        <div className = "row40">
                        <p className="description">Age:</p> 
                        </div>
                        <div className = "row60">
                        <p className="string">{this.props.age}</p>
                        </div>
                    </div>
                    <div className = "row100">
                        <div className = "row40">
                        <p className="description">Email:</p> 
                        </div>
                        <div className = "row60">
                        <p className="string">{this.props.email}</p>
                        </div>
                    </div>
                    <div className = "row100">
                        <div className = "row40">
                        <p className="description">Phone:</p> 
                        </div>
                        <div className = "row60">
                        <p className="string">{this.props.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PersonTile;