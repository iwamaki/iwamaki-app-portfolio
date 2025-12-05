export interface GameData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  embedPath: string;
  category: string;
  releaseDate: string;
}

export const games: GameData[] = [
  {
    slug: "otedama-flyaway",
    name: "Otedama Flyaway",
    tagline: "お手玉を飛ばしてゴールを目指せ！",
    description:
      "パチンコのようにお手玉を引っ張って発射！足場を登ってゴールの籠を目指す物理パズルゲームです。",
    embedPath: "/games/otedama-flyaway/index.html",
    category: "Puzzle",
    releaseDate: "2025-12",
  },
];

export function getGameBySlug(slug: string): GameData | undefined {
  return games.find((game) => game.slug === slug);
}

export function getAllGameSlugs(): string[] {
  return games.map((game) => game.slug);
}
