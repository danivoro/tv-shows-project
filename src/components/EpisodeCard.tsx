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
    const paddedSeasonNumber = padNumber(e.season);
    const paddedEpisodeNumber = padNumber(e.number);
    let cleanedSummary = cleanString(e.summary, "<p>");
    cleanedSummary = cleanString(cleanedSummary, "</p>");
    cleanedSummary = cleanString(cleanedSummary, "<br>");
    cleanedSummary = cleanString(cleanedSummary, "<br />");
    cleanedSummary = cleanString(cleanedSummary, "<b>");
    cleanedSummary = cleanString(cleanedSummary, "</b>");
    cleanedSummary = cleanString(cleanedSummary, "</i>");
    cleanedSummary = cleanString(cleanedSummary, "<i>");

    return (
        <div className="card-container">
            <div className="episode-heading">
                {e.name}{" "}
                <div className="episode-number">
                    S{paddedSeasonNumber}E{paddedEpisodeNumber}
                </div>
            </div>
            <div className="episode-image">
                <img src={e.image.medium} alt={e.name} />
            </div>
            <div className="episode-description">{cleanedSummary}</div>
        </div>
    );
}
