import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ListQuestions from './ListQuestions'
import Question from './Question'
import Results from './Results'

class App extends Component {
  state = {
    questions: [],
    results: []
  }
  componentDidMount(){
    fetch('http://127.0.0.1:5001/questions')
    .then(res => res.json())
    .then(data => (
      this.setState({questions: data.questions})
    ))
  }
  sendScriptFile = data => {
    fetch('http://127.0.0.1:5001/question', {
      method: 'POST',
      body: data
    }).then(res => res.json())
    .then(response => (this.setState({results: response.results})))
    .catch( error => console.log(error))

  }
  render() {
    return (
      <div className="App">
        {/* navbar */}
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Jurema</Link>
            </div>
          </div>
        </nav>

        <Route exact path='/' render={() => (
          <ListQuestions questions={this.state.questions}/>
        )}/>
            
        {this.state.questions.length && 
          <Route exact path='/question/:id' render={(props) => (
            <section>
              <Question 
                question={this.state.questions.find(
                  question => question.id === parseInt(props.match.params.id))}
                onSendFile={this.sendScriptFile} />
              {this.state.results.length && <Results results={this.state.results}/>}
            </section>
         )} />
        }

        
      </div>
    );
  }
}

export default App;


   