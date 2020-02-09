import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListComponent from './listComponent';
import { Button } from 'react-bootstrap';
import InputForm from './inputForm';

class App extends PureComponent {
  state = {
    listData: ['To Kill A Mockingbird', 'Sabriel', 'Inkheart'],
    isListView: true,
  };

  switchToListView = () => {
    this.setState({ isListView: true });
  };

  switchToFormView = () => {
    this.setState({ isListView: false });
  };

  addNewBook = bookName => {
    const fullList = JSON.parse(JSON.stringify(this.state.listData));
    fullList.push(bookName);
    this.setState({ listData: fullList, isListView: true });
  };

  removeBook = bookName => {
    const fullList = JSON.parse(JSON.stringify(this.state.listData));
    const filteredList = fullList.filter(book => {
      return book !== bookName;
    });
    this.setState({ listData: filteredList });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Your First React App: A List Builder</h2>
          <Button variant="info" onClick={this.switchToListView}>
            View List
          </Button>
          <br />
          <Button variant="info" onClick={this.switchToFormView}>
            Add List Item
          </Button>
        </header>
        <div>
          {(this.state.isListView && (
            <ListComponent
              listData={this.state.listData}
              removeBook={this.removeBook}
            />
          )) || <InputForm addNewBook={this.addNewBook} />}
        </div>
        <br />
        <footer>By Hadley Swello && Shuchi Agrawal</footer>
        <br />
      </div>
    );
  }
}

export default App;
