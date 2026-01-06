export function StatCard({ title, value, trend, icon: Icon }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg hover:-translate-y-5 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-md bg-gray-800 text-white w-50 md:w-100 h-50 flex flex-col">
          <p className="text-sm text-muted-foreground font-medium text-white">
            {title}
          </p>
          <p className="text-3xl font-bold mt-2 text-foreground text-white">
            {value}
          </p>
          {trend && (
            <p
              className={`text-sm mt-2 font-medium text-[#06b6d4] ${
                trend.isPositive ? "text-success" : "text-destructive"
              }`}
            >
              {trend.isPositive ? "+" : "-"}
              {Math.abs(trend.value)}% from last week
            </p>
          )}
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-[#06b6d4] border border-black/10 flex items-center justify-center mt-auto">
              <Icon className="w-8 h-8 text-black" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
