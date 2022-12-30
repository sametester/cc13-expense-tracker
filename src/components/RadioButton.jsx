export default function RadioButton({ name, onChange, value }) {
  return (
    <div className="btn-group">
      <input
        type="radio"
        className="btn-check"
        id="cbx-expense"
        name={name}
        value="EXPENSE"
        onChange={onChange}
        checked={value === 'EXPENSE'}
      />
      <label className="btn btn-outline-danger" htmlFor="cbx-expense">
        Expense
      </label>
      <input
        type="radio"
        className="btn-check"
        id="cbx-income"
        name={name}
        value="INCOME"
        onChange={onChange}
        checked={value === 'INCOME'}
      />
      <label className="btn btn-outline-success" htmlFor="cbx-income">
        Income
      </label>
    </div>
  );
}
