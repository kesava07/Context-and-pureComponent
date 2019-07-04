import React, { Component } from 'react'
import ComponentC from './ComponentC';
import UserContext from './UserContext';

export default class ComponentB extends Component {
    render() {

        return (
            <div>
                <ComponentC />
                <p>Component B</p>
                <h1>{this.context.title}</h1>
                <button onClick={this.context.toggle}>Click here</button>
            </div>
        )
    }
};

ComponentB.contextType = UserContext;
