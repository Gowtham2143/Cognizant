import React, { Component } from 'react';
import ExclusiveOffers from './ExclusiveOffers';

class FlightBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin() {
        this.setState({ isLoggedIn: true });
    }

    handleLogout() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const { isLoggedIn } = this.state;

        // Declaring Element Variables to demonstrate conditional markup storage
        let authButton;
        let viewGreeting;
        let tableActionHeader;

        if (isLoggedIn) {
            // Element variables populated for logged-in user page view
            authButton = <button onClick={this.handleLogout} style={{ backgroundColor: '#dc3545', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>;
            viewGreeting = <h2 style={{ color: '#0056b3' }}>User Dashboard: Registered Ticket Booking Mode</h2>;
            tableActionHeader = <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Purchase Option</th>;
        } else {
            // Element variables populated for standard anonymous guest browsing view
            authButton = <button onClick={this.handleLogin} style={{ backgroundColor: '#28a745', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>;
            viewGreeting = <h2 style={{ color: '#6c757d' }}>Guest Portal: Read-Only Flight Directory Mode</h2>;
            tableActionHeader = null; // Prevents this specific column title node from rendering
        }

        // Static Flight Array
        const flights = [
            { id: 201, flightNo: "AI-102", route: "New Delhi (DEL) to Mumbai (BOM)", price: "₹6,400" },
            { id: 202, flightNo: "6E-432", route: "Hyderabad (HYD) to Bengaluru (BLR)", price: "₹3,900" },
            { id: 203, flightNo: "UK-811", route: "Kolkata (CCU) to Chennai (MAA)", price: "₹7,200" }
        ];

        return (
            <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #343a40', paddingBottom: '15px' }}>
                    <h1 style={{ margin: 0 }}>SkyRoute Airways</h1>
                    {/* Rendering the button element variable */}
                    {authButton}
                </div>

                <div style={{ marginTop: '20px' }}>
                    {/* Rendering the greeting message element variable */}
                    {viewGreeting}
                </div>

                <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                    <tr style={{ backgroundColor: '#f8f9fa' }}>
                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Flight Number</th>
                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Route Details</th>
                        <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Standard Price</th>
                        {/* Rendering table header column via element variable */}
                        {tableActionHeader}
                    </tr>
                    </thead>
                    <tbody>
                    {flights.map(flight => (
                        <tr key={flight.id} style={{ borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '12px' }}>{flight.flightNo}</td>
                            <td style={{ padding: '12px' }}>{flight.route}</td>
                            <td style={{ padding: '12px' }}>{flight.price}</td>

                            {/* Inline Conditional Short-Circuit Execution for Booking Buttons */}
                            {isLoggedIn && (
                                <td style={{ padding: '12px' }}>
                                    <button
                                        onClick={() => alert(`Success! Seat reserved on flight ${flight.flightNo}.`)}
                                        style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                                    >
                                        Book Ticket
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/* Passing state property down to show dynamic component rejection pattern */}
                <ExclusiveOffers isLoggedIn={isLoggedIn} />
            </div>
        );
    }
}

export default FlightBooking;