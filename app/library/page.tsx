import Link from "next/link";
import { articles } from "@/data/articles";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">

          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
            Articles Daily+
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Reading Library
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl leading-9">
            Carefully curated CAT-style reading passages designed
            to improve comprehension, inference ability, tone
            detection, and analytical reading skills.
          </p>

        </div>

        {/* ARTICLES GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {articles.map((article) => (

            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-600 transition-all duration-300"
            >

              {/* TOP ROW */}
              <div className="flex items-center justify-between mb-6">

                <span className="text-sm text-zinc-500 uppercase tracking-wider">
                  {article.category}
                </span>

                <span className="text-sm text-zinc-500">
                  {article.readTime}
                </span>

              </div>

              {/* TITLE */}
              <h2 className="text-3xl font-semibold leading-snug mb-8">
                {article.title}
              </h2>

              {/* BOTTOM ROW */}
              <div className="flex items-center justify-between">

                <span className="text-zinc-400">
                  Premium CAT Reading
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