import Globe from "../svgs/globe.svg";

export default function PageSix() {
  return (
    <div className="page page-five">
      <div className="row flex-row">
        <img id="globe" src={Globe} alt="A globe" />
      </div>
      <div className="row flex-row">
        <div className="column flex-column">
          <h3>But now, let's look at You vs. the rest of the world...</h3>
        </div>
      </div>
    </div>
  );
}
