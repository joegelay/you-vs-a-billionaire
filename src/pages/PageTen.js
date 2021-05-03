import SocialShareButtons from "../components/SocialShareButtons";

export default function PageTen() {
  return (
    <div className="page page-ten globe-background">
      <div className="row flex-row">
        <div className="column flex-column">
          <h1>
            You might not be Billionaire Bezos, but you are extraordinarily rich
            to so many others.
          </h1>
          <h2>
            Want to learn more about how you can help improve the lives of
            millions?
          </h2>
          <h2>
            Visit{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.givewell.org/"
            >
              GiveWell.org
            </a>{" "}
            to donate to the planet's most effective charities.
          </h2>
          <h3>Share this page:</h3>
          <SocialShareButtons></SocialShareButtons>
        </div>
      </div>
    </div>
  );
}
