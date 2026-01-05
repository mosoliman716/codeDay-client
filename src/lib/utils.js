// Minimal `cn` helper to join class names and support objects/arrays
export function cn(...inputs) {
  return inputs
    .flatMap((input) => {
      if (!input) return [];
      if (typeof input === "string") return input.split(/\s+/);
      if (Array.isArray(input)) return input;
      if (typeof input === "object")
        return Object.keys(input).filter((k) => input[k]);
      return [];
    })
    .join(" ")
    .trim();
}

export default cn;
