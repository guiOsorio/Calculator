import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() { 
        return (<div onClick={() => this.props.handleClick(this.props.children)} className="btn">
            {this.props.children}
        </div>);
    }
}
 
export default Button;