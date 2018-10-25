import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ListQuestions from './components/ListQuestions'
import Question from './components/Question'
import Results from './components/Results'
import Loader from './components/Loader'
import Error from './components/Error'
import * as JuremaAPI from './utils/JuremaAPI'

class App extends Component {
  state = {
    questions: [],
    execution: {
      question_id: undefined,
      results: [],
      code: ''
    },
    level: 'easy',
    loading: false,
    error: false
  }
  componentDidMount(){
    this.setState({ loading: true, error: false })
    
    JuremaAPI.getQuestions()
    .then(data => (
      this.setState({questions: data.questions, loading: false})
      )).catch(error => this.showError(error))
  }
  sendScriptFile = (data, question_id) => {
    this.setState({ loading: true, error: false })
    
    JuremaAPI.sendFile(data)
    .then(response => {
      this.setState({
        execution: {
         question_id: question_id,
         results: response.results,
         code: response.code
        },
        loading: false
      })})
    .catch( error => this.showError(error))
  }

  onChangeLevel = e => {
    this.setState({ level: e.target.name })
  }

  showError = (error) => {
    console.log(error);
    this.setState({
      loading: false,
      error: true
    })
  }
  render() {
    return (
      <div className="App">
        {/* navbar */}
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Jurema</Link>
              
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Instruções</Link></li>
              </ul>
            </div>
            
          </div>
        </nav>
        
        <Error error={this.state.error}/>
        <Loader loading={this.state.loading}/>

        <Route exact path='/' render={() => (
          <ListQuestions
          onChangeLevel={this.onChangeLevel}
          questions={this.state.questions.filter(q => q.level === this.state.level)}/>
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


   