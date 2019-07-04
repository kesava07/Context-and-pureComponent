import React from 'react';

export default class SampleComponent extends React.Component {

    state = {
        count: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({ count: 100 });
        }, 2500)
    };

    shouldComponentUpdate(prevProps, prevState) {
        if (prevState.count === this.state.count) {
            return false;
        } else {
            return true;
        }
    };

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate")
        return null
    };

    componentDidUpdate() {
        console.log("getSnapshotBeforeUpdate")
    };

    render() {
        return (
            <div>
                <h1 style={{ fontSize: "10em", color: "red",marginTop:"10em" }}>Hello</h1>
            </div>
        )
    }
}