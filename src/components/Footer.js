export default function Footer() {
  return (
    <div className="footer">
      <h5 className="left">&copy; {new Date().getFullYear()}</h5>
      <h5 className="middle">
        Site by{" "}
        <a
          href="https://joegelay.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joe Gelay
        </a>
      </h5>
      <h5 className="right">
        Inspired by{" "}
        <a
          href="https://www.templetons.com/brad/billg.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brad Templeton
        </a>{" "}
      </h5>
    </div>
  );
}
