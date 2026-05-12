import Link from "next/link";
import { articles } from "@/data/articles";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-6xl mx-auto">

        <div className="mb-16">

          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
            Reading Library
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            CAT Reading Library
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl leading-9">
            Improve comprehension, tone detection, inference skills,
            and reading endurance using carefully curated CAT-style passages.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {articles.map((article) => (

            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition block"
            >

              <div className="flex items-center justify-between mb-6">

                <span className="text-zinc-500 uppercase tracking-widest text-sm">
                  {article.category}
                </span>

                {article.premium && (
                  <span className="text-yellow-400 text-sm">
                    Premium
                  </span>
                )}

              </div>

              <h2 className="text-3xl font-semibold leading-snug mb-6">
                {article.title}
              </h2>

              <div className="flex items-center justify-between">

                <span className="text-zinc-500 text-sm">
                  {article.readTime}
                </span>

                <span className="text-white">
                  Read →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}