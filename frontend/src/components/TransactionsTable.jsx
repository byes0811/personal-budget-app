import React from 'react';
import DataTable from 'react-data-table-component';
import { Card } from 'react-bootstrap';

const columns = [
  { name: 'Type', selector: row => row.type },
  { name: 'Amount', selector: row => `$${row.amount}` },
  { name: 'Category', selector: row => row.category },
  { name: 'Date', selector: row => row.date },
];

const TransactionsTable = ({ transactions, error }) => {
  return (
    <Card className="mb-4">
      <Card.Header>
        Recent Transactions
      </Card.Header>
      <Card.Body>
        {error && <p className="text-danger">{error}</p>}
        {transactions.length === 0 ? (
          <p>No transactions to display.</p>
        ) : (
          <DataTable
            columns={columns}
            data={transactions}
            pagination
            responsive
            striped
            highlightOnHover
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default TransactionsTable;