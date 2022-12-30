export default function Select({ categories, name, value, onChange }) {
  return (
    <>
      <label className="form-label">Category</label>
      <select
        className="form-select"
        name={name}
        value={value}
        onChange={onChange}
      >
        {categories.map(el => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </>
  );
}
