import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class QuizForm extends React.Component {
    static propTypes = {
        setToCorrect: PropTypes.func.isRequired,
        correctMember: PropTypes.string.isRequired,
      };

      state = {
        selectedRelation: "Grandparent",
      };

      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
          this.setState({ selectedRelation: "Grandparent" });
        }
      }

      handleOptionChange = changeEvent => {
        this.setState({
          selectedRelation: changeEvent.target.value
        });
      };
    
      handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log(this.props.correctMember);
        console.log(this.state.selectedRelation === this.props.correctMember[1]);
    
        if (this.state.selectedRelation === this.props.correctMember[1]) {
            this.props.setToCorrect();
        }
      };

    render() {
        return (
          <div>
            <form onSubmit={this.handleFormSubmit}>
      
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Grandparent" checked={this.state.selectedRelation === "Grandparent"}
                          onChange={this.handleOptionChange}
                  className="form-check-input" />
                Grandparent
              </label>
            </div>
      
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Parent" checked={this.state.selectedRelation === "Parent"}
                          onChange={this.handleOptionChange}
                  className="form-check-input" />
                Parent
              </label>
            </div>
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Uncle" checked={this.state.selectedRelation === "Uncle"}
                          onChange={this.handleOptionChange}
                  className="form-check-input" />
                Uncle
              </label>
            </div>
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Aunt" checked={this.state.selectedRelation === "Aunt"}
                          onChange={this.handleOptionChange}
                  className="form-check-input" />
                Aunt
              </label>
            </div>
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Sibling" checked={this.state.selectedRelation === "Sibling"}
                          onChange={this.handleOptionChange}
                  className="form-check-input" />
                Sibling
              </label>
            </div>
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Cousin" checked={this.state.selectedRelation === "Cousin"}
                          onChange={this.handleOptionChange}
                  className="form-check-input" />
                Cousin
              </label>
            </div>
      
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Child" checked={this.state.selectedRelation === "Child"}
                          onChange={this.handleOptionChange}
                  className="form-check-input"/>
                Child
              </label>
            </div>
      
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Grandchild" checked={this.state.selectedRelation === "Grandchild"}
                          onChange={this.handleOptionChange}
                  className="form-check-input"/>
                Grandchild
              </label>
            </div>
      
            <div className="form-group">
              <button className="btn btn-primary mt-2" type="submit">
                Check my answer!
              </button>
            </div>
      
          </form>
          </div>
      
        );

        }   
}
export default QuizForm;
