import { articles } from "@/data/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const article = articles.find(
    (a) => a.id === Number(id)
  );

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        Article not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <div className="mb-6">
          <span className="text-zinc-400">
            {article.category}
          </span>
        </div>

        <h1 className="text-6xl font-bold leading-tight mb-8">
          {article.title}
        </h1>

        <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-8 mb-10">
          <p className="text-zinc-300 leading-relaxed text-lg whitespace-pre-line">
            {article.content}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Author Tone
            </h2>

            <p className="text-zinc-400">
              {article.tone}
            </p>
          </div>

          <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Central Idea
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              {article.summary}
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}