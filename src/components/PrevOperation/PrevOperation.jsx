import React, { Component } from 'react';
import './PrevOperation.css';

class PrevOperation extends Component {
    state = {  }
    render() { 
        return (<div className="prevOperation">
            {this.props.children}
        </div>);
    }
}
 
export default PrevOperation;