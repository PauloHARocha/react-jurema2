import React, { Component } from 'react';

class Results extends Component {
    render() {
        const { results, code } = this.props.execution

        return (
            <div>
                <ul>
                    {results.map((res, idx) => (
                        <li key={idx}> 
                        {`Input: ${res.input} - Answer: ${res.answer} 
                        ${res.right_answer ? 'Rigth Answer: ' + res.right_answer: ''}
                        Correct: ${res.correct ? 'Yes' : 'No'}`}
                        </li>
                    ))}
                </ul>
                <pre><code>{code}</code></pre>
            </div>
        );
    }
}

export default Results;



{/* <div class="list-group ">
    {% for open_answer in open_answers %}
                    {% if open_answer.is_right %}
                        <a class="list-group-item  list-group-item-success">
        <h4 class="list-group-item-heading">Entrada {{ open_answer.number_input }}</h4>
        <p class="list-group-item-text">Entrada do programa = {{ open_answer.input }} <br> Resultado do programa = {{ open_answer.result }} <br> Saída Esperada = {{ open_answer.output }}</p>
                        </a>
            {% else %}
                        <a class="list-group-item  list-group-item-danger">
                <h4 class="list-group-item-heading">Entrada {{ open_answer.number_input }}</h4>
                <p class="list-group-item-text">Entrada do programa = {{ open_answer.input }} <br> Resultado do programa = {{ open_answer.result }}<br> Saída Esperada = {{ open_answer.output }}</p>
                        </a>
                    {% endif %}
                    {% endfor %}
        </div> */}