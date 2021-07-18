const today = new Date();
const YEAR = today.getFullYear();
const Footer = () => {
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
        <span>version: 1.0.0</span>
      </p>
    </footer>
  );
};
export default Footer;
