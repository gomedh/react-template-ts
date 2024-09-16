/* eslint-disable @typescript-eslint/no-explicit-any */
import { AgGridReact } from 'ag-grid-react';
import useFetchExpenses from '../hooks/useFetchExpenses';
import {EXPENSE_HEADING, LOADING, ERROR} from '../utils/constants'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../styles/expenseTable.css'

const ExpenseTable = () => {
  const { expenses, loading, error } = useFetchExpenses();

  // Defining the Ag-grid columns, as per the documentation
  const columnDefs = [
    { headerName: "Date", field: "date", valueFormatter: (params: any) => new Date(params.value).toLocaleDateString() },
    { headerName: "Merchant", field: "merchant" },
    { headerName: "Amount", field: "amount", valueFormatter: (params: any) => `$${params.value}` },
    { headerName: "Category", field: "category" },
    { headerName: "Description", field: "description" },
    { headerName: "Status", field: "status" }
  ];

  // Loading state
  if (loading) return <div>{LOADING}</div>;
  // Error state
  if (error) return <div>{ERROR}: {error.message}</div>;

  return (
    <div className="expense-container">
      <h2 className="expense-heading">{EXPENSE_HEADING}</h2>
      <hr className="divider" />
      {/* Need to give inline styles as ag-grid table is not viewbale if styles given via class */}
      <div className="ag-theme-alpine expense-table" style={{ height: 400, width: '80%'}}>
        <AgGridReact
          rowData={expenses}
          columnDefs={columnDefs}
          defaultColDef={{ flex: 1, resizable: true }}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};
export default ExpenseTable;