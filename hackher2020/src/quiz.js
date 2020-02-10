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
    if (this.props.memberList !== prevProps.memberList) {
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
    console.log("set to correct called: "+ this.state.remainingMember);
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
      var currMember = this.state.remainingMember[this.state.remainingMember.length - 1]}
      console.log(currMember);
      if (currMember == null) {
        return (<p> You are done.</p>);
      } else{
        return (<p>Who is {currMember[0]}?</p>);
      }
    }

render() {
  console.log(this.state.hasMembers)
  console.log("member list: " + this.state.remainingMember)
  console.log(this.generateQuestion())
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
