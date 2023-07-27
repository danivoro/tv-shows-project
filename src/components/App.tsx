import { useEffect, useState } from "react";
import { EpisodeCard } from "./EpisodeCard";
import "./App.css";
import Footer from "./Footer";
import filterBySearchedInput from "../util/filterBySearchedInput";
import IEpisode from "../interfaces/episode";

interface KeyboardControlledInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
    const [fetchedEpisodes, setFetchedEpisodes] = useState<IEpisode[]>([]);
    const [loading, setLoading] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedInput(event.target.value);
    };

    useEffect(() => {
        async function getDataFromAPI() {
            const response = await fetch(
                "https://api.tvmaze.com/shows/527/episodes"
            );
            const jsonBody = await response.json();
            setFetchedEpisodes(jsonBody);
            setLoading(false);
        }

        //reinsuring that this is run only once, on mount.
        getDataFromAPI();
    }, []);

    const allEpisodes = filterBySearchedInput(
        fetchedEpisodes,
        searchedInput
    ).map((episode) => <EpisodeCard key={episode.id} episode={episode} />);

    return (
        <>
            <div className="title">TV Shows Searcher</div>
            <div className="searchBar">
                <span className="series-selector">
                    <label htmlFor="series">Choose a Show: </label>

                    <select name="series" id="series">
                        <option value="The Simpsons">The Simpsons</option>
                        <option value="The Sopranos">The Sopranos</option>
                        <option value="Game of Thrones">Game of Thrones</option>
                    </select>
                </span>
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
            {loading ? (
                <p className="loading">Loading...</p>
            ) : (
                <div className="app">{allEpisodes}</div>
            )}
            <Footer />
        </>
    );
}

export default App;
