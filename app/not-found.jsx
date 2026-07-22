import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Unique Pin",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-panel" aria-labelledby="not-found-title">
        <p className="not-found-kicker">404</p>
        <h1 id="not-found-title">Page Not Found</h1>
        <p>
          The page may have moved, or the link may be outdated. Continue to the
          main product catalog or request help from our team.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="btn btn-primary">Home</Link>
          <Link href="/products" className="btn btn-outline">Products</Link>
          <Link href="/contact" className="btn btn-yellow">Get Quote</Link>
        </div>
      </section>
    </main>
  );
}
