export default function PageTwo(props) {
  const { multiplier } = props;

  return (
    <div className="page">
      {/* add scrolling animation on multiplier here */}
      <h2>
        Jeff Bezos's annual earnings are {multiplier.toLocaleString()} times
        larger than yours.
      </h2>

      <h3>
        In other words, you spending $1, or Bezos spending $
        {multiplier.toLocaleString()}, puts the same dent in your wallets.
      </h3>

      <h3>
        To truly appreciate this absurd difference in your spending power, let's
        take a look at a few examples...
      </h3>
    </div>
  );
}
