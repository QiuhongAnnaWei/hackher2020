import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NewMember from './newMember';

class App extends PureComponent {
  state = {
    isAddingMembers: true,
    memberData: [],
  };

  addNewMember = (member) => {
    const fullList = JSON.parse(JSON.stringify(this.state.memberData));
    fullList.push(member);
    this.setState({ listData: fullList });
    console.log(this.memberData);
  };

  render() {
    return (
      <>
        <NewMember/>
      </>
    );
  }
}

export default App;
