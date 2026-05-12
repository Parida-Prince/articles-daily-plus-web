import Link from "next/link";
import { dailyArticles } from "../data/daily";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <div className="mb-6 inline-flex items-center gap-2 border border-zinc-800 rounded-full px-5 py-2 text-sm text-zinc-300">
            🔥 1 Day Reading Streak
          </div>

          <h1 className="text-7xl font-bold leading-none tracking-tight max-w-5xl mb-8">
            Train Your Reading Mind for CAT.
          </h1>

          <p className="text-2xl text-zinc-400 leading-relaxed max-w-3xl mb-12">
            Read carefully curated CAT-style passages,
            understand tone and paragraph flow,
            and build a powerful daily reading habit.
          </p>

          <div className="flex gap-4">
            <Link href="/library">
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium">
                Reading Library
              </button>
            </Link>

            <Link href="/pricing">
              <button className="border border-zinc-700 px-8 py-4 rounded-full text-lg">
                Go Premium
              </button>
            </Link>
          </div>

        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-5xl font-bold mb-3">
                Today’s Reading Set
              </h2>

              <p className="text-zinc-400 text-lg">
                4 carefully selected CAT-style articles daily.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {dailyArticles.map((article: any) => (
              <div
                key={article.id}
                className="border border-zinc-900 bg-zinc-950 rounded-3xl p-8"
              >

                <div className="flex items-center gap-3 mb-5">

                  <span className="text-sm px-3 py-1 bg-zinc-900 rounded-full text-zinc-300">
                    {article.category}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {article.readTime}
                  </span>

                  {article.isFree ? (
                    <span className="text-xs bg-green-900 text-green-300 px-3 py-1 rounded-full">
                      FREE
                    </span>
                  ) : (
                    <span className="text-xs bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full">
                      PREMIUM
                    </span>
                  )}

                </div>

                <h3 className="text-3xl font-semibold leading-snug mb-6">
                  {article.title}
                </h3>

                <div className="flex items-center justify-between">

                  <span className="text-zinc-400">
                    Difficulty: {article.difficulty}
                  </span>

                  {article.isFree ? (
                    <button className="text-white">
                      Read →
                    </button>
                  ) : (
                    <button className="text-yellow-400">
                      Premium Only
                    </button>
                  )}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}