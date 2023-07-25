import episodes from "../data/episodes.json";
import { EpisodeCard } from "./EpisodeCard";
import "./App.css";
import Footer from "./Footer";

function App() {
    const allEpisodes = episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
    ));

    return (
        <>
            <div className="app">{allEpisodes}</div>
            <Footer />
        </>
    );
}

export default App;
