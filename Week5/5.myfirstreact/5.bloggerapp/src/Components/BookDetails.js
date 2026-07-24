import React from 'react';

// Extracted child list component
// Key rule: The key must be specified on the custom element wrapper in the parent loop, not here!
function BookItem({ title, author, year }) {
    return (
        <div style={{ padding: '12px', margin: '10px 0', borderLeft: '4px solid #007bff', backgroundColor: '#f8f9fa' }}>
            <h4 style={{ margin: '0 0 5px 0' }}>{title}</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>By {author} | Published: {year}</p>
        </div>
    );
}

function BookDetails() {
    const books = [
        { id: 'b1', title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
        { id: 'b2', title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", year: 2017 },
        { id: 'b3', title: "You Don't Know JS Yet", author: "Kyle Simpson", year: 2020 }
    ];

    return (
        <div>
            <h3>📚 Book Resource Library</h3>
            <p style={{ color: '#666' }}>Rendering extracted child items using map() loops with unique identities.</p>

            {/* React Map execution: Transforming array data into JSX collection elements */}
            {books.map((book) => (
                <BookItem
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                />
            ))}
        </div>
    );
}

export default BookDetails;