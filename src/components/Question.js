import React, { Component } from 'react';

class Question extends Component {
    state = {
        message: '',
        selectedFile: null
    }
    onFormSubmit = e => {
        e.preventDefault()
        
        if(this.state.selectedFile){
            let data = new FormData()
            data.append('file', this.state.selectedFile)
            data.append('question_id', this.props.question.id)
            this.props.onSendFile(data, this.props.question.id);  
        } 
    }

    checkFile = e => {
        let findPyExtension = /[.]py$/;
        let selectedFile = e.target.files[0] ? e.target.files[0] : {name: ''}  

        findPyExtension.exec(selectedFile.name) ? this.setState({ message: 'Extensão .py correta', selectedFile: selectedFile }) 
            : this.setState({ message: 'Extensão incorreta, precisa ser .py'}) 
    }

    render() {
        const { question, code } = this.props
        if(question === undefined)
            return (<div className="container">Questão não encontrada</div>)
        return (   
            <div className="col-lg-6">        
                <h3>{ question.name }</h3>
                <p>{ question.description }</p>
                <h5>Exemplos:</h5>
                <ul>
                    {question.examples.inputs.map((inp, idx) => (
                        <li key={idx}>{inp} --> {question.examples.outputs[idx]}</li>
                    ))}
                </ul>
                        
                <form onSubmit={this.onFormSubmit} >
                    <div className="form-group">
                        <label htmlFor="file">Envie seu código</label>
                        <input type="file" encType="multipart/form-data" name="file" onChange={this.checkFile} required/>
                        <p className="help-block">Lembre-se de enviar um arquivo com a extensão .py</p>
                        <p className="help-block">{this.state.message}</p>
                    </div>
                    <div className="form-group">
                        <input type='submit' value='Enviar'/>
                    </div>
                </form>

                {code && <div><pre><code>{code}</code></pre></div>}
                
            </div>
            
        );
    }
}

export default Question;



