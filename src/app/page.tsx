import Link from "next/link";

export default function Home() {
  const navItems = [
    { href: "/apps", label: "Apps" },
    { href: "/games", label: "Games" },
    // { href: "/blog", label: "Blog" },
    // { href: "/works", label: "Works" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background-secondary">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-center px-4">
          <span className="font-serif text-sm text-foreground-muted">
            iwamaki.app
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        {/* Description */}
        <p className="mb-10 font-serif text-sm text-foreground-muted">
          つくったもの
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6">
          {navItems.map((item, index) => (
            <div key={item.href} className="flex flex-col items-center">
              <Link
                href={item.href}
                className="font-serif text-base text-foreground-secondary transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <div className="mt-6 h-px w-20 border-t border-dashed border-border-light" />
              )}
            </div>
          ))}
        </nav>

        {/* Contact */}
        <div className="mt-16">
          <a
            href="mailto:contact@iwamaki.app"
            className="font-serif text-sm text-foreground-muted transition-colors hover:text-foreground-secondary"
          >
            Contact
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <p className="text-center font-serif text-xs text-foreground-muted">
          © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
