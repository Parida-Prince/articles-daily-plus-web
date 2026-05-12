import { articles } from "../../../data/articles";

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

  const paragraphs = article.content
    .split("\n\n")
    .filter((p) => p.trim() !== "");

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="mb-6 flex items-center gap-4">

          <span className="px-4 py-2 rounded-full bg-zinc-900 text-zinc-300 text-sm">
            {article.category}
          </span>

          <span className="text-zinc-500">
            {article.readTime}
          </span>

          <span className="text-zinc-500">
            Difficulty: {article.difficulty}
          </span>

        </div>

        <h1 className="text-7xl font-bold leading-tight mb-14">
          {article.title}
        </h1>

        <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-10 mb-14">

          <div className="space-y-10">

            {paragraphs.map((paragraph, index) => (
              <div key={index}>

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-sm text-zinc-400">
                    P{index + 1}
                  </div>

                  <div className="h-px bg-zinc-800 flex-1" />

                </div>

                <p className="text-2xl leading-relaxed text-zinc-200">
                  {paragraph}
                </p>

              </div>
            ))}

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">

          <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Author Tone
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              {article.tone}
            </p>
          </div>

          <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-5">
              Central Idea
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              {article.summary}
            </p>
          </div>

        </div>

        <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Paragraph-wise Main Idea
          </h2>

          <div className="space-y-6">

            {paragraphs.map((_, index) => (
              <div
                key={index}
                className="border border-zinc-900 rounded-2xl p-6"
              >

                <h3 className="text-xl font-semibold mb-3">
                  Paragraph {index + 1}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Main idea explanation for paragraph {index + 1}.
                  Replace this with actual paragraph summaries while
                  uploading future articles.
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}