import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ListQuestions extends Component {
    
    render() {
        const { questions, onChangeLevel } = this.props
        return (
            <div>
                <div className="form-group col-lg-offset-4 col-lg-4">
                    <div className="btn-group btn-group-justified" role="group" aria-label="...">
                        <div className="btn-group" role="group">
                            <button onClick={onChangeLevel} name="easy" className="section-button-easy btn btn-default">Fácil</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button onClick={onChangeLevel} name="medium" className="section-button-medium btn btn-default">Médio</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button onClick={onChangeLevel} name="hard" className="section-button-hard btn btn-default">Difícil</button>
                        </div>
                    </div> 
                </div>
                <div className="list-group container col-lg-offset-1 col-lg-10">
                    {questions.map((question, idx) => ( 
                        <Link key={question.id} to={`/question/${question.id}`} 
                        className="list-group-item">
                            <h4 className="list-group-item-heading">
                                <span className={`question-title-${question.level}`}>
                                    {`Questão ${idx + 1} - ${question.name}`}
                                </span>
                            </h4>

                            <p className="question-description list-group-item-text">{question.description}</p>
                            {/* <h5>Exemplos:</h5>
                            <ul>
                               {question.examples.inputs.map((inp, idx) => (
                                   <li key={idx}>
                                   {inp} --> {question.examples.outputs[idx]}</li>
                               ))} 
                            </ul> */}
                        </Link>
                    ))}
                </div>
                
            </div>
        );
    }
}

export default ListQuestions;

