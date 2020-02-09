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

  addNewMember = (name, relation) => {
    const fullList = JSON.parse(JSON.stringify(this.state.memberData));
    fullList.push([name, relation]);
    this.setState({ listData: fullList });
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
