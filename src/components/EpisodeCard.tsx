import IEpisode from "../interfaces/episode";
import "./EpisodeCard.css"

interface EpisodeCardProps {
    key: number;
    episode: IEpisode;
}

export function EpisodeCard(props: EpisodeCardProps): JSX.Element {
    const e = props.episode;
    return (
        <div className="card-container">
            <div className="episode-heading">
                {e.name} S{e.season}E{e.number}
            </div>
            <div>
                <img src={e.image.medium} alt={e.name} />
            </div>
            <div>{e.summary}</div>
        </div>
    );
}
