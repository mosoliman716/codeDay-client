import { GraduationCap, ExternalLink, Trash2 } from "lucide-react";
import Progress from "../ui/progress.jsx";
import { api } from "../../configs/api.js";

function CourseCard({ course }) {
  
  const deleteCourse = async () => {
    try {
      const response = await api.delete("/courses/delete", {
        data: { _id: course._id },
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="glass-card p-5 hover:border-white transition-all animate-fade-in bg-gray-900 rounded-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center shrink-0 text-[#06b6d4]">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-medium text-white">{course.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-muted-foreground text-white">
                  {course.platform}
                </span>
                <span className="text-white">•</span>
                <span className="text-xs text-white">{course.category}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs bg-gray-700 text-white px-2 py-1 rounded`}
              >
                {course.progress}%
              </span>
              <button
                className="h-8 w-8 text-white hover:bg-red-600 rounded-lg p-2"
                onClick={() => deleteCourse()}
              >
                <Trash2 className="w-4 h-4" />
              </button>
              {course.url && (
                <button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 text-white">
            <Progress value={course.progress} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
