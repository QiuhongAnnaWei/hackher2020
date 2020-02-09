import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class InputForm extends Component {
  static propTypes = {
    addNewBook: PropTypes.func.isRequired,
  };

  state = {
    bookInput: '',
  };

  setBookTitle = e => {
    this.setState({ bookInput: e.target.value });
  };

  render() {
    return (
      <div className="List-Component">
        <Container>
          <Col></Col>
          <Col>
            <Form className="Form-Inputs">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name of Book</Form.Label>
                <Form.Control
                  placeholder="Enter Book Here"
                  onChange={e => {
                    this.setBookTitle(e);
                  }}
                />
                <Form.Text className="text-muted">
                  Congrats on reading another!
                </Form.Text>
              </Form.Group>

              <Button
                variant="secondary"
                onClick={() => {
                  this.props.addNewBook(this.state.bookInput);
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Container>
      </div>
    );
  }
}

export default InputForm;
