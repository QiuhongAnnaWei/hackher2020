import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NewMember from './newMember';
import Quiz from './quiz';
import ReviewCards from './reviewCards';
import {Tab, Tabs, Row, Col, Nav} from 'react-bootstrap';

class App extends PureComponent {
  state = {
    memberData: [],
    hasMembers: false,
  };

  addNewMember = (member) => {
    console.log("before:" + this.state.memberData);
    // const fullList = JSON.parse(JSON.stringify(this.state.memberData));
    // fullList.concat(member);
    // var fullList = this.state.memberData.concat(member);
    this.setState(state => {
      const memberData = state.memberData.concat([member]);
      return {
        memberData,
        hasMembers: true,
      };
    });



    // fullList });
    console.log(this.state.memberData);
  };

  render() {
    console.log(this.state.hasMembers)
    return (
     <>
      <h1 className="App-header"> Alzheimer's </h1>

      <div className="body">
      <Tab.Container className="tabs" defaultActiveKey="newmember">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="newmember"> Add New Member</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reviewcards">Review Members</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="quiz">Quiz</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="newmember">
          <NewMember addNewMember={this.addNewMember}/>
        </Tab.Pane>
        <Tab.Pane eventKey="quiz">
        {(this.state.hasMembers && <Quiz memberList={this.state.memberData.sort(() => Math.random() - 0.5)} 
                  hasMembers={this.state.hasMembers}/>) || <h1> Please enter data</h1>}
        </Tab.Pane>
        <Tab.Pane eventKey="reviewcards">
          {(this.state.hasMembers && <ReviewCards members={this.state.memberData} 
                        hasMembers={this.state.hasMembers}/>) ||
                        <h1> Please enter data</h1>}
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
</>
    );
  }
}

export default App;
