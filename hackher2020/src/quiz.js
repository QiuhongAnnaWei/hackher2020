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
    correctness: false,
  };

  setToCorrect = () => {
    this.setState({ correctness: true });
  };


render(){
  return (
    <h1 className="correctness"> {this.correctness} </h1>
    // if(remainingMember == []){

  );
}

}

export default Quiz;
