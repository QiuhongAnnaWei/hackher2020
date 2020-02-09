import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewMember extends React.Component {
      static propTypes = {
        addNewMember: PropTypes.func.isRequired,
      };

      state = {
        name: '',
        relation: '',
      };

      setName = e => {
        this.setState({ name: e.target.value });
      };

      setRelation = e => {
        this.setState({ relation: e.target.value });
      };

      render() {
        return (
          <div className="List-Component">
            <Container>
              <Col></Col>
              <Col>
                <Form className="Form-Inputs">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name of Relation</Form.Label>
                    <Form.Control
                      onChange={e => {
                        this.setName(e);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control
                      onChange={e => {
                        this.setRelation(e);
                      }}
                    />
                  </Form.Group>

                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.props.addNewMember(this.state.name, this.state.relation);
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
export default NewMember;
