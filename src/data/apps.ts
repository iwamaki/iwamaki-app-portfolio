export interface AppData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  screenshots: string[];
  features: string[];
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
    tagline: "AI-powered note-taking made simple",
    description:
      "NoteAppは、シンプルで使いやすいノートアプリです。AI機能を活用して、メモの作成や整理をより効率的に行えます。ローカル保存で安心、Googleアカウントでのログインで追加機能も利用可能です。",
    icon: "/apps/noteapp/icon.png",
    screenshots: [
      "/apps/noteapp/screenshot1.png",
      "/apps/noteapp/screenshot2.png",
    ],
    features: [
      "シンプルで直感的なUI",
      "AI機能でメモ作成をサポート",
      "ローカル保存で安心",
      "ワンタイム購入モデル（サブスク不要）",
      "Googleアカウント連携で追加機能",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.iwamaki.noteapp",
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
