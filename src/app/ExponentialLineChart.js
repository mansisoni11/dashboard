"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, TimeScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';


ChartJS.register(LineElement, TimeScale, LinearScale, Title, Tooltip, Legend);

const ExponentialLineChart = () => {
  const generateRandomData = (numPoints) => {
    let data = [];
    let lastValue = 0;
    let startTime = Date.now();
    
    for (let i = 0; i < numPoints; i++) {
      lastValue += Math.random() * 10; 
      let timestamp = new Date(startTime + i * 60000); // 1 minute intervals
      data.push({ x: timestamp, y: lastValue });
    }
    return data;
  };

  const data = {
    datasets: [
      {
        label: 'Random Growth',
        data: generateRandomData(20),
        borderColor: '#CFEF00',
        backgroundColor: '#CFEF004D',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: () => '', 
        },
      },
    },
    scales: {
      x: {
        type: 'time', 
        time: {
          unit: 'minute', 
        },
        title: {
          display: true,
          text: 'Time',
          color: '#FFE100', // Matching your design
        },
        ticks: {
          color: '#FFE100', // Matching your design
        },
      },
      y: {
        position: 'right', 
        title: {
          display: true,
          text: 'Value',
          color: '#FFE100', // Matching your design
        },
        ticks: {
          callback: (value) => value.toFixed(2),
          color: '#FFE100', // Matching your design
        },
      },
    },
  };


  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default ExponentialLineChart;
