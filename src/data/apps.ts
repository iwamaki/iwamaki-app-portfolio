import type { Locale } from "@/i18n/routing";

export interface LocalizedString {
  en: string;
  ja: string;
}

export interface AppData {
  slug: string;
  name: string;
  tagline: LocalizedString;
  description: LocalizedString;
  icon: string;
  screenshots: string[];
  features: LocalizedString[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  websiteUrl?: string;
  termsUrl?: string;
  privacyUrl?: string;
  contactEmail: string;
  category: string;
  releaseDate: string;
  lastUpdated: string;
}

export const apps: AppData[] = [
  {
    slug: "noteapp",
    name: "NoteApp",
    tagline: {
      en: "AI-powered note-taking made simple",
      ja: "AIでシンプルにメモを取る",
    },
    description: {
      en: "NoteApp is a simple and easy-to-use note app. With AI features, you can create and organize notes more efficiently. Your data is stored locally for security, and additional features are available with Google account login.",
      ja: "NoteAppは、シンプルで使いやすいノートアプリです。AI機能を活用して、メモの作成や整理をより効率的に行えます。ローカル保存で安心、Googleアカウントでのログインで追加機能も利用可能です。",
    },
    icon: "/apps/noteapp/icon.png",
    screenshots: [
      "/apps/noteapp/screenshot1.png",
      "/apps/noteapp/screenshot2.png",
    ],
    features: [
      {
        en: "Simple and intuitive UI",
        ja: "シンプルで直感的なUI",
      },
      {
        en: "AI-powered note creation support",
        ja: "AI機能でメモ作成をサポート",
      },
      {
        en: "Secure local storage",
        ja: "ローカル保存で安心",
      },
      {
        en: "One-time purchase model (no subscription)",
        ja: "ワンタイム購入モデル（サブスク不要）",
      },
      {
        en: "Additional features with Google account",
        ja: "Googleアカウント連携で追加機能",
      },
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=app.iwamaki.noteapp",
    termsUrl: "https://api.noteapp.iwamaki.app/terms",
    privacyUrl: "https://api.noteapp.iwamaki.app/privacy",
    contactEmail: "noteapp@iwamaki.app",
    category: "Productivity",
    releaseDate: "2025-11-01",
    lastUpdated: "2025-11-28",
  },
];

export function getAppBySlug(slug: string): AppData | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllAppSlugs(): string[] {
  return apps.map((app) => app.slug);
}

// Helper function to get localized string
export function getLocalized(str: LocalizedString, locale: Locale): string {
  return str[locale];
}
