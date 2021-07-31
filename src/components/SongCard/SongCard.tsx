import { CardItem } from "./SongCard.styles";

const SongCard = ({
  names,
  chords,
  tones,
}: {
  names: string;
  chords: string[];
  tones: string[];
}) => {
  return (
    <CardItem>
      <p className={tones.length > 1 ? "one-more-tone " : ""}>
        {tones.join(", ")}
      </p>
      <div>
        <h4>{names}</h4>
        <span>{chords.join(", ")}</span>
      </div>
    </CardItem>
  );
};

export default SongCard;
