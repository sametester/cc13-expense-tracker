import { useTransaction } from '../contexts/TransactionContext';

export default function Pagination() {
  const {
    pagination: { pageLimit, currentPage },
    updatePagination,
    filteredTransactions,
  } = useTransaction();

  const totalRecord = filteredTransactions.length;
  const fromRecord = pageLimit * (currentPage - 1) + 1;
  const toRecord =
    pageLimit * currentPage > totalRecord
      ? totalRecord
      : pageLimit * currentPage;

  const numPage = Math.ceil(totalRecord / pageLimit);

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <select
          type="text"
          className="form-select form-select-sm"
          style={{ width: 70 }}
          value={pageLimit}
          onChange={e => updatePagination({ pageLimit: e.target.value })}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className="text-white-50" style={{ fontSize: '0.75rem' }}>
          Showing {fromRecord} to {toRecord} of {totalRecord} transactions
        </span>
      </div>
      <nav>
        <ul className="pagination pagination-sm mb-0">
          <li className="page-item disabled">
            <a href="/" className="page-link">
              <span>&laquo;</span>
            </a>
          </li>
          {new Array(numPage).fill().map((el, idx) => (
            <li className="page-item">
              <a href="/" className="page-link">
                <span>{idx + 1}</span>
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="/" className="page-link">
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
