import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    // Step 5: Initialize the component with a list of Posts in state
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    // Step 6: Create loadPosts() using Fetch API
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // Mapping JSON data to our Post class
                const postObjects = data.map(item => new Post(item.id, item.title, item.body));
                this.setState({ posts: postObjects });
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }

    // Step 7: Implement componentDidMount() to call loadPosts()
    componentDidMount() {
        this.loadPosts();
    }

    // Step 9: Define componentDidCatch() to display errors as alert messages
    componentDidCatch(error, errorInfo) {
        alert("An error occurred in the component: " + error.toString());
    }

    // Step 8: Implement render() to display the title (heading) and post (paragraph)
    render() {
        return (
            <div style={{ padding: '20px', textAlign: 'left' }}>
                <h2>Latest Blog Posts</h2>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;