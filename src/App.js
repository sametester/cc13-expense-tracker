import CreateButton from './components/CreateButtons';
import CreateTransactionForm from './components/CreateTransactionForm';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import SummaryList from './components/SummaryList';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="container p-4" style={{ maxWidth: 768 }}>
      <div className="d-flex flex-column gap-3">
        <CreateButton />
        <CreateTransactionForm />
        <SummaryList />
        <Filter />
        <Pagination />
        <TransactionList />
        <footer
          className="text-white-50 text-center"
          style={{ fontSize: '0.75rem' }}
        >
          Copyright © 2018 Flyinggiraffe. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
