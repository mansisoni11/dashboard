"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement);

const generateData = () => {
  const labels = Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`);
  const data = labels.map(() => Math.floor(Math.random() * 1000));

  return {
    labels,
    datasets: [
      {
        label: 'Random Data',
        data,
        borderColor: '#CFEF00', // Color of the line
        backgroundColor: (context) => {
          // Create gradient
          const chart = context.chart;
          const ctx = chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, 'rgba(207, 239, 0, 0.5)');
          gradient.addColorStop(1, 'rgba(207, 239, 0, 0)');
          return gradient;
        },
        borderWidth: 2,
        fill: true, // Ensure the area under the line is filled with the gradient
      },
    ],
  };
};

const LineChartComponent = () => {
  const data = generateData();

  // Chart options
  const options = {
    plugins: {
      legend: {
        display: true,
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
        title: {
          display: true,
          text: 'Points',
        },
      },
      y: {
        position: 'right', // Move y-axis to the right side
        title: {
          display: true,
          text: 'Value',
        },
        ticks: {
          callback: (value) => value.toFixed(2),
        },
      },
    },
    elements: {
      line: {
        borderColor: '#CFEF00',
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '30vh' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;
