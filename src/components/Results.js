import React, { Component } from 'react';

class Results extends Component {
    render() {
        const results  = this.props.results
            
        return (
            <div className="container col-lg-6">
                <ul className="list-group ">
                    {results.map((res, idx) => (
                        <li key={idx} className={`list-group-item case-container case-container-${res.correct ? 'right' : 'wrong'}`}> 
                            <h4 className="list-group-item-heading">
                            Caso {idx + 1}
                                <span className={`glyphicon glyphicon-${res.correct ? 'ok' : 'remove'}`}></span>
                            </h4>
                            
                            <ul className="list-group-item-text">
                                <li>Entrada: {res.input}</li> 
                                <li>Saida: {res.answer}</li>
                                {res.right_answer && (<li>Saída Esperada: {res.right_answer}</li>)}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Results;