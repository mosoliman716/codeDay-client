import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const ProjectOverview = ({ projects }) => {
  const source = Array.isArray(projects) ? projects : [];

  const counts = { Idea: 0, InProgress: 0, Completed: 0 };

  source.forEach((p) => {
    const state = (p.status || p.label || "").toString().toLowerCase();
    if (state.includes("idea")) counts.Idea += 1;
    else if (state.includes("in progress")) counts.InProgress += 1;
    else if (state.includes("completed")) counts.Completed += 1;
  });

  const labels = ["Idea", "In Progress", "Completed"];
  const data = {
    labels,
    datasets: [
      {
        label: "Projects",
        data: [counts.Idea, counts.InProgress, counts.Completed],
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
        borderColor: ["#4caf50", "#ffeb3b", "#f44336"],
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
      tooltip: { intersect: true },
    },
  };

  return (
    <div style={{ width: "100%", height: 320 }} className="p-15 mt-4">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProjectOverview;
