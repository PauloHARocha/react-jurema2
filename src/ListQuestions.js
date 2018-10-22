import React, { Component } from 'react';

class ListQuestions extends Component {
    render() {
        const { questions } = this.props
        return (
            <div>
                <div className="list-group container col-lg-offset-1 col-lg-10">
                    {questions.map(question => (
                        <a key={question.id} href="#" className="list-group-item">
                            <h4 className="list-group-item-heading">{`Questão ${question.id} - ${question.name}`}</h4>
                            <p className="list-group-item-text">{question.description}</p>
                            <h5>Exemplos:</h5>
                            <ul>
                               {question.examples.inputs.map((inp, idx) => (
                                   <li key={idx}>{inp} --> {question.examples.outputs[idx]}</li>
                               ))} 
                            </ul>
                        </a>
                    ))}
                </div>
                
            </div>
        );
    }
}

export default ListQuestions;



