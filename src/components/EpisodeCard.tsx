import IEpisode from "../interfaces/episode";

interface EpisodeCardProps {
    key: number;
    episode: IEpisode;
}

export function EpisodeCard(props: EpisodeCardProps): JSX.Element {
    const e = props.episode;
    return (
        <>
            <div>
                {e.name} S{e.season}E{e.number}
            </div>
            <div>
                <img src={e.image.medium} alt={e.name} />
            </div>
            <div>{e.summary}</div>
        </>
    );
}
