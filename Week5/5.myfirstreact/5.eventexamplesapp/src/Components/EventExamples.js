import React, { Component } from 'react';

class EventExamples extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };

        // Explicit binding to demonstrate the 'this' keyword requirement
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
    }

    // Static message method invoked alongside counter incrementing
    sayHello() {
        alert("Hello! Welcome to the React Event Handling session.");
    }

    handleIncrement() {
        // Method part A: Update state
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
        // Method part B: Invoke secondary method
        this.sayHello();
    }

    handleDecrement() {
        this.setState(prevState => ({ counter: prevState.counter - 1 }));
    }

    // Method handling custom arguments
    sayWelcome(message) {
        alert(`Argument passed: ${message}`);
    }

    // Method handling React Synthetic Event properties
    handleSyntheticEvent(e) {
        alert("I was clicked");
        console.log("Synthetic Event Type:", e.type);
    }

    render() {
        return (
            <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
                <h3>1. Counter (Multiple Methods & 'this' Binding)</h3>
                <p>Counter: <strong>{this.state.counter}</strong></p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement} style={{ marginLeft: '10px' }}>Decrement</button>

                <h3>2. Function with Arguments</h3>
                <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>

                <h3>3. Synthetic Event</h3>
                <button onClick={this.handleSyntheticEvent}>Trigger Event</button>
            </div>
        );
    }
}

export default EventExamples;