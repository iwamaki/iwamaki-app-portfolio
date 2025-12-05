import { notFound } from "next/navigation";
import Link from "next/link";
import { getGameBySlug, getAllGameSlugs } from "@/data/games";
import ShareButtons from "@/components/ShareButtons";

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGameSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Game Not Found" };
  return {
    title: game.name,
    description: game.description,
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const shareUrl = `https://iwamaki.app/games/${slug}`;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background-secondary">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link
            href="/games"
            className="font-serif text-sm text-foreground-secondary transition-colors hover:text-foreground"
          >
            ← Games
          </Link>
          <span className="font-serif text-sm text-foreground-muted">
            iwamaki.app
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col">
        {/* Game Title & Share */}
        <div className="mx-auto w-full max-w-5xl px-4 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-serif text-lg text-foreground">{game.name}</h1>
              <p className="mt-1 text-sm text-foreground-secondary">
                {game.tagline}
              </p>
            </div>
            <ShareButtons url={shareUrl} title={game.name} />
          </div>
        </div>

        {/* Game Container */}
        <div className="flex flex-1 items-center justify-center px-4 pb-6">
          <div className="w-full max-w-4xl">
            <div className="relative aspect-[9/16] w-full max-w-md mx-auto overflow-hidden rounded border-2 border-border-light bg-background-card shadow-lg sm:aspect-[3/4] md:aspect-[4/3] md:max-w-full">
              <iframe
                src={game.embedPath}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen"
                title={game.name}
              />
            </div>

            {/* How to Play */}
            <div className="mt-6 text-center">
              <h2 className="font-serif text-sm text-foreground">How to Play</h2>
              <p className="mt-2 text-sm text-foreground-muted">
                {game.description}
              </p>
            </div>

            {/* Meta Info */}
            <p className="mt-4 text-center text-xs text-foreground-muted">
              {game.category} • {game.releaseDate} 公開
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-4">
        <p className="text-center font-serif text-xs text-foreground-muted">
          © {new Date().getFullYear()} iwamaki.app
        </p>
      </footer>
    </div>
  );
}
