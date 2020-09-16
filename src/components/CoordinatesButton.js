// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    //needs a clickHandler for the 'click'
    //the prop is inherited from index.js
    clickHandler = (e) => {
        return this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return <button onClick={this.clickHandler}>Click me!</button>
    }
}

export default CoordinatesButton;