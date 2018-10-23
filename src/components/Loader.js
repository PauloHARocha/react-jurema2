import React, { Component } from 'react';

class Loader extends Component {
    
    render() {
        const { loading } = this.props;
        return(
            loading && (
                <div className='loader-container'>
                    <div className="loader"></div>
                </div>
            )         
        ) 
    }
}

export default Loader;