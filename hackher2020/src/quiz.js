import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import QuizForm from './quizForm.js'

class Quiz extends React.Component {
  static propTypes = {
    hasMembers: PropTypes.bool.isRequired,
    memberList: PropTypes.array.isRequired,
  };

  state = {
    remainingMember: this.props.memberList,
    isCorrect: false,
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
      this.setState({ remainingMember: this.props.memberList});
    }
  }
  copyML = () => {
    console.log("copyML: " + this.state.remainingMember);
    const ic = this.state.isCorrect;
    this.setState(state => {
      return {
        remainingMember: this.props.memberList,
        isCorrect: ic,
      };
    });
  }

  setToCorrect = () => {
    console.log("setToCorrect: " + this.state.remainingMember);
    var myRemaining = this.state.remainingMember;
    const current = myRemaining.pop();
    this.generateQuestion();
    this.setState(state => {
      return {
        remainingMember: myRemaining,
        isCorrect: true,
      };
    });
  };

  //print correct?

  generateQuestion = () => {
    console.log("generateQuestion: " + this.props.memberList + "/" + this.state.remainingMember);

    if (this.state.remainingMember.length == 0){
      return <h1>Congrats! You've identified all family members!</h1>
    } else {
      var currMember = this.state.remainingMember.pop();
      this.setState(remainingMember => {this.state.remainingMember.push(currMember)});
    console.log("generateQuestion2: " + currMember + "/" + this.state.remainingMember)}
      return (<p>"Who is: " {currMember[0]} "?"</p>);
    }

render() {
  return (
    <div>
      {(true && 
      (<> 
      {/* <p>copyML()</p> */}
      <h1>{this.generateQuestion()}</h1> 
      <QuizForm setToCorrect={this.setToCorrect} correctMember={this.state.remainingMember[this.state.remainingMember.length - 1]}/> </>))
      || <h1>Please add family members!</h1>}
      
      {(this.state.isCorrect && <h1> Good job!</h1>)}
      
    </div>

  );

}
}

export default Quiz;
