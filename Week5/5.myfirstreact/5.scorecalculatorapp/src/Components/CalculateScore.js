import React from 'react';
import '../Stylesheets/mystyle.css'; // Importing the CSS file

function CalculateScore({ Name, School, Total, Goal }) {
    // Calculating the average score
    const average = Total / Goal;

    return (
        <div className="score-card">
            <h2>Student Score Details</h2>
            <p><span>Name:</span> {Name}</p>
            <p><span>School:</span> {School}</p>
            <p><span>Total Score:</span> {Total}</p>
            <p><span>Goal/Subjects:</span> {Goal}</p>
            <hr />
            <p><span>Average Score:</span> {average.toFixed(2)}</p>
        </div>
    );
}

export default CalculateScore;