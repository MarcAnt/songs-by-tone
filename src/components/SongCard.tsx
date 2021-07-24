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
    <div className="card-item">
      <p className={tones.length > 1 ? "one-more-tone " : ""}>
        {tones.join(", ")}
      </p>
      <div>
        <h4>{names}</h4>
        <span>{chords.join(", ")}</span>
      </div>
    </div>
  );
};

export default SongCard;
