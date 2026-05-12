export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-6xl font-bold mb-6">
          Upgrade Your Reading
        </h1>

        <p className="text-zinc-400 text-xl mb-16 max-w-3xl mx-auto">
          Daily CAT-style passages with deep analysis, paragraph insights,
          author tone breakdowns, and structured comprehension practice.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* FREE */}

          <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">

            <h2 className="text-3xl font-bold mb-4">
              Free
            </h2>

            <p className="text-5xl font-bold mb-8">
              ₹0
            </p>

            <ul className="space-y-4 text-zinc-300 mb-10 text-left">
              <li>✓ 1 free article daily</li>
              <li>✓ CAT-level reading</li>
              <li>✓ Basic practice</li>
              <li>✓ Limited access</li>
            </ul>

            <button className="w-full border border-zinc-700 py-4 rounded-full">
              Current Plan
            </button>

          </div>

          {/* WEEKLY */}

          <div className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950">

            <div className="mb-4 inline-block bg-zinc-800 text-white px-4 py-1 rounded-full text-sm">
              STARTER
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Weekly
            </h2>

            <p className="text-5xl font-bold mb-8">
              ₹29
              <span className="text-lg font-normal text-zinc-400">
                /week
              </span>
            </p>

            <ul className="space-y-4 text-zinc-300 mb-10 text-left">
              <li>✓ 4 premium articles daily</li>
              <li>✓ CAT RC structure</li>
              <li>✓ Author tone analysis</li>
              <li>✓ Paragraph insights</li>
              <li>✓ Reading streak access</li>
            </ul>

            <a
              href="https://t.me/astiflingsoul"
              target="_blank"
              className="block w-full border border-white py-4 rounded-full font-semibold text-center hover:bg-white hover:text-black transition"
            >
              Get Weekly Access
            </a>

          </div>

          {/* MONTHLY */}

          <div className="border border-white rounded-3xl p-10 bg-white text-black">

            <div className="mb-4 inline-block bg-black text-white px-4 py-1 rounded-full text-sm">
              MOST POPULAR
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Premium
            </h2>

            <p className="text-5xl font-bold mb-8">
              ₹149
              <span className="text-lg font-normal">
                /month
              </span>
            </p>

            <ul className="space-y-4 mb-10 text-left">
              <li>✓ 4 premium CAT articles daily</li>
              <li>✓ 500–600 word RC passages</li>
              <li>✓ Paragraph-wise main ideas</li>
              <li>✓ Author tone analysis</li>
              <li>✓ CAT RC style structure</li>
              <li>✓ Difficulty analysis</li>
              <li>✓ Daily reading streak system</li>
              <li>✓ Full premium library access</li>
            </ul>

            <a
              href="https://t.me/astiflingsoul"
              target="_blank"
              className="block w-full bg-black text-white py-4 rounded-full font-semibold text-center hover:opacity-90 transition"
            >
              Get Premium Access
            </a>

          </div>

        </div>

        <div className="mt-16 text-zinc-500 text-sm">
          After payment, premium access will be activated manually within a few minutes via Telegram.
        </div>

      </div>

    </main>
  );
}