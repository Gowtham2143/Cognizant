import React from 'react';

function BlogDetails() {
    const posts = [
        { id: 'p1', title: "Mastering React State Hooks", category: "Development", isFeatured: true },
        { id: 'p2', title: "A Guide to Tailwind CSS Layouts", category: "Design", isFeatured: false },
        { id: 'p3', title: "Understanding AI Core Orchestrators", category: "AI/ML", isFeatured: true }
    ];

    return (
        <div>
            <h3>📰 Editorial Blog Catalog</h3>

            {posts.map((post) => (
                <div key={post.id} style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                    <h4 style={{ margin: '0 0 5px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {post.title}

                        {/* Short-Circuit Rendering: Tag renders only if isFeatured evaluates to true */}
                        {post.isFeatured && (
                            <span style={{ backgroundColor: '#ffc107', color: '#212529', fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px' }}>
                Featured Star
              </span>
                        )}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: '#6c757d', textTransform: 'uppercase' }}>{post.category}</span>
                </div>
            ))}
        </div>
    );
}

export default BlogDetails;