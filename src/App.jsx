import {useState} from "react";

const Card = ({title}) => {
    const [hasLiked, setHasLiked] = useState(false);
    const [hasWatched, setHasWatched] = useState(false);

    return (
        <div className="card">
            <h3>{title}</h3>
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
