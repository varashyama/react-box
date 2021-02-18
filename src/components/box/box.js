import React, { Component } from 'react'
import './box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            background: props.color
        };
    }

    changeColor() {

        this.setState({ background: 'lightgray' });

    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h2>Box</h2>
                <div className="createBox" style={{ background: this.state.background }}> </div>
                <button onClick={this.changeColor.bind(this)}>click to change color</button>
            </div>
        )
    }
}

export default Box;