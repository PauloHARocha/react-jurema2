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
        let selectedFile = e.target.files[0] ? e.target.files[0] : {name: 'nenhum'}  

        findPyExtension.exec(selectedFile.name) ? this.setState({ 
            message: `Extensão .py correta -> ${selectedFile.name}`, selectedFile: selectedFile }) 
            : this.setState({ message: `Extensão incorreta, precisa ser .py -> ${selectedFile.name}`}) 
    }

    render() {
        const { question, code } = this.props   
        if(question === undefined)
            return (<div className="container">Questão não encontrada</div>)
        return (   
            <div className="question-container col-lg-6">       
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
                        <label className="btn btn-default" htmlFor="file">
                            Envie seu código
                        </label>
                        <input type="file" id="file" encType="multipart/form-data" name="file" onChange={this.checkFile} required/>
                        <p className="help-block">Lembre-se de enviar um arquivo com a extensão .py</p>
                        <p className="help-block">{this.state.message}</p>
                    </div>
                    {this.state.selectedFile && 
                        <div className="form-group">
                            <input className="btn btn-default" type='submit' value='Executar' />
                        </div>
                    }
                    
                </form>

                {code && <div><pre className="pre-scrollable"><code>{code}</code></pre></div>}
                
            </div>
            
        );
    }
}

export default Question;



