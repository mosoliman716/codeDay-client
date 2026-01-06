import { Code2, FolderKanban, GraduationCap, Award } from "lucide-react";
import { StatCard } from "../components/dashboard/StatCard.jsx";
import ProblemChart from "../components/dashboard/ProblemChart.jsx";
import ProjectOverview from "../components/dashboard/ProjectsOverview.jsx";
import RecentActivity from "../components/dashboard/RecentActivity.jsx";

export default function Dashboard() {
  return (
    <div className="space-y-8 mt-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-muted-foreground mt-1 text-white">Welcome back! Here's your progress overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Solved Problems"
          value={120}
          icon={Code2}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Active Projects"
          value={3}
          icon={FolderKanban}
        />
        <StatCard
          title="Courses Completed"
          value={5}
          icon={GraduationCap}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Certificates"
          value={8}
          icon={Award}
        />
      </div>
      {/*Problem chart*/}
      <div className="bg-gray-800 p-4 rounded-lg h-90">
        <h2 className="text-xl font-semibold text-white mb-4">Problem Solving Progress</h2>
        <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <ProblemChart />
        </div>
      </div>
      {/* projects visualization */}
      <div className="bg-gray-800 p-4 rounded-lg h-90">
        <h2 className="text-xl font-semibold text-white mb-4">Projects Overview</h2>
        <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <ProjectOverview />
        </div>
      </div>
      {/* Recent activities */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Activites</h2>
        <div className=" bg-gray-700 rounded-lg flex items-center justify-center">
            <RecentActivity />
        </div>
      </div>
    </div>
  );
}
