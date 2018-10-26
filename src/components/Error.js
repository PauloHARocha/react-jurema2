import React, { Component } from 'react';

class Error extends Component {

    render() {
        const { error, message } = this.props;
        return (
            <div className='error-container'>
                {error && (
                <div className='error-content'>
                        {message === 'Failed to fetch' ? 'Verifique a sua conexão com a internet e atualize a página.' : message}
                </div>)}
            </div>
        )


    }
}

export default Error;