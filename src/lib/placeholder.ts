function hashString(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const palettes: [string, string][] = [
  ["#f7e3c6", "#ecc078"],
  ["#f4d8c8", "#dd9c7b"],
  ["#eee7cd", "#cbca8b"],
  ["#f8ddb8", "#eeb35f"],
  ["#f2d2c6", "#d68a6f"],
  ["#e4e9d4", "#b3c692"],
  ["#f6ddd0", "#e0a884"],
  ["#efe5cf", "#d3b877"],
];

export function gradientFor(seed: string): string {
  const [from, to] = palettes[hashString(seed) % palettes.length];
  return `linear-gradient(135deg, ${from}, ${to})`;
}

export function monogram(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}
