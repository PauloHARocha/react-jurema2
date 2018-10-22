import React, { Component } from 'react';
import ListQuestions from './ListQuestions'
class App extends Component {
  state = {
    questions: []
  }
  componentDidMount(){
    fetch('http://127.0.0.1:5001/questions')
    .then(res => res.json())
    .then(data => (
      this.setState({questions: data.questions})
    ))
  }
  render() {
    return (
      <div className="App">
        {/* navbar */}
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Jurema</a>
            </div>
          </div>
        </nav>
        <ListQuestions questions={this.state.questions}/>
      </div>
    );
  }
}

export default App;


   