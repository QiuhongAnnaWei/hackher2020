import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class Quiz extends React.Component {
  static propTypes = {
    memberList: PropTypes.array.isRequired,
  };

  state = {
    remainingMember: [],
    isCorrect: false,
    score: 0,
  };



  setToCorrect = () => {
    this.setState({ isCorrect: true });
  };

  addToScore = () => {
    this.setState(score => {const newScore = this.state.score + 1;
    return{newScore}});
  };





  handleAnswerClick = (e) => {

    if (isCorrect && e.target.nodeName === 'LI') {
      // Prevent other answers from being clicked after correct answer is clicked
      e.target.parentNode.style.pointerEvents = 'none';

      e.target.classList.add('right');

      userAnswers[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });

      setTimeout(() => this.showModal(tries), 750);

      setTimeout(this.nextStep, 2750);
    }

    else if (e.target.nodeName === 'LI') {
      e.target.style.pointerEvents = 'none';
      e.target.classList.add('wrong');

      userAnswers[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: userAnswers
      });
    }
  };

render(){
  return (
    <div>
    {(this.state.isCorrect && <h1> You are correct!</h1>) || <h1> Please try again! </h1>}
    </div>
    
  //   if (remainingMember == []){


  //   <p></p>

  );

}

}

export default Quiz;
