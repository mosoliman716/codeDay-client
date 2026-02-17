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
  Legend,
);

const ProblemChart = ({ problems }) => {
  const source = Array.isArray(problems) ? problems : [];

  const counts = { Easy: 0, Medium: 0, Hard: 0 };

  source.forEach((p) => {
    const diff = (p.difficulty || p.label || "").toString().toLowerCase();
    if (diff.includes("easy")) counts.Easy += 1;
    else if (diff.includes("medium")) counts.Medium += 1;
    else if (diff.includes("hard")) counts.Hard += 1;
  });

  const labels = ["Easy", "Medium", "Hard"];
  const data = {
    labels,
    datasets: [
      {
        label: "Problems",
        data: [counts.Easy, counts.Medium, counts.Hard],
        backgroundColor: ["green", "yellow", "red"],
        borderColor: ["green", "yellow", "red"],
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
