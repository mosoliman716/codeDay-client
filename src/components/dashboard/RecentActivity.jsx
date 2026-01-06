
function RecentActivity({ activities }) {
    const defaultActivities = [
        { description: "Solved problem 'Two Sum'", timestamp: "2024-06-20 10:30 AM"},
        { description: "Completed project 'Weather App'", timestamp: "2024-06-19 02:15 PM"},
        { description: "Finished course 'React Basics'", timestamp: "2024-06-18 05:45 PM"},
    ]
    
    return(
        <div className="p-4 space-y-4 w-full">
            {(activities && activities.length ? activities : defaultActivities).map((activity, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-md w-full">
                    <p className="text-white">{activity.description}</p>
                    <p className="text-sm text-[#94a3b8]">{activity.timestamp}</p>
                </div>
            ))}
        </div>
    )
}

export default RecentActivity;