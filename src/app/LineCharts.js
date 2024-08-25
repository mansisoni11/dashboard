"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement);

const generateData = () => {
  const labels = Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`);
  
  // Generate different data for each line
  const data1 = labels.map(() => Math.floor(Math.random() * 1000));
  const data2 = labels.map(() => Math.floor(Math.random() * 1000));
  const data3 = labels.map(() => Math.floor(Math.random() * 1000));

  return {
    labels,
    datasets: [
      {
        label: 'Line 1',
        data: data1,
        borderColor: '#EFFF3D',
        backgroundColor: (context) => {
          const chart = context.chart;
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'rgba(239, 255, 61, 0.3)');
          gradient.addColorStop(1, 'rgba(239, 255, 61, 0)');
          return gradient;
        },
        borderWidth: 2,
        fill: true,
      },
      {
        label: 'Line 2',
        data: data2,
        borderColor: '#3DFFA2',
        backgroundColor: (context) => {
          const chart = context.chart;
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'rgba(61, 255, 162, 0.3)');
          gradient.addColorStop(1, 'rgba(61, 255, 162, 0)');
          return gradient;
        },
        borderWidth: 2,
        fill: true,
      },
      {
        label: 'Line 3',
        data: data3,
        borderColor: '#FFA63D',
        backgroundColor: (context) => {
          const chart = context.chart;
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'rgba(255, 166, 61, 0.3)');
          gradient.addColorStop(1, 'rgba(255, 166, 61, 0)');
          return gradient;
        },
        borderWidth: 2,
        fill: true,
      },
    ],
  };
};

const LineCharts = () => {
  const data = generateData();

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '40vh', width: '80vw' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineCharts;
