import IEpisode from "../interfaces/IEpisode";

function filterBySearchedInput(
    arr: IEpisode[],
    searchedInput: string
): IEpisode[] {
    const filteredArr = arr.filter(
        (episodeInfo) =>
            episodeInfo.name
                .toLowerCase()
                .includes(searchedInput.toLowerCase()) ||
            episodeInfo.summary
                .toLowerCase()
                .includes(searchedInput.toLowerCase())
    );
    return filteredArr;
}

export default filterBySearchedInput;
