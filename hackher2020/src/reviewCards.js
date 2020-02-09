import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewCard from './reviewCard.js';
import PropTypes from 'prop-types';

class ReviewCards extends React.Component {
    static propTypes = {
      members: PropTypes.array.isRequired,
      dataEmpty: PropTypes.bool.isRequired,
    };
  
  render() {
    var membersInfo = this.props.members.map(function(info, index){
        return <ReviewCard memberInfo={info}/>;
      })
    
    return  <ul>{ membersInfo }</ul>
  }
  
  }
  
export default ReviewCards;
  