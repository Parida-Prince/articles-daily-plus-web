import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-8">
          <span className="border border-zinc-800 px-5 py-2 rounded-full text-sm text-zinc-300">
            🔥 1 Day Reading Streak
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight max-w-5xl">
          Train Your Reading
          <br />
          Mind for CAT.
        </h1>

        <p className="text-zinc-400 text-xl mt-10 max-w-3xl leading-relaxed">
          Read carefully curated CAT-style passages, understand tone
          and paragraph flow, and build a powerful daily reading habit.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/library">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition">
              Start Reading
            </button>
          </Link>

          <Link href="/pricing">
            <button className="border border-zinc-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-900 transition">
              View Plans
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-24">
          
          <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Daily Reading Habit
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Read 4 carefully selected CAT-style passages every day
              and develop long-form reading stamina naturally.
            </p>
          </div>

          <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              CAT-Focused Analysis
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Understand paragraph flow, author tone, central idea,
              and difficult vocabulary in context.
            </p>
          </div>

          <div className="border border-zinc-900 bg-zinc-950 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Curated Reading Library
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Access a growing archive of high-quality reading passages
              across philosophy, psychology, economics, science, and culture.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}