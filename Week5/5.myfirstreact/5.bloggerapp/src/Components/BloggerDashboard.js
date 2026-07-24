import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function BloggerDashboard() {
    const [activeTab, setActiveTab] = useState('books');

    // Declaring an Element Variable to hold the chosen component markup block
    let displayMarkupContent;

    // Conditional Rendering Strategy: Standard If/Else Switch Evaluation
    if (activeTab === 'books') {
        displayMarkupContent = <BookDetails />;
    } else if (activeTab === 'blogs') {
        displayMarkupContent = <BlogDetails />;
    } else if (activeTab === 'courses') {
        displayMarkupContent = <CourseDetails />;
    } else {
        displayMarkupContent = <p>No items found.</p>;
    }

    const getTabStyle = (tabName) => ({
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: activeTab === tabName ? '#343a40' : '#e2e6ea',
        color: activeTab === tabName ? 'white' : 'black',
        borderRadius: '4px 4px 0 0',
        fontWeight: 'bold'
    });

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '30px auto', padding: '0 20px' }}>
            <h1 style={{ textAlign: 'center', color: '#2c3e50', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                Universal Blogger Platform Matrix
            </h1>

            {/* Navigation Bars */}
            <div style={{ display: 'flex', gap: '5px', borderBottom: '2px solid #343a40', marginTop: '20px' }}>
                <button onClick={() => setActiveTab('books')} style={getTabStyle('books')}>Books Hub</button>
                <button onClick={() => setActiveTab('blogs')} style={getTabStyle('blogs')}>Blog Portal</button>
                <button onClick={() => setActiveTab('courses')} style={getTabStyle('courses')}>Course Base</button>
            </div>

            {/* Rendering the element variable layout block directly */}
            <div style={{ padding: '20px', border: '1px solid #ddd', borderTop: 'none', borderRadius: '0 0 4px 4px', minHeight: '300px' }}>
                {displayMarkupContent}
            </div>
        </div>
    );
}

export default BloggerDashboard;