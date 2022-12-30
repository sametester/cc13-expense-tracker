import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../config/axios';

const TransactionContext = createContext();

export default function TransactionContextProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState({
    searchTerm: '',
    month: '',
    year: '',
  });
  const [pagination, setPagination] = useState({
    pageLimit: 10,
    currentPage: 1,
  });

  const updatePagination = updateValue => {
    // { pageLimit: 25 }
    setPagination({ ...pagination, ...updateValue });
  };

  // pageLimit: 10, currentPage: 1 => slice(0, 10)
  // pageLimit: 10, currentPage: 2 => slice(10, 20)
  // pageLimit: 10, currentPage: 3 => slice(20, 30)
  // pageLimit: p, currentPage: c => slice(p * (c - 1), p * c)

  // numPage = Math.ceil(total / pageLimit)

  useEffect(() => {
    const fetchTransaction = async () => {
      const res = await axios.get('/transactions');
      setTransactions(res.data.transactions);
    };
    fetchTransaction();
  }, []);

  const createTransaction = input => {
    // axios.post('/transactions', input)
    // updata state transaction
  };

  let filteredTransactions = transactions.filter(el => true);

  let displayTransactions = filteredTransactions.slice(
    pagination.pageLimit * (pagination.currentPage - 1),
    pagination.pageLimit * pagination.currentPage
  );

  return (
    <TransactionContext.Provider
      value={{
        transactions: displayTransactions,
        filteredTransactions,
        createTransaction,
        pagination,
        updatePagination,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  return useContext(TransactionContext);
}
