import React, { Component } from 'react';

class CurrencyConvertor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inr: '',
            euro: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({ inr: e.target.value });
    }

    handleSubmit(e) {
        // Prevent default browser form submission using the synthetic event
        e.preventDefault();
        const inputRupees = parseFloat(this.state.inr);

        if (!isNaN(inputRupees) && inputRupees >= 0) {
            // Conversion calculation logic (Approximate Exchange Rate: 1 EUR = 90 INR)
            const calculatedEuro = inputRupees / 90;
            this.setState({ euro: calculatedEuro.toFixed(2) });
        } else {
            alert("Please enter a valid amount in INR.");
        }
    }

    render() {
        return (
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                <h3>4. Currency Converter (INR to Euro)</h3>
                <form onSubmit={this.handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Enter Rupees (INR): </label>
                        <input
                            type="number"
                            value={this.state.inr}
                            onChange={this.handleInputChange}
                            placeholder="e.g. 9000"
                            style={{ padding: '5px', marginLeft: '10px' }}
                        />
                    </div>
                    <button type="submit" style={{ padding: '6px 12px', cursor: 'pointer' }}>Convert</button>
                </form>
                <p style={{ marginTop: '15px' }}>
                    Resulting Value: <strong>€ {this.state.euro}</strong>
                </p>
            </div>
        );
    }
}

export default CurrencyConvertor;