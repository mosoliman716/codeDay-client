import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProblemChart = ({ problems }) => {
  const defaultData = [
    { label: "Easy", count: 15 },
    { label: "Medium", count: 8 },
    { label: "Hard", count: 4 },
  ];

  const source =
    Array.isArray(problems) && problems.length ? problems : defaultData;

  const labels = source.map((p) => p.label);
  const data = {
    labels,
    datasets: [
      {
        label: "Easy",
        data: source.map((p) => (p.label === "Easy" ? p.count : 0)),
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
      },
     {
        label: "Medium",
        data: source.map((p) => (p.label === "Medium" ? p.count : 0)),
        backgroundColor: "yellow",
        borderColor: "yellow",
        borderWidth: 1,
      },
        {
        label: "Hard",
        data: source.map((p) => (p.label === "Hard" ? p.count : 0)),
        backgroundColor: "red",
        borderColor: "red",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: { grid: { display: true } },
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ width: "100%", height: 320 }} className="p-8 mt-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProblemChart;
