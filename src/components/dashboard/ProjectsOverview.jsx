import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const ProjectOverview = ({ projects }) => {
  const defaultData = [
    { label: "idea", count: 15 },
    { label: "In Progress", count: 8 },
    { label: "Completed", count: 4 },
  ];

  const source =
    Array.isArray(projects) && projects.length ? projects : defaultData;

  const labels = source.map((p) => p.label);
  const data = {
    labels,
    datasets: [
      {
        label: "Projects",
        data: source.map((p) => p.count),
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
