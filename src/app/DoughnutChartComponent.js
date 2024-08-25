"use client";

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const generateDoughnutData = () => {
  return {
    labels: ['Red', 'Blue', 'Yellow'], // Labels for each segment
    datasets: [
      {
        label: 'Doughnut Chart',
        data: [59, 30, 11], // Data points for each segment
        backgroundColor: [
          '#ABFAFF', // Color for the first segment
          '#D171FF', // Color for the second segment
          '#CC9969', // Color for the third segment
        ],
        borderColor: [
          '#ABFAFF', // Border color matching the background color
          '#D171FF',
          '#CC9969',
        ],
        borderWidth: 1,
      },
    ],
  };
};

const DoughnutChartComponent = () => {
  const data = generateDoughnutData();

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // Position legend at the bottom
        labels: {
          generateLabels: (chart) => {
            return chart.data.labels.map((label, i) => ({
              text: `${label} ${chart.data.datasets[0].data[i]}%`,
              fillStyle: chart.data.datasets[0].backgroundColor[i],
              strokeStyle: chart.data.datasets[0].borderColor[i],
              lineWidth: chart.data.datasets[0].borderWidth,
            }));
          },
          boxWidth: 12, // Width of the legend box
          padding: 20, // Space between legend items
          usePointStyle: true, // Use point style for legend boxes
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`; // Display percentage in tooltip
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container" style={{ height: '30vh', width: '30vw', position: 'relative' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChartComponent;
