// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    //requires a clickHandler
    //this component will take 2 props, onDelayedClick(function)
    // and delay (a number)
    clickHandler = (e) => {
        //I need to manually persist the event
        e.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, e)
    }

    render() {
        return <button onClick={this.clickHandler}>Click me!</button>
    }
}

export default DelayedButton;