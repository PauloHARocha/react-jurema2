import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ListQuestions from './ListQuestions'
import Question from './Question'
import Results from './Results'

class App extends Component {
  state = {
    questions: [],
    execution: {
      question_id: undefined,
      results: [],
      code: ''
    }
  }
  componentDidMount(){
    fetch('http://127.0.0.1:5001/questions')
    .then(res => res.json())
    .then(data => (
      this.setState({questions: data.questions})
    ))
  }
  sendScriptFile = (data, question_id) => {
    fetch('http://127.0.0.1:5001/question', {
      method: 'POST',
      body: data
    }).then(res => res.json())
    .then(response => {
      this.setState({
        execution: {
         question_id: question_id,
         results: response.results,
         code: response.code
        }
      })})
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
            
        {this.state.questions.length > 0 && 
          <Route exact path='/question/:id' render={(props) => (
            <section>
              <Question 
                question={this.state.questions.find(
                  question => question.id === parseInt(props.match.params.id))}
                onSendFile={this.sendScriptFile} />
            {this.state.execution.question_id === parseInt(props.match.params.id) 
              && <Results execution={this.state.execution}/>}
            </section>
         )} />
        }

        
      </div>
    );
  }
}

export default App;


   