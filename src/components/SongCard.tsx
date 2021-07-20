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
      <h4>{names}</h4>
      <p>{tones.join(", ")}</p>
      <span>{chords.join(", ")}</span>
    </div>
  );
};

export default SongCard;
