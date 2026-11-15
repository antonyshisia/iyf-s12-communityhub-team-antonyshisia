import { useState } from "react";

function CreatePost({ onAddPost }) {
    const [form, setForm] = useState({ title: "", content: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.title.trim() === "") {
            return;
        }

        onAddPost(form);
        setForm({ title: "", content: "" });
    };

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <h3>Create a post</h3>

            <label htmlFor="post-title">Title</label>
            <input
                id="post-title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Post title"
            />

            <label htmlFor="post-content">Content</label>
            <textarea
                id="post-content"
                name="content"
                value={form.content}
                onChange={handleChange}
                rows="4"
                placeholder="What do you want to share?"
            />

            <button type="submit" className="btn btn-primary">
                Publish
            </button>
        </form>
    );
}

export default CreatePost;