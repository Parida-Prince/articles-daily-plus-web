import Link from "next/link";
import { articles } from "@/data/articles";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <h1 className="text-5xl font-bold mb-4">
            Reading Library
          </h1>

          <p className="text-zinc-400 text-lg">
            Daily CAT-level reading passages with complete analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-7"
            >

              <div className="flex items-center justify-between mb-5">

                <span className="text-sm uppercase tracking-widest text-zinc-500">
                  {article.category}
                </span>

                <span className="text-sm text-zinc-500">
                  {article.readTime}
                </span>

              </div>

              <h2 className="text-3xl font-bold leading-tight mb-5">
                {article.title}
              </h2>

              <div className="flex items-center justify-between">

                <span className="text-zinc-400">
                  Difficulty: {article.difficulty}
                </span>

                {article.premium ? (
                  <Link
                    href="/pricing"
                    className="bg-white text-black px-5 py-2 rounded-full font-semibold"
                  >
                    Unlock
                  </Link>
                ) : (
                  <Link
                    href={`/article/${article.id}`}
                    className="text-white"
                  >
                    Read →
                  </Link>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}