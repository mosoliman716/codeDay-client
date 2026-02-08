import { useState } from "react";
import { Plus } from "lucide-react";
import CourseCard from "../components/courses/CourseCard.jsx";
import AddCourse from "../components/courses/AddCourse.jsx";
import { api } from "../configs/api.js";


export default function Courses() {
  const [courses, setCourses] = useState([])
  const [platform, setPlatform] = useState("all");
  const [category, setCategory] = useState("all");
  const [tab, setTab] = useState("not-started");
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    category: "Frontend",
    status: "not-started",
    platform: "Udemy",
  });

  const addCourse = async () => {
    setShowAddCourse(false);
    try {
      const response = await api.post("/courses/add", newCourse, {
        withCredentials: true,
      });
      setCourses([...courses, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const filterCourses = (status) => {
    return courses.filter((c) => {
      const matchesStatus = c.status === status;
      const matchesPlatform = platform === "all" || c.platform === platform;
      const matchesCategory = category === "all" || c.category === category;
      return matchesStatus && matchesPlatform && matchesCategory;
    });
  };

  const platforms = [...new Set(courses.map((c) => c.platform))];
  const categories = [...new Set(courses.map((c) => c.category))];

  return (
    <div className="space-y-8 mt-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-white font-bold">Courses</h1>
          <p className="text-muted-foreground mt-1 text-white">
            Track your learning progress
          </p>
        </div>
        <button className="bg-[#06b6d4] text-white hover:bg-[#06b6d4]/90 px-4 py-2 rounded flex items-center" onClick={() => setShowAddCourse(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 text-white">
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="bg-gray-700 rounded-lg p-2"
        >
          <option value="all" className="text-white">
            All Platforms
          </option>
          {platforms.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-700 rounded-lg p-2"
        >
          <option value="all" className="text-white">
            All Categories
          </option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs */}
      <div className="w-full">
        <div className=" p-1 flex gap-2 rounded">
          <button
            type="button"
            onClick={() => setTab("not-started")}
            className={`px-3 text-white py-2 bg-gray-700 rounded text-sm ${tab === "not-started" ? "bg-gray-800" : ""}`}
          >
            Not Started ({filterCourses("Not Started").length})
          </button>

          <button
            type="button"
            onClick={() => setTab("in-progress")}
            className={`px-3 py-1 text-white bg-gray-700 rounded text-sm ${tab === "in-progress" ? "bg-gray-800" : ""}`}
          >
            In Progress ({filterCourses("In Progress").length})
          </button>

          <button
            type="button"
            onClick={() => setTab("completed")}
            className={`px-3 py-1 text-white bg-gray-700 rounded text-sm ${tab === "completed" ? "bg-gray-800" : ""}`}
          >
            Completed ({filterCourses("Completed").length})
          </button>
        </div>

        <div className="mt-6">
          {tab === "not-started" && (
            <div className="space-y-4">
              {filterCourses("Not Started").map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          {tab === "in-progress" && (
            <div className="space-y-4">
              {filterCourses("In Progress").map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          {tab === "completed" && (
            <div className="space-y-4">
              {filterCourses("Completed").map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>

      {showAddCourse && (
        <AddCourse setShowAddCourse={setShowAddCourse} newCourse={newCourse} setNewCourse={setNewCourse} addCourse={addCourse} />
      )}
    </div>
  );
}
