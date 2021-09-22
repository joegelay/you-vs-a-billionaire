import OnePercent from "../svgs/one-percent.svg";
import FivePercent from "../svgs/five-percent.svg";
import ReactTooltip from "react-tooltip";

export default function PageEight() {
  return (
    <div className="page page-eight globe-background">
      <div className="row flex-row">
        <div data-aos="flip-up" className="column flex-column col-1-margin">
          <img
            id="one-percent"
            className="page-eight-image"
            src={OnePercent}
            alt="A pie chart showing 1 percent."
          />
          <h2>
            If you earn more than <strong>$59,000</strong> per year, you're in
            the richest{" "}
            <strong
              className="black dotted"
              data-for="one-percent"
              data-tip="Data sourced from the 'How Rich Am I?' calculator at GivingWhatWeCan.org"
            >
              1&nbsp;percent
            </strong>{" "}
            of the world's population.
            <ReactTooltip id="one-percent" effect="solid" place="bottom" />
          </h2>
        </div>

        <div data-aos="flip-up" className="column flex-column col-1-margin">
          <img
            id="five-percent"
            className="page-eight-image"
            src={FivePercent}
            alt="A pie chart showing 5 percent."
          />
          <h2>
            If you earn at least <strong>$29,000</strong>, you're in the richest{" "}
            <strong
              className="black dotted"
              data-for="five-percent"
              data-tip="Data sourced from the 'How Rich Am I?' calculator at GivingWhatWeCan.org"
            >
              5&nbsp;percent
            </strong>
            .
            <ReactTooltip id="five-percent" effect="solid" place="bottom" />
          </h2>
        </div>
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-delay="300"
        className="row flex-row"
      >
        <blockquote className="callout quote EN">
          Because we are comparatively so rich, the amount by which we can
          benefit others is vastly greater than the amount by which we can
          benefit ourselves.
          <br />
          <br />
          <cite>
            {" "}
            -- William MacAskill, co-founder of the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.effectivealtruism.org/"
            >
              Effective Altruism
            </a>{" "}
            movement.
          </cite>
        </blockquote>
      </div>
    </div>
  );
}
