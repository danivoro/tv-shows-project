import episodes from "../data/episodes.json";
import { EpisodeCard } from "./EpisodeCard";
import "./App.css";

function App() {
    const allEpisodes = episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
    ));

    return <div className="App">{allEpisodes}</div>;
}

export default App;
