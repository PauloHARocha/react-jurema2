import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ListQuestions extends Component {
    render() {
        const { questions } = this.props
        return (
            <div>
                <div className="list-group container col-lg-offset-1 col-lg-10">
                    {questions.map(question => ( 
                        <Link key={question.id} to={`/question/${question.id}`} 
                        className="list-group-item">
                            <h4 className="list-group-item-heading">
                            {`Questão ${question.id} - ${question.name}`}</h4>

                            <p className="list-group-item-text">{question.description}</p>
                            <h5>Exemplos:</h5>
                            <ul>
                               {question.examples.inputs.map((inp, idx) => (
                                   <li key={idx}>
                                   {inp} --> {question.examples.outputs[idx]}</li>
                               ))} 
                            </ul>
                        </Link>
                    ))}
                </div>
                
            </div>
        );
    }
}

export default ListQuestions;



