import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}

        <div className="mb-20">

          <div className="mb-6 inline-flex items-center gap-2 border border-zinc-800 rounded-full px-5 py-2 text-sm text-zinc-300">
            🔥 Daily CAT Reading Practice
          </div>

          <h1 className="text-7xl font-bold leading-tight max-w-5xl mb-8">
            Train Your Reading Mind for CAT.
          </h1>

          <p className="text-zinc-400 text-2xl leading-relaxed max-w-3xl mb-12">
            Read carefully curated CAT-style passages with paragraph-wise insights,
            author tone analysis, and structured comprehension breakdowns.
          </p>

          <div className="flex gap-4">

            <Link href="/library">
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
                Start Reading
              </button>
            </Link>

            <Link href="/pricing">
              <button className="border border-zinc-700 px-8 py-4 rounded-full text-lg hover:bg-zinc-900 transition">
                View Plans
              </button>
            </Link>

          </div>

        </div>

        {/* FEATURES */}

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              Daily RC Practice
            </h2>

            <p className="text-zinc-400 leading-8">
              Build consistency with carefully selected CAT-level reading passages every day.
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              Deep Analysis
            </h2>

            <p className="text-zinc-400 leading-8">
              Understand paragraph flow, author tone, central ideas, and inference patterns.
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              CAT-Focused
            </h2>

            <p className="text-zinc-400 leading-8">
              Designed specifically for CAT aspirants preparing for VARC and RC sections.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}