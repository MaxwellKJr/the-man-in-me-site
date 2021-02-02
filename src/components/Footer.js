const Footer = () => {
  return (
    <footer
      id="footer"
      className="center-align"
      style={{ position: "absolute", bottom: "0", left: "0", width: "100%" }}
    >
      <div className="container">
        <p>
          Website made with <span className="amber-text">❤</span> by{" "}
          <a
            href="http://mjcodes.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="amber-text text-lighten-2"
          >
            MJ Codes
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
