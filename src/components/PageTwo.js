export default function PageTwo(props) {
  const { formattedSalary } = props;

  return (
    <div className="page">
      <h1>Page Two! {formattedSalary}</h1>
    </div>
  );
}
