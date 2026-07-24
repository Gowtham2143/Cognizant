import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { trainersMock } from '../TrainersMock';

export default function TrainerDetail() {
    // Extract the ID parameter from the URL
    const { id } = useParams();

    // Find the trainer whose ID matches the URL parameter
    const trainer = trainersMock.find(t => t.TrainerId.toString() === id);

    if (!trainer) {
        return <div><h2>Trainer not found!</h2></div>;
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px' }}>
            <h2>Trainer Details</h2>
            <p><strong>T-ID:</strong> {trainer.TrainerId}</p>
            <p><strong>Name:</strong> {trainer.Name}</p>
            <p><strong>Email:</strong> {trainer.Email}</p>
            <p><strong>Phone:</strong> {trainer.Phone}</p>
            <p><strong>Stream:</strong> {trainer.Technology}</p>
            <p><strong>Skills:</strong> {trainer.Skills}</p>

            <br />
            <Link to="/trainers">← Back to Trainers List</Link>
        </div>
    );
}