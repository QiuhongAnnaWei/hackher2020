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
                <Form.Row>
                  <Form.Group as={Col} controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name"
                    onChange={e => {
                      this.setName(e);
                    }}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formRelation">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control as="select" onChange={e => {
                      this.setRelation(e);
                    }}>
                      <option>Choose your relationship with this member</option>
                      <option>Grandparent</option>
                      <option>Parent</option>
                      <option>Uncle</option>
                      <option>Aunt</option>
                      <option>Sibling</option>
                      <option>Cousin</option>
                      <option>Child</option>
                      <option>Grandchild</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formNotes">
                  <Form.Label>Supplemental Notes</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button
                  variant="secondary"
                  onClick={() => {
                    this.props.addNewMember([this.state.name, this.state.relation]);
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
