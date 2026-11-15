function Stats({ postCount, totalLikes }) {
    return (
        <p className="stats">
            {postCount} posts · {totalLikes} total likes
        </p>
    );
}

export default Stats;