import React, { Component } from 'react';

class InstructionsModal extends Component {

    render() {
        const { showModal, hideModal } = this.props;
        return (
            showModal && (
                <div>
                    <section className="modal-main">
                        <p><button className="close" onClick={hideModal}>&times;</button></p>

                        <h4 className="instructions-title">Bem-vindo a plataforma 
                        <span className="brand"> Jurema</span></h4>

                        <h4>Instruções de uso</h4>
                        <ul>
                            <li>Selecione o nível das questões</li>
                            <li>Selecione a questão que deseja executar</li>
                            <li>Faça o upload do seu script em python</li>
                            <li>Execute o script</li>
                            <li>Verique os casos de teste</li>
                        </ul>
                    </section>

                    <div className="modal display-block" onClick={hideModal}></div>
                </div>
                
            )
        )
    }
}

export default InstructionsModal;


