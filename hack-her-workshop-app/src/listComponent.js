import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Button, Col, Container } from 'react-bootstrap';

class ListComponent extends Component {
  static propTypes = {
    listData: PropTypes.array.isRequired,
    removeBook: PropTypes.func.isRequired,
  };

  state = {};

  generateListBody = () => {
    return this.props.listData.map(book => {
      return (
        <li key={book}>
          {book}
          <Button
            variant={'link'}
            onClick={() => {
              this.props.removeBook(book);
            }}
          >
            X
          </Button>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="List-Component">
        <Container>
          <Col md={4}></Col>
          <Col>
            <h3>Books I've Read</h3>
            <ol className="bookList">{this.generateListBody()}</ol>
          </Col>
          <Col md={4}></Col>
        </Container>
      </div>
    );
  }
}

export default ListComponent;
