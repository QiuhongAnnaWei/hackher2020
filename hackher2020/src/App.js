import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import NewMember from './newMember';
import Quiz from './quiz';
import {Tab, Tabs, Row, Col, Nav} from 'react-bootstrap';

class App extends PureComponent {
  state = {
    isAddingMembers: true,
    memberData: [["Family Member", "Family"]],
  };

  switchToMemberView = () => {
    this.setState({ isAddingMembers: true });
  };

  switchToQuizView = () => {
    this.setState({ isAddingMembers: false });
  };

  addNewMember = (member) => {
    console.log("before:" + this.memberData);
    // const fullList = JSON.parse(JSON.stringify(this.state.memberData));
    // fullList.concat(member);
    // var fullList = this.memberData.concat(member);
    // this.setState(state => {
    //   const memberData = state.memberData.concat(member);
    //   return {
    //     isAddingMembers: true,
    //     memberData,
    //   };
    // });



    // fullList });
    console.log(this.memberData);
  };

  render() {
    return (
     <>
      <h1 className="App-header"> Alzeihmer's </h1>
      <br/>


      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="newmember"> Add New Member</Nav.Link>
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
           <Quiz memberList={this.memberData}/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
      </>
      // <div>
      // {(this.state.isAddingMembers && <NewMember addNewMember={this.addNewMember}/>)
      // || <Quiz memberList={this.memberData}/>}
      // </div>
    );
  }
}
//.sort(() => Math.random() - 0.5
export default App;
