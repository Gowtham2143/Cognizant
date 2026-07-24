import React from 'react';

function ExclusiveOffers({ isLoggedIn }) {
    // Preventing the component from rendering entirely if user is a guest
    if (!isLoggedIn) {
        return null;
    }

    return (
        <div style={{ backgroundColor: '#fff3cd', padding: '15px', marginTop: '20px', borderRadius: '5px', border: '1px solid #ffeeba', color: '#856404' }}>
            <strong>🔥 Member Exclusive Deal:</strong> Use code <strong>FLY2026</strong> at checkout to save 10% on your selected flight ticket!
        </div>
    );
}

export default ExclusiveOffers;