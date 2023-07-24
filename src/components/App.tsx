import episodes from "../data/episodes.json";
import { EpisodeCard } from "./EpisodeCard";
import "./App.css";

function App() {
    return (
        <div className="App">
            <EpisodeCard
                name={episodes[0].name}
                season={episodes[0].season}
                number={episodes[0].number}
                image={{
                    medium: episodes[0].image.medium,
                    original: episodes[0].image.original,
                }}
                summary={episodes[0].summary}
            />
        </div>
    );
}

export default App;
