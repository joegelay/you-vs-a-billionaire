import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  RedditIcon,
  WhatsappIcon,
} from "react-share";

export default function SocialShareButtons() {
  const iconSize = 50;
  const url = "http://youvsabillionaire.com";
  const emailSubj = "Check out this website...";
  const quote =
    "In 2020, Jeff Bezos's net worth grew by an estimated $75 billion. See how you stack up.";
  return (
    <div className="row flex-row share-buttons-wrapper">
      <EmailShareButton url={url} subject={emailSubj} body={quote}>
        <EmailIcon size={iconSize} round="true"></EmailIcon>
      </EmailShareButton>
      <FacebookShareButton url={url} quote={quote}>
        <FacebookIcon size={iconSize} round="true"></FacebookIcon>
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={quote} summary={quote}>
        <LinkedinIcon size={iconSize} round="true"></LinkedinIcon>
      </LinkedinShareButton>
      <TwitterShareButton
        url={url}
        title={quote}
        hashtags={["billionaire", "inequality", "bezos"]}
      >
        <TwitterIcon size={iconSize} round="true"></TwitterIcon>
      </TwitterShareButton>
      <RedditShareButton url={url} title={quote}>
        <RedditIcon size={iconSize} round="true"></RedditIcon>
      </RedditShareButton>
      <WhatsappShareButton url={url} title={quote}>
        <WhatsappIcon size={iconSize} round="true"></WhatsappIcon>
      </WhatsappShareButton>
    </div>
  );
}
