import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Psychology of Delayed Gratification",
    category: "Psychology",
    readTime: "8 min read",
    difficulty: "Moderate",
  },
  {
    id: 2,
    title: "Why Civilizations Collapse Slowly",
    category: "History",
    readTime: "10 min read",
    difficulty: "Difficult",
  },
  {
    id: 3,
    title: "Attention Spans in the Digital Age",
    category: "Technology",
    readTime: "7 min read",
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "The Economic Logic of Luxury Brands",
    category: "Economics",
    readTime: "9 min read",
    difficulty: "Moderate",
  },
];

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl font-bold mb-4">
          Reading Library
        </h1>

        <p className="text-zinc-400 text-xl mb-14">
          Curated CAT-style reading passages designed to improve
          comprehension, focus, and reading stamina.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
            >
              <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-8 hover:border-zinc-700 transition cursor-pointer">

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-sm px-3 py-1 bg-zinc-900 rounded-full text-zinc-300">
                    {article.category}
                  </span>

                  <span className="text-sm text-zinc-500">
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-3xl font-semibold leading-snug mb-6">
                  {article.title}
                </h2>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">
                    Difficulty: {article.difficulty}
                  </span>

                  <span className="text-white">
                    Read →
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  );
}