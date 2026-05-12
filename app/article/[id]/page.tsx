const articles = [
  {
    id: 1,
    title: "The Psychology of Delayed Gratification",
    category: "Psychology",
    difficulty: "Moderate",
    tone: "Analytical and reflective",
    summary:
      "The passage explores how delayed gratification shapes long-term success and self-control.",

    content: `
Delayed gratification has long been considered one of the strongest predictors of future success. 
The ability to resist immediate pleasure in favor of long-term rewards requires not only discipline 
but also a certain degree of psychological maturity.

Researchers studying behavioral psychology often argue that modern digital environments have weakened 
our patience thresholds. Constant notifications, short-form content, and instant entertainment reduce 
our tolerance for delayed outcomes.

Yet societies continue to reward those capable of sustained focus. Students preparing for competitive 
examinations, athletes training for years, and entrepreneurs building companies all operate within systems 
where long-term effort precedes meaningful reward.

The paradox, however, is that while everyone intellectually understands the value of patience, far fewer 
individuals possess the emotional resilience necessary to practice it consistently.
    `,
  },

  {
    id: 2,
    title: "Why Civilizations Collapse Slowly",
    category: "History",
    difficulty: "Difficult",
    tone: "Historical and analytical",
    summary:
      "The passage discusses how civilizations decline gradually through institutional erosion.",

    content: `
History rarely records the collapse of civilizations as singular dramatic moments. More often, 
decline unfolds gradually through weakening institutions, economic instability, and declining civic trust.

Empires frequently appear strongest shortly before deterioration becomes irreversible. Their infrastructure 
remains visible, their armies operational, and their cultural influence widespread. Yet beneath the surface, 
administrative fatigue and social fragmentation quietly accumulate.

Historians often emphasize that civilizations collapse not because they encounter challenges, but because 
their systems lose the flexibility required to adapt effectively.

The eventual collapse therefore appears sudden only in retrospect. To those living through the transition, 
decline often feels incremental and almost invisible.
    `,
  },
];

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