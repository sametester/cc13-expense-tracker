export default function Input({ name, label, type = 'text', value, onChange }) {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        name={name}
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
