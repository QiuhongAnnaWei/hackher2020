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
    correctness: '',
  };

render(){
  return (
    <h1 className="correctness"> {this.correctness} </h1>

  );
}

}

export default Quiz;
