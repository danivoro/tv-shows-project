// import _episodes from "../data/simpsonsEpisodes.json";
import { EpisodeCard } from "./EpisodeCard";
import "./App.css";
import Footer from "./Footer";
import { useState } from "react";
import filterBySearchedInput from "../util/filterBySearchedInput";
import IEpisode from "../interfaces/episode";
// const fetchedEpisodes: IEpisode[] = _episodes as IEpisode[];
let fetchedEpisodes: IEpisode[] = [];

async function getDataFromAPI() {
    const response = await fetch("https://api.tvmaze.com/shows/527/episodes");
    const jsonBody = await response.json();
    fetchedEpisodes = jsonBody;
}

getDataFromAPI();

interface KeyboardControlledInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

fetchedEpisodes.forEach((episodeInfo) => {
    if (!episodeInfo.rating.average) {
        episodeInfo.rating.average = 0;
    }
    if (!episodeInfo.summary) {
        episodeInfo.summary = "";
    }
    if (!episodeInfo.image) {
        episodeInfo.image = { medium: "", original: "" };
    }
});

function KeyboardControlledInput(
    props: KeyboardControlledInputProps
): JSX.Element {
    return (
        <span>
            <input value={props.value} onChange={props.onChange} />
        </span>
    );
}

function App() {
    const [searchedInput, setSearchedInput] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedInput(event.target.value);
    };

    const allEpisodes = filterBySearchedInput(
        fetchedEpisodes,
        searchedInput
    ).map((episode) => <EpisodeCard key={episode.id} episode={episode} />);

    return (
        <>
            <div className="title">TV Shows Searcher</div>
            <div className="searchBar">
                <span className="search-annotation">Search:</span>
                <KeyboardControlledInput
                    value={searchedInput}
                    onChange={handleInputChange}
                />
                <span className="counter">
                    Showing:
                    {
                        filterBySearchedInput(fetchedEpisodes, searchedInput)
                            .length
                    }
                    /{fetchedEpisodes.length}
                </span>
            </div>

            <div className="app">{allEpisodes}</div>
            <Footer />
        </>
    );
}

export default App;
