import React, { useState } from 'react';

// Standalone notification layer designed to show rendering prevention strategy
function MaintenanceBanner({ active }) {
    // If true, return null to completely prevent mounting markup nodes into the DOM tree
    if (active) {
        return null;
    }
    return (
        <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '10px', borderRadius: '4px', margin: '10px 0' }}>
            ✓ All systems online. Syncing active registrations.
        </div>
    );
}

function CourseDetails() {
    const [hideBanner, setHideBanner] = useState(false);
    const [viewFormat, setViewFormat] = useState('list'); // 'list' or 'grid'

    const courses = [
        { id: 'c1', title: "Full-Stack Web Architectures", duration: "12 Weeks" },
        { id: 'c2', title: "Deep Learning Foundations", duration: "8 Weeks" },
        { id: 'c3', title: "Advanced Prompt Engineering Matrix", duration: "4 Weeks" }
    ];

    return (
        <div>
            <h3>🎓 Learning Course Curriculum</h3>

            {/* Conditional Rendering Strategy: Preventing rendering via returning null */}
            <MaintenanceBanner active={hideBanner} />

            <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
                <button onClick={() => setHideBanner(!hideBanner)} style={{ fontSize: '0.8rem', padding: '5px 10px' }}>
                    Toggle Status Notification Banner
                </button>
                <button onClick={() => setViewFormat(viewFormat === 'list' ? 'grid' : 'list')} style={{ fontSize: '0.8rem', padding: '5px 10px' }}>
                    Switch View Mode
                </button>
            </div>

            {/* Conditional Rendering Strategy: Ternary Expression for structural layout adjustments */}
            {viewFormat === 'list' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {courses.map(course => (
                        <div key={course.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }}>
                            <strong>{course.title}</strong> — {course.duration}
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {courses.map(course => (
                        <div key={course.id} style={{ border: '2px dashed #007bff', padding: '15px', borderRadius: '6px' }}>
                            <h4>{course.title}</h4>
                            <p style={{ margin: 0, color: '#007bff' }}>{course.duration}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CourseDetails;