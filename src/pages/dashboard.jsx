import { Code2, FolderKanban, GraduationCap, Award } from "lucide-react";
import { StatCard } from "../components/dashboard/StatCard.jsx";

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
    </div>
  );
}
