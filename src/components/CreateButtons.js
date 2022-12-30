export default function CreateButton({ onClick }) {
  return (
    <button className="btn btn-outline-warning w-100" onClick={onClick}>
      Create Transaction
    </button>
  );
}
