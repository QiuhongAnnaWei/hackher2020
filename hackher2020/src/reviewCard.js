import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class ReviewCard extends React.Component {
    static propTypes = {
      memberInfo: PropTypes.array.isRequired,
    };
  
  render() {
    return (
        <>
        <div className="Card-Component">
            <h2>NAME: {this.props.memberInfo[0]}</h2>
            <br/>
            <h3>RELATIONSHIP: {this.props.memberInfo[1]}</h3>
        </div>
        <br/>
        </>
    );
  }
  
  }
  
export default ReviewCard;
  