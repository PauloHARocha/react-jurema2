import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ListQuestions from './components/ListQuestions'
import Question from './components/Question'
import Results from './components/Results'
import * as JuremaAPI from './utils/JuremaAPI'

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
    JuremaAPI.getQuestions()
    .then(data => (
      this.setState({questions: data.questions})
    ))
  }
  sendScriptFile = (data, question_id) => {
    JuremaAPI.sendFile(data)
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
                question={this.state.questions.find(question => question.id === parseInt(props.match.params.id))}
                onSendFile={this.sendScriptFile}
                code={this.state.execution.question_id === parseInt(props.match.params.id) ? this.state.execution.code : undefined} />
            
              {this.state.execution.question_id === parseInt(props.match.params.id) 
                && <Results results={this.state.execution.results}/>}
            
            </section>
         )} />
        }

        
      </div>
    );
  }
}

export default App;


   