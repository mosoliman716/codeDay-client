

export default function Progress({
  value = 0,
  height = 8,
  ...props
}) {
  return (
    <div
      className={`w-full bg-gray-800 rounded overflow-hidden`}
      style={{ height }}
      {...props}
    >
      <div
        className="h-full bg-[#06b6d4] transition-all"
        style={{ width: `${Math.max(0, Math.min(100, Number(value) || 0))}%` }}
      />
    </div>
  );
}
