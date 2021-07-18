import { SongsType } from "./SongSearch";
import SongTableRow from "./SongTableRow";

const SongTable = ({ matches }: { matches: SongsType }) => {
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Nombre</th>
    //       <th>Tonos</th>
    //       <th>Acordes</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {matches.length > 0 &&
    //       matches.map((match, index) => (
    //         <SongTableRow
    //           key={index}
    //           names={match.name}
    //           tones={match.tones}
    //           chords={match.chords}
    //         />
    //       ))}
    //   </tbody>
    // </table>

    <div className="card-grid">
      <div className="card-item">
        <h4>Song Name - Name of the Songs</h4>
        <p>Bb</p>
        <span>Bb, Dm, Ab7, F7</span>
      </div>
      <div className="card-item">
        <h4>Song Name - Name of the Songs</h4>
        <p>Bb</p>
        <span>Bb, Dm, Ab7, F7</span>
      </div>
      <div className="card-item">
        <h4>Song Name - Name of the Songs</h4>
        <p>Bb</p>
        <span>Bb, Dm, Ab7, F7</span>
      </div>
      <div className="card-item">
        <h4>Song Name - Name of the Songs</h4>
        <p>Bb</p>
        <span>Bb, Dm, Ab7, F7</span>
      </div>
      <div className="card-item">
        <h4>Song Name - Name of the Songs</h4>
        <p>Bb</p>
        <span>Bb, Dm, Ab7, F7</span>
      </div>
      <div className="card-item">
        <h4>Song Name - Name of the Songs</h4>
        <p>Bb</p>
        <span>Bb, Dm, Ab7, F7</span>
      </div>
    </div>
  );
};

export default SongTable;
