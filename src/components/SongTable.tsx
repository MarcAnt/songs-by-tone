import { SongsType } from "./SongSearch";
import SongTableRow from "./SongTableRow";

const SongTable = ({ matches }: { matches: SongsType }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tonos</th>
          <th>Acordes</th>
        </tr>
      </thead>
      <tbody>
        {matches.length > 0 &&
          matches.map((match, index) => (
            <SongTableRow
              key={index}
              names={match.name}
              tones={match.tones}
              chords={match.chords}
            />
          ))}
      </tbody>
    </table>
  );
};

export default SongTable;
