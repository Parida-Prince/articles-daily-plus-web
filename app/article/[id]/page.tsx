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
        <h1 className="text-4xl font-bold">
          Article not found.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <div className="max-w-4xl mx-auto">

        <div className="mb-6 text-gray-400">
          {article.category} • {article.readTime}
        </div>

        <h1 className="text-6xl font-bold leading-tight mb-12">
          {article.title}
        </h1>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 text-xl leading-[2.2rem] whitespace-pre-line">
          {article.content}
        </div>

        <div className="mt-16 space-y-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                Author Tone
              </h2>

              <p className="text-gray-300">
                {article.tone}
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                Central Idea
              </h2>

              <p className="text-gray-300">
                {article.centralIdea}
              </p>
            </div>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Paragraph-wise Main Ideas
            </h2>

            <div className="space-y-4">

              {article.paragraphSummary.map(
                (point, index) => (
                  <div
                    key={index}
                    className="border border-zinc-800 rounded-2xl p-5"
                  >
                    <p className="text-sm text-gray-500 mb-2">
                      Paragraph {index + 1}
                    </p>

                    <p className="text-lg text-gray-300">
                      {point}
                    </p>
                  </div>
                )
              )}

            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-4">
              Conclusion
            </h2>

            <p className="text-lg text-gray-300 leading-8">
              {article.conclusion}
            </p>

          </div>

        </div>
      </div>
    </main>
  );
}