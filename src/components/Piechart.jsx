// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const Piechart = ({completed=9,pending=10,overdue=6}) => {
  // Default data
  const chartData = {
    labels: ['completed', 'pending', 'overdue'],
    datasets: [
      {
        data: [completed, pending, overdue],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#00FFFF'
          
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#00FFFF'
         
        ]
      }
    ]
  };

  return (
    <div className='flex m-auto justify-center items-center lg:w-2/5 w-2/4'>
      <Pie data={chartData} />
    </div>
  );
};

export default Piechart;
