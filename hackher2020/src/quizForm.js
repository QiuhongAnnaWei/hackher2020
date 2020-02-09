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
        selectedRelation: "",
      };

      handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      };
    
      handleFormSubmit = formSubmitEvent => {
        //formSubmitEvent.preventDefault();
    
        //console.log("You have submitted:", this.state.selectedOption);
    
        if (this.state.selectedRelation == this.props.correctMember) {
            return(this.props.setToCorrect());
        }
      };

    render() {
        return (
          <div>
            <form onSubmit={this.props.handleFormSubmit}>
      
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Grandparent" checked={this.state.selectedOption === "Grandparent"}
                          onChange={this.props.handleOptionChange}
                  className="form-check-input" />
                Grandparent
              </label>
            </div>
      
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Parent" checked={this.state.selectedOption === "Parent"}
                          onChange={this.props.handleOptionChange}
                  className="form-check-input" />
                Parent
              </label>
            </div>
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Uncle" checked={this.state.selectedOption === "Uncle"}
                          onChange={this.props.handleOptionChange}
                  className="form-check-input" />
                Uncle
              </label>
            </div>
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Aunt" checked={this.state.selectedOption === "Aunt"}
                          onChange={this.props.handleOptionChange}
                  className="form-check-input" />
                Aunt
              </label>
            </div>
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Sibling" checked={this.state.selectedOption === "Sibling"}
                          onChange={this.props.handleOptionChange}
                  className="form-check-input" />
                Sibling
              </label>
            </div>
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Cousin" checked={this.state.selectedOption === "Cousin"}
                          onChange={this.props.handleOptionChange}
                  className="form-check-input" />
                Cousin
              </label>
            </div>
      
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Child" checked={this.state.selectedOption === "Child"}
                          onChange={this.props.handleOptionChange}
                  className="form-check-input"/>
                Child
              </label>
            </div>
      
            <div className="form-check">
              <label>
                <input type="radio" name="react-tips" value="Grandchild"
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
