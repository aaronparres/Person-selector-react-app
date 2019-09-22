import React, { Component } from 'react'
import './Person.css';


export default class Person extends Component {

    render() {
        let { name, lastname, selected, onClick } = this.props;
        
        let classSelected;
        
        if (selected) {
            classSelected = "selectedUser";
        }else {
            classSelected = "noneSelected";
        }
       
        return (
            <div className={classSelected} onClick={onClick}>
                <p>{name} {lastname}</p>
            </div>
        )
    }
}
