import React, { Component } from 'react'
import ComponentB from './ComponentB';
import UserContext from './UserContext';

export default class ComponetA extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                <ComponentB />
                <p>Component A</p>
                <h1>{this.context.title}</h1>
            </div>
        )
    }
};