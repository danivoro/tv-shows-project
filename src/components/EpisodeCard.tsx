import IEpisode from "../interfaces/episode";
import cleanString from "../util/cleanString";
import padNumber from "../util/padNumber";
import "./episodeCard.css";

interface EpisodeCardProps {
    key: number;
    episode: IEpisode;
}

export function EpisodeCard(props: EpisodeCardProps): JSX.Element {
    const e = props.episode;
    const paddedSeasonNumber = padNumber(e.season)
    const paddedEpisodeNumber = padNumber(e.number)
    const cleanedSummary = cleanString(e.summary)

    return (
        <div className="card-container">
            <div className="episode-heading">
                {e.name} S{paddedSeasonNumber}E{paddedEpisodeNumber}
            </div>
            <div className="episode-image">
                <img src={e.image.medium} alt={e.name} />
            </div>
            <div className="episode-description">{cleanedSummary}</div>
        </div>
    );
}
