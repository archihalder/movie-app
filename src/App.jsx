import {useState, useEffect} from "react";

const Card = ({title}) => {
    const [hasLiked, setHasLiked] = useState(false);
    const [hasWatched, setHasWatched] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked]);

    return (
        <div className="card" onClick={() => setCount((prevCount) => prevCount + 1)}>
            <h3>{title} - {count}</h3>
            <div className="button-container">
                <button className="like-button" onClick={() => setHasLiked(!hasLiked)}>
                    {hasLiked ? "❤️" : "🤍"}
                </button>
                <button className="watch-button" onClick={() => setHasWatched(!hasWatched)}>
                    {hasWatched ? "Watched" : "Add to Watchlist"}
                </button>
            </div>

        </div>
    );
};

const App = () => {
    return (
        <div className="card-container">
            <Card title="Star Wars"/>
            <Card title="Avatar"/>
            <Card title="The Lion King"/>
        </div>
    );
};

export default App;