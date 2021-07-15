const SongTableRow = ({
  names,
  chords,
  tones,
}: {
  names: string;
  chords: string[];
  tones: string[];
}) => {
  return (
    <tr>
      <td>{names}</td>
      <td>{tones.map((tones) => tones)}</td>
      <td>{chords.map((chord) => chord)}</td>
    </tr>
  );
};

export default SongTableRow;
