import React from 'react';
import { Link } from 'react-router-dom';
import { trainersMock } from '../TrainersMock';

export default function TrainersList() {
    return (
        <div>
            <h2>Trainers List</h2>
            <ul>
                {trainersMock.map(trainer => (
                    <li key={trainer.TrainerId} style={{ margin: '10px 0' }}>
                        {/* Creates a dynamic URL using the TrainerId */}
                        <Link to={`/trainers/${trainer.TrainerId}`}>
                            {trainer.Name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}