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
      <main className="min-h-screen bg-black text-white p-12">
        <h1 className="text-5xl font-bold">
          Article not found.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">

      <div className="max-w-4xl mx-auto">

        <div className="mb-10">

          <div className="flex items-center gap-4 mb-6">

            <span className="text-zinc-500 uppercase tracking-widest text-sm">
              {article.category}
            </span>

            <span className="text-zinc-500">
              {article.readTime}
            </span>

          </div>

          <h1 className="text-6xl font-bold leading-tight mb-8">
            {article.title}
          </h1>

          <div className="flex gap-6 text-zinc-400">

            <span>
              Difficulty: {article.difficulty}
            </span>

            <span>
              Tone: {article.authorTone}
            </span>

          </div>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 mb-12">

          <div className="space-y-5 text-[20px] leading-9 text-zinc-200">

            {article.content.split("\n\n").map((para, index) => (
              <p key={index}>
                {para}
              </p>
            ))}

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              Central Idea
            </h2>

            <p className="text-zinc-300 leading-8">
              {article.centralIdea}
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              Author Tone
            </h2>

            <p className="text-zinc-300 leading-8">
              {article.authorTone}
            </p>

          </div>

        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Paragraph-wise Main Ideas
          </h2>

          <div className="space-y-6">

            {article.paragraphInsights.map((item, index) => (
              <div
                key={index}
                className="border border-zinc-800 rounded-2xl p-6"
              >

                <h3 className="text-xl font-semibold mb-3">
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