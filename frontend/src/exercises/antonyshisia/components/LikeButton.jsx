function LikeButton() {
    let likes = 0; // a plain variable

    const handleClick = () => {
        likes++;
        console.log("likes is now", likes);
    };

    return <button onClick={handleClick}>❤️ {likes}</button>;
}

export default LikeButton;