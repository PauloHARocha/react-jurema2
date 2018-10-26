import React, { Component } from 'react';

class Question extends Component {
    state = {
        message: '',
        selectedFile: null
    }
    onFormSubmit = () => {
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

    debounce = (fn, delay) => {
        let timer = null
        return () => {
            let context = this
            clearTimeout(timer)
            timer = setTimeout(()=>{
                fn.apply(context)
            }, delay)
        }
    }

    render() {
        const { question, code } = this.props   
        if(question === undefined)
            return (<div className="container">Questão não encontrada</div>)
        return (   
            <div className="question-container col-lg-6">       
                <h3><span className={`question-title-${question.level}`}>
                    { question.name }
                </span></h3>
            
                <p>{ question.description }</p>
                <h5>Exemplos:</h5>
                <ul>
                    {question.examples.inputs.map((inp, idx) => (
                        <li key={idx}>{inp} --> {question.examples.outputs[idx]}</li>
                    ))}
                </ul>
                        
                <form>
                    <div className="form-group">
                        <label className="btn btn-default" htmlFor="file" tabIndex="0" >
                            Envie seu código
                        </label>
                        <input type="file" id="file" encType="multipart/form-data" name="file" onChange={this.checkFile} required/>
                        <p className="help-block">Lembre-se de enviar um arquivo com a extensão .py</p>
                        <p className="help-block">{this.state.message}</p>
                    </div>
                    {this.state.selectedFile && 
                        <div className="form-group">
                            <input className="btn btn-default" type='button' value='Executar' onClick={this.debounce(this.onFormSubmit, 300)} />
                        </div>
                    }
                    
                </form>

                {code && <div><pre className="pre-scrollable"><code>{code}</code></pre></div>}
                
            </div>
            
        );
    }
}

export default Question;



