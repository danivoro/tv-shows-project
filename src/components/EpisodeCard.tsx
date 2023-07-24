import IEpisode from "../interfaces/episode";

export function EpisodeCard(episode: IEpisode): JSX.Element {
    return (
        <>
            <div>
                {episode.name} S{episode.season}E{episode.number}
            </div>
            <div>
                <img src={episode.image.medium} alt={episode.name} />
            </div>
            <div>{episode.summary}</div>
        </>
    );
}
