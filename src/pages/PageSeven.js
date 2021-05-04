import ReactTooltip from "react-tooltip";

export default function PageSeven() {
  return (
    <div className="page page-seven globe-background">
      <div className="row flex-row">
        <div data-aos="zoom-in-left" className="column flex-column">
          <h3>
            According to the World Bank, recent estimates for global poverty are
            that at least{" "}
            <strong className="black">10%&nbsp;of&nbsp;the&nbsp;world</strong>,
            or over{" "}
            <strong className="black">750&nbsp;million&nbsp;people</strong>,
            live in extreme poverty on{" "}
            <strong
              className="dotted"
              data-for="poverty"
              data-tip="This figure is adjusted for factors such as exchange rate,
              purchasing power, or farmers that can subside partially off of their
              own food production."
            >
              $1.90
            </strong>{" "}
            or less a day.
            <ReactTooltip id="poverty" effect="solid" place="bottom" />
          </h3>
          {/* <h5>
            * This figure is adjusted for factors such as exchange rate,
            purchasing power, or farmers that can subside partially off of their
            own food production.
          </h5> */}
        </div>
      </div>
      <div className="row flex-row"></div>
    </div>
  );
}
