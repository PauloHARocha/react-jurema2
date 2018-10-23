import React, { Component } from 'react';

class Results extends Component {
    render() {
        const { results } = this.props
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
            </div>
        );
    }
}

export default Results;



