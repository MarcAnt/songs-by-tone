import { FaGithub } from "react-icons/fa";
import { FooterWrapper } from "./Footer.style";
export const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
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
      </p>
    </FooterWrapper>
  );
};
