import type { Locale } from "@/i18n/routing";

export interface LocalizedString {
  en: string;
  ja: string;
}

export interface GameData {
  slug: string;
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  embedPath: string;
  category: string;
  releaseDate: string;
}

export const games: GameData[] = [
  {
    slug: "otedama-flyaway",
    name: "Otedama Flyaway",
    tagline: {
      en: "Launch the beanbag and reach the goal!",
      ja: "お手玉を飛ばしてゴールを目指せ！",
    },
    description: {
      en: "Pull and launch the beanbag like a slingshot! A physics puzzle game where you climb platforms to reach the goal basket.",
      ja: "パチンコのようにお手玉を引っ張って発射！足場を登ってゴールの籠を目指す物理パズルゲームです。",
    },
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

// Helper function to get localized string
export function getLocalized(str: LocalizedString, locale: Locale): string {
  return str[locale];
}
