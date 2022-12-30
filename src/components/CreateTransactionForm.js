import { useEffect, useState } from 'react';
import axios from '../config/axios';
import { useTransaction } from '../contexts/TransactionContext';
import Input from './input';
import RadioButton from './RadioButton';
import Select from './Select';

export default function CreateTransactionForm({ onClose }) {
  const { createTransaction } = useTransaction();

  const [input, setInput] = useState({
    type: 'EXPENSE',
    payee: '',
    categoryId: '',
    amount: '',
    date: '',
  });

  const [categories, setCategories] = useState({
    EXPENSE: [],
    INCOME: [],
  });

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get('/categories');
      const EXPENSE = res.data.categories.filter(el => el.type === 'EXPENSE');
      const INCOME = res.data.categories.filter(el => el.type === 'INCOME');
      setCategories({
        EXPENSE,
        INCOME,
      });
      setInput({
        ...input,
        categoryId: input.type === 'EXPENSE' ? EXPENSE[0].id : INCOME[0].id,
      });
    };
    fetchCategory();
  }, []);

  const handleInputChange = e => {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };

    if (e.target.name === 'type') {
      newInput.categoryId = categories[e.target.value][0].id;
    }

    setInput(newInput);
  };

  const hnadleSubmitForm = e => {
    e.preventDefault();
    // validate input
    // check error and setError
    // no error createTransaction
  };

  return (
    <div className="bg-white p-3 rounded-2">
      <form onSubmit={hnadleSubmitForm}>
        <div className="row g-3">
          <div className="col-12">
            <RadioButton
              name="type"
              value={input.type}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-6">
            <Input
              name="payee"
              label="Payee"
              value={input.payee}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-6">
            <Select
              categories={categories[input.type]}
              name="categoryId"
              value={input.categoryId}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-6">
            <Input
              name="amount"
              label="Amount"
              value={input.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-6">
            <Input
              name="date"
              label="Date"
              type="date"
              value={input.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <div className="d-flex gap-3">
              <button className="btn btn-primary">Save</button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
