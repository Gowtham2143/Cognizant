import React from 'react';

function IndianPlayers() {
    const topPlayers = ["Rohit", "Virat", "Rahul", "Gill"];

    // Destructuring array elements into distinct variables
    const [player1, player2, player3, player4] = topPlayers;

    // Declaring two separate arrays
    const T20players = ["Surya", "Hardik", "Bumrah"];
    const RanjiTrophyPlayers = ["Sarfaraz", "Iyer", "Jaiswal"];

    // Merging the two arrays using the ES6 Spread Operator (...)
    const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

    return (
        <div>
            <h3>Team Selection (ES6 Destructuring)</h3>
            <p><strong>Odd Position Players (1st & 3rd):</strong> {player1}, {player3}</p>
            <p><strong>Even Position Players (2nd & 4th):</strong> {player2}, {player4}</p>

            <h3>Merged Squad List (ES6 Spread Operator)</h3>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default IndianPlayers;