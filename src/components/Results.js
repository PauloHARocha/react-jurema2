import React, { Component } from 'react';

class Results extends Component {
    render() {
        const results  = this.props.results

        return (
            <div className="container col-lg-6">
                <ul className="list-group ">
                    {results.map((res, idx) => (
                        <li key={idx} className={`list-group-item  list-group-item-${res.correct ? 'success' : 'danger'}`}>
                            <h4 className="list-group-item-heading">Caso {idx + 1}</h4>
                            <p className="list-group-item-text">
                                Entrada = {res.input} 
                                <br /> Saida = {res.answer} <br />
                                {res.right_answer && (`Saída Esperada = ${res.right_answer}`  )}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Results;