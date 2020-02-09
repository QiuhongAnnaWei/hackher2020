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

  setToCorrect = () => {
    console.log("set to correct called: "+ this.state.remainingMember);
    var myRemaining = this.state.remainingMember;
    console.log("current "+ myRemaining);
    const current = myRemaining.pop();
    console.log(this.state.remainingMember);
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
    console.log("hello")

    if (this.state.remainingMember == []){
      return <h1>Congrats! You've identified all family members!</h1>
    } else {
      var currMember = this.state.remainingMember[this.state.remainingMember.length - 1]}
      console.log(currMember);
      if (currMember == null) {
        return (<p> You are done.</p>);
      } else{
        return (<p>Who is: {currMember[0]}?</p>);
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
      <h1>{this.generateQuestion()}</h1> 
      <QuizForm setToCorrect={this.setToCorrect} correctMember={this.state.remainingMember[this.state.remainingMember.length - 1]}/> </>))
      || <h1>Please add family members!</h1>}
      
      {(this.state.isCorrect && <h1> Good job!</h1>) ||<h1>Please try again!</h1>}
      
    </div>

  );

}
}

export default Quiz;
