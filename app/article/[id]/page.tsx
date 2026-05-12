import { articles } from "@/data/articles";

export default function ArticlePage({
  params,
}: {
  params: { id: string };
}) {

  const article = articles.find(
    (a) => a.id === Number(params.id)
  );

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-5xl font-bold">
          Article not found.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">

      <div className="max-w-4xl mx-auto">

        {/* CATEGORY */}
        <p className="text-zinc-500 uppercase tracking-[0.3em] mb-6">
          {article.category}
        </p>

        {/* TITLE */}
        <h1 className="text-6xl font-bold leading-tight mb-8">
          {article.title}
        </h1>

        {/* META */}
        <div className="flex items-center gap-6 text-zinc-400 mb-14">
          <span>{article.readTime}</span>
        </div>

        {/* ARTICLE */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 text-xl leading-10 text-zinc-200 whitespace-pre-line">

          {article.content}

        </div>

        {/* ANALYSIS */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Author Tone
            </h2>

            <p className="text-zinc-300 text-lg leading-8">
              {article.tone}
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Central Idea
            </h2>

            <p className="text-zinc-300 text-lg leading-8">
              {article.centralIdea}
            </p>
          </div>

        </div>

        {/* PARAGRAPH INSIGHTS */}
        <div className="mt-16">

          <h2 className="text-4xl font-bold mb-10">
            Paragraph-wise Main Ideas
          </h2>

          <div className="space-y-6">

            {article.paragraphInsights.map((item, index) => (

              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
              >

                <h3 className="text-2xl font-semibold mb-3">
                  Paragraph {index + 1}
                </h3>

                <p className="text-zinc-300 leading-8 text-lg">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}