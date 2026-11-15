import { useState } from "react";
import "./exercise.css";
import Layout from "./components/Layout";
import PostCard from "./components/PostCard";
import Button from "./components/Button";
import CreatePost from "./components/CreatePost";
import Stats from "./components/Stats";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "Getting Started with React", excerpt: "Components are just functions that return markup.", author: "Amina", date: "Jan 15, 2026", likes: 0 },
        { id: 2, title: "Why Flexbox Clicked For Me", excerpt: "It stopped being magic once I understood the main axis.", author: "Brian", date: "Jan 14, 2026", likes: 0 },
        { id: 3, title: "My First Deployment", excerpt: "Three clicks in GitHub Pages and it was live on the internet.", author: "Cynthia", date: "Jan 13, 2026", likes: 0 },
    ]);

    const handleLike = (id) => {
        setPosts((prev) =>
            prev.map((post) =>
                post.id === id ? { ...post, likes: post.likes + 1 } : post
            )
        );
    };

    const handleAddPost = (newPost) => {
        const post = {
            id: Date.now(),
            title: newPost.title.trim(),
            excerpt: newPost.content.trim(),
            author: "You",
            date: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }),
            likes: 0,
        };

        setPosts((prev) => [post, ...prev]);
    };

    const handleDelete = (id) => {
        setPosts((prev) => prev.filter((post) => post.id !== id));
    };

    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

    return (
        <Layout>
            <CreatePost onAddPost={handleAddPost} />

            <h2>Latest Posts</h2>

            <Stats postCount={posts.length} totalLikes={totalLikes} />

            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                    likes={post.likes}
                    onLike={handleLike}
                    onDelete={handleDelete}
                />
            ))}

            <Button text="Load more" />
            <Button />
        </Layout>
    );
}

export default App;