function PostCard({ id, title, excerpt, author, date, likes, onLike, onDelete }) {
    return (
        <article className="post-card">
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <div className="post-meta">
                <span>By {author}</span>
                <span>{date}</span>
            </div>
            <div className="post-actions">
                <button className="like-button" onClick={() => onLike(id)}>
                    ❤️ {likes}
                </button>
                <button className="delete-button" onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
        </article>
    );
}

export default PostCard;