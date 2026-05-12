import { articles } from "@/data/articles";

export default function ArticlePage({
  params,
}: {
  params: { id: string };
}) {

  const articleId = parseInt(params.id);

  const article = articles.find(
    (item) => item.id === articleId
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

        <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4">
          {article.category}
        </p>

        <h1 className="text-6xl font-bold leading-tight mb-10">
          {article.title}
        </h1>

        <div className="text-zinc-400 mb-10">
          {article.readTime}
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 whitespace-pre-line text-xl leading-10 text-zinc-200">

          {article.content}

        </div>

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

        <div className="mt-16">

          <h2 className="text-4xl font-bold mb-10">
            Paragraph-wise Main Ideas
          </h2>

          <div className="space-y-6">

            {article.paragraphInsights.map((point, index) => (

              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
              >

                <h3 className="text-2xl font-semibold mb-3">
                  Paragraph {index + 1}
                </h3>

                <p className="text-zinc-300 leading-8 text-lg">
                  {point}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}