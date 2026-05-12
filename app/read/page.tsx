import { articles } from "@/data/articles";

export default function ReadPage() {
  const article = articles[0];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <div className="mb-8">
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3">
            {article.category}
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">

          <div className="text-[20px] leading-9 text-zinc-200 whitespace-pre-line font-light">
            {article.content}
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">
              Author Tone
            </h2>

            <p className="text-zinc-300 leading-7">
              {article.authorTone}
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">
              Central Idea
            </h2>

            <p className="text-zinc-300 leading-7">
              {article.centralIdea}
            </p>
          </div>

        </div>

        <div className="mt-10 bg-zinc-950 border border-zinc-800 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Paragraph-wise Main Ideas
          </h2>

          <div className="space-y-5">

            {article.paragraphInsights.map(
              (item: any, index: number) => (
                <div
                  key={index}
                  className="border border-zinc-800 rounded-xl p-5"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    Paragraph {item.paragraph}
                  </h3>

                  <p className="text-zinc-300 leading-7">
                    {item.idea}
                  </p>
                </div>
              )
            )}

          </div>

        </div>

      </div>
    </main>
  );
}