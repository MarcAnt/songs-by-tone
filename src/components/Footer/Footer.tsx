// const today = new Date();
// const YEAR = today.getFullYear();
import { FaGithub } from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        <a
          href="https://twitter.com/bymarcant"
          target="_blank"
          rel="noopener noreferrer"
        >
          @bymarcant
        </a>
        <a
          href="https://github.com/MarcAnt/songs-by-tone"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <span>version: 1.0.0</span>
      </p>
    </footer>
  );
};
export default Footer;
