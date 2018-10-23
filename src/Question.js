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
            this.props.onSendFile(data);  
        } 
    }

    checkFile = e => {
        let findPyExtension = /[.]py$/;
        let selectedFile = e.target.files[0] ? e.target.files[0] : {name: ''}  

        findPyExtension.exec(selectedFile.name) ? this.setState({ message: 'Extensão .py correta', selectedFile: selectedFile }) 
            : this.setState({ message: 'Extensão incorreta, precisa ser .py'}) 
    }

    render() {
        const { question } = this.props
        if(question === undefined)
            return (<div className="container">Questão não encontrada</div>)
        return (
            <div className="container">
                <div className="well col-lg-12">        
                    <fieldset>
                        <legend className="text-left header">
                            <h3>{ question.name }</h3>
                            <p>{ question.description }</p>
                            <h4>Exemplos:</h4>
                            <ul>
                                {question.examples.inputs.map((inp, idx) => (
                                    <li key={idx}>{inp} --> {question.examples.outputs[idx]}</li>
                                ))}
                            </ul>
                        </legend>
                        <form onSubmit={this.onFormSubmit} >
                            <div className="form-group">
                                <label htmlFor="file">Envie seu código</label>
                                <input type="file" encType="multipart/form-data" name="file" onChange={this.checkFile} required/>

                                <p className="help-block">Lembre-se de enviar um arquivo com a extensão .py</p>
                                <p className="help-block">{this.state.message}</p>
                            </div>
                            <input type='submit' value='Enviar'/>
                        </form>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default Question;



