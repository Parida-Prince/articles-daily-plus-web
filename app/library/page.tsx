import { articles } from "@/data/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const article = articles.find(
    (a) => a.id.toString() === id
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
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-zinc-400 mb-4">
          {article.category}
        </p>

        <h1 className="text-6xl font-bold leading-tight mb-10">
          {article.title}
        </h1>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 text-xl leading-10 text-zinc-200 whitespace-pre-line">
          {article.content}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Author Tone
            </h2>

            <p className="text-zinc-300 text-lg">
              {article.authorTone}
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Central Idea
            </h2>

            <p className="text-zinc-300 text-lg">
              {article.centralIdea}
            </p>
          </div>

        </div>

        <div className="mt-12 bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Paragraph-wise Main Ideas
          </h2>

          <div className="space-y-6">

            {article.paragraphInsights.map((item, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Paragraph {item.paragraph}
                </h3>

                <p className="text-zinc-300 leading-8">
                  {item.idea}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </main>
  );
}