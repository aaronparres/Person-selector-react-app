import React, { Component } from 'react'
import Axios from 'axios';
import { cloneDeep } from 'lodash';
import Person from './Person';
import './Person.css';

export default class PersonSelector extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true,
      selected: false
    }
  }

  componentDidMount = () => {
    Axios.get("http://localhost:4000/users")
    // json-server users.json --watch --port 4000 --delay 600
      .then(response => {
        this.setState({
          users: response.data,
          loading: false
        })
      });
  }

  onClick = (index) => {
    console.log("click");
    this.setState(prevState => {
      let newState = cloneDeep(prevState);
      newState.users[index].selected = !newState.users[index].selected;
      return newState;
    })
  }

  selectedPeopleStr = () => {
    let { users } = this.state;
    const names = users.filter(p => p.selected).map(p => p.name + " " + p.lastname);
    console.log(names.length);
    switch (names.length) {
      case 0:
        return "";
      case 1: return names[0];
      case 2: return names[0] + " and " + names[1];
      default:
        return names.slice(0, names.length - 1).join(', ') + " and " + names.slice(-1)[0];
    }
  }

  render() {
    let loadingText;
    if (this.state.loading) {
      loadingText = <p>Loading...</p>;
    }

    let { users } = this.state;

    return (
      <div className="container" >
        <div className="list">
          {loadingText}
          {users.map((user, index) =>
            <Person {...user} key={index} onClick={() => this.onClick(index)} />
          )}
        </div>
        <div className="listNames">
          <h4>Selected</h4>
          <p>{this.selectedPeopleStr()}</p>
        </div>
      </div>
    )
  }
}
