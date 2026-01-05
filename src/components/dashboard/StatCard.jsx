export function StatCard({ title, value, trend, className, icon: Icon }) {
  return (
    <div className={className}>
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-md bg-[#090616] text-secondary border border-[#06b6d4] w-50 md:w-100 h-50 flex flex-col">
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
