import React from 'react';

function ListofPlayers() {
    // Array of 11 players with names and scores
    const players = [
        { name: "Virat Kohli", score: 85 },
        { name: "Rohit Sharma", score: 92 },
        { name: "KL Rahul", score: 45 },
        { name: "Shubman Gill", score: 68 },
        { name: "Shreyas Iyer", score: 74 },
        { name: "Rishabh Pant", score: 55 },
        { name: "Hardik Pandya", score: 62 },
        { name: "Ravindra Jadeja", score: 38 },
        { name: "R. Ashwin", score: 25 },
        { name: "Jasprit Bumrah", score: 12 },
        { name: "Mohammed Shami", score: 8 }
    ];

    // Filtering players with scores below 70 using an ES6 arrow function
    const lowScoringPlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h3>All Players List (ES6 Map)</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player.name} — Score: {player.score}</li>
                ))}
            </ul>

            <h3>Players with Scores Below 70 (ES6 Filter & Arrow Function)</h3>
            <ul>
                {lowScoringPlayers.map((player, index) => (
                    <li key={index}>{player.name} — Score: {player.score}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;