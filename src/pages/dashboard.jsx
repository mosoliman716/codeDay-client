import React, { useEffect, useState } from "react";
import { Code2, FolderKanban, GraduationCap, Award } from "lucide-react";
import { StatCard } from "../components/dashboard/StatCard.jsx";
import ProblemChart from "../components/dashboard/ProblemChart.jsx";
import ProjectOverview from "../components/dashboard/ProjectsOverview.jsx";
import { api } from "../configs/api.js";
import Quotes from "../components/dashboard/quotes.jsx";

export default function Dashboard() {
  const [problemsData, setProblemsData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [certificatesData, setCertificatesData] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await api.get("/problems/get", {
          withCredentials: true,
        });
        setProblemsData(response.data || []);
      } catch (err) {
        console.error(err);
      }
    };
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects/get", {
          withCredentials: true,
        });
        setProjectsData(response.data || []);
      } catch (err) {
        console.error(err);
      }
    };
    const fetchCourses = async () => {
      try {
        const response = await api.get("/courses/get", {
          withCredentials: true,
        });
        setCoursesData(response.data || []);
      } catch (err) {
        console.error(err);
      }
    };
    const fetchCertificates = async () => {
      try {
        const response = await api.get("/certificates/get", {
          withCredentials: true,
        });
        setCertificatesData(response.data || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProblems();
    fetchProjects();
    fetchCourses();
    fetchCertificates();
  }, []);


  return (
    <div className="space-y-8 mt-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-muted-foreground mt-1 text-white">
          Welcome back! Here's your progress overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Solved Problems"
          value={problemsData.filter((p) => p.status === "Solved").length}
          icon={Code2}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Active Projects"
          value={projectsData.filter((p) => p.status === "In Progress").length}
          icon={FolderKanban}
        />
        <StatCard
          title="Courses enrolled"
          value={coursesData.length}
          icon={GraduationCap}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Certificates"
          value={certificatesData.length}
          icon={Award}
        />
      </div>
      {/*Problem chart*/}
      <div className="bg-gray-800 p-4 rounded-lg h-90">
        <h2 className="text-xl font-semibold text-white mb-4">
          Problem Solving Progress
        </h2>
        <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
          <ProblemChart
            problems={problemsData.filter((p) => p.status === "Solved")}
          />
        </div>
      </div>
      {/* projects visualization */}
      <div className="bg-gray-800 p-4 rounded-lg h-90">
        <h2 className="text-xl font-semibold text-white mb-4">
          Projects Overview
        </h2>
        <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
          <ProjectOverview projects={projectsData} />
        </div>
      </div>
      <Quotes />
    </div>
  );
}
