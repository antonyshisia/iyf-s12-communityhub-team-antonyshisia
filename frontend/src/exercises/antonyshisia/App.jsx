import "./exercise.css";
import Layout from "./components/Layout";
import PostCard from "./components/PostCard";
import Button from "./components/Button";

function App() {
    const posts = [
        { id: 1, title: "Getting Started with React", excerpt: "Components are just functions that return markup.", author: "Amina", date: "Jan 15, 2026" },
        { id: 2, title: "Why Flexbox Clicked For Me", excerpt: "It stopped being magic once I understood the main axis.", author: "Brian", date: "Jan 14, 2026" },
        { id: 3, title: "My First Deployment", excerpt: "Three clicks in GitHub Pages and it was live on the internet.", author: "Cynthia", date: "Jan 13, 2026" },
    ];

    return (
        <Layout>
            <h2>Latest Posts</h2>

            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                />
            ))}

            <Button text="Load more" />
            <Button text="Delete" variant="danger" />
            <Button />
        </Layout>
    );
}

export default App;