import { useEffect, useState } from "react";
import { EpisodeCard } from "./EpisodeCard";
import "./App.css";
import Footer from "./Footer";
import filterBySearchedInput from "../util/filterBySearchedInput";
import IEpisode from "../interfaces/IEpisode";
import showsData from "../data/shows.json";

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

showsData.sort((a, b) => a.name.localeCompare(b.name));

function App() {
    const [searchedInput, setSearchedInput] = useState("");
    const [fetchedEpisodes, setFetchedEpisodes] = useState<IEpisode[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentShow, setCurrentShow] = useState(showsData[0]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedInput(event.target.value);
    };

    const handleSelectShow = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentShow(showsData.find((show) => show.name === e.target.value)!);
    };

    useEffect(() => {
        async function getDataFromAPI() {
            const response = await fetch(
                "https://api.tvmaze.com/shows/" + currentShow.id + "/episodes"
            );
            const jsonBody = await response.json();
            setFetchedEpisodes(jsonBody);
            setLoading(false);
        }

        //reinsuring that this is run only once, on mount.
        getDataFromAPI();
    }, [currentShow]);

    const allEpisodes = filterBySearchedInput(
        fetchedEpisodes,
        searchedInput
    ).map((episode) => <EpisodeCard key={episode.id} episode={episode} />);

    return (
        <>
            <div className="title">TV Shows</div>
            <div className="searchBar">
                <span className="series-selector">
                    <label htmlFor="series">Choose a Show: </label>

                    <select
                        name="series"
                        id="series"
                        onChange={handleSelectShow}
                    >
                        {showsData.map((show) => (
                            <option key={show.id} value={show.name}>
                                {show.name}
                            </option>
                        ))}
                    </select>
                </span>
                <span className="search-annotation">Search episodes:</span>
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
