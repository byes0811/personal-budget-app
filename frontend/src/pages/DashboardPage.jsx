import React, { useState, useEffect } from 'react';
import { useKeycloak } from '../context/KeycloakContext';
import api from '../services/api';
import StatsCards from '../components/StatsCards';
import ChartComponent from '../components/ChartComponent';
import TransactionsTable from '../components/TransactionsTable';
import MainLayout from '../components/MainLayout';

const DashboardPage = () => {
  const { authenticated } = useKeycloak();
  const [ transactions, setTransactions] = useState([]);
  const [ error, setError] = useState(null);

  const areaChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue',
      data: [0, 10000, 5000, 15000, 10000, 20000],
      borderColor: 'rgba(78, 115, 223, 1)',
      fill: true,
    }]
  };

  const barChartData = {
    labels: ['2016', '2017', '2018', '2019', '2020'],
    datasets: [{
      label: 'Revenue',
      data: [4215, 5312, 6251, 7841, 9821],
      backgroundColor: 'rgba(78, 115, 223, 0.5)',
    }]
  };

  useEffect(() => {
    if (authenticated) {
      api.get("/transactions")
        .then(response => setTransactions(response.data))
        .catch(error => {
          setError("Failed to fetch transactions.");
          console.error("Error fetching transactions:", error);
        });
    } else {
      setError("You are not authenticated. Please log in.");
    }
  }, [authenticated]);

  if (!authenticated) {
    return <p>Please log in to access your dashboard.</p>;
  }

  return (
    <MainLayout>
      <h1 className="mt-4">Dashboard</h1>
      <StatsCards transactions={transactions} />
      
      <div className="row mb-4">
        <div className="col-xl-6">
          <ChartComponent data={areaChartData} type="line" />
        </div>
        <div className="col-xl-6">
          <ChartComponent data={barChartData} type="bar" />
        </div>
      </div>

      <TransactionsTable transactions={transactions} error={error} />
    </MainLayout>
  );
};

export default DashboardPage;