import OnePercent from "../svgs/one-percent.svg";
import FivePercent from "../svgs/five-percent.svg";

export default function PageEight() {
  return (
    <div className="page page-eight globe-background">
      <div className="row flex-row">
        <div className="column flex-column col-1-margin">
          <img
            id="one-percent"
            className="page-eight-image"
            src={OnePercent}
            alt="A pie chart showing 1 percent."
          />
          <h2>
            If you earn more than <strong>$52,000</strong> per year, you're in
            the richest <strong className="black">1&nbsp;percent</strong> of the
            world's population.
          </h2>
        </div>

        <div className="column flex-column col-1-margin">
          <img
            id="five-percent"
            className="page-eight-image"
            src={FivePercent}
            alt="A pie chart showing 5 percent."
          />
          <h2>
            If you earn at least <strong>$28,000</strong>, you're in the richest
            <strong className="black"> 5&nbsp;percent</strong>.
          </h2>
        </div>
      </div>
      <div className="row flex-row">
        <h2>
          As William MacAskill writes in{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.effectivealtruism.org/doing-good-better/"
          >
            Doing Good Better
          </a>
          , "Because we are comparatively so rich, the amount by which we can
          benefit others is vastly greater than the amount by which we can
          benefit ourselves."
        </h2>
      </div>
    </div>
  );
}
