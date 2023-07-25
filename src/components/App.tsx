import episodes from "../data/episodes.json";
import { EpisodeCard } from "./EpisodeCard";
import "./App.css";
import Footer from "./Footer";
import { useState } from "react";
import filterBySearchedInput from "../util/filterBySearchedInput";

interface KeyboardControlledInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function KeyboardControlledInput(
    props: KeyboardControlledInputProps
): JSX.Element {
    return (
        <>
            <input value={props.value} onChange={props.onChange} />
        </>
    );
}

function App() {
    const [searchedInput, setSearchedInput] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedInput(event.target.value);
    };

    const allEpisodes = filterBySearchedInput(episodes, searchedInput).map(
        (episode) => <EpisodeCard key={episode.id} episode={episode} />
    );

    return (
        <>
            <div className="title">Game of Thrones Searcher</div>
            <div className="searchBar">
                <span className="search-annotation">Search: </span>
                <KeyboardControlledInput
                    value={searchedInput}
                    onChange={handleInputChange}
                />
            </div>
            <div className="app">{allEpisodes}</div>
            <Footer />
        </>
    );
}

export default App;
