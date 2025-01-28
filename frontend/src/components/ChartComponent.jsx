import React from 'react';
import { Card } from 'react-bootstrap';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const ChartComponent = ({ data, type }) => {
  return (
    <Card className="mb-4">
      <Card.Header>
        <Card.Body>
          {type === 'line' ? <Line data={data} /> : <Bar data={data} />}
        </Card.Body>
      </Card.Header>
    </Card>
  );
};

export default ChartComponent;