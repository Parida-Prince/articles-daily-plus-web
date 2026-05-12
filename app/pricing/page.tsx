"use client";

export default function PricingPage() {

  return (

    <main className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center mb-24">

          <div className="inline-block px-5 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm mb-8">

            Simple Pricing

          </div>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-none mb-8">

            Build Your Daily Reading Habit.

          </h1>

          <p className="text-zinc-400 text-2xl leading-relaxed max-w-3xl mx-auto">

            Articles Daily+ helps CAT aspirants improve
            comprehension, reading stamina,
            and genre familiarity through structured daily reading.

          </p>

        </div>

        {/* PLANS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* FREE */}

          <div className="bg-zinc-950 border border-zinc-800 rounded-[36px] p-10">

            <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-6">

              Free

            </div>

            <h2 className="text-5xl font-bold mb-8">

              ₹0

            </h2>

            <div className="space-y-5 mb-12 text-zinc-300">

              <div>✓ 1 article daily</div>

              <div>✓ Basic reading insights</div>

              <div>✓ Genre-based reading</div>

              <div>✓ Reading streak tracking</div>

            </div>

            <button className="w-full py-4 rounded-full border border-zinc-700 text-white font-semibold">

              Current Plan

            </button>

          </div>

          {/* WEEKLY */}

          <div className="bg-zinc-950 border border-zinc-800 rounded-[36px] p-10 relative">

            <div className="absolute top-5 right-5 bg-zinc-800 text-white px-3 py-1 rounded-full text-xs font-semibold">

              QUICK START

            </div>

            <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-6">

              Weekly Pass

            </div>

            <div className="flex items-end gap-2 mb-8">

              <h2 className="text-5xl font-bold">

                ₹29

              </h2>

              <div className="text-zinc-500 mb-1">

                /7 days

              </div>

            </div>

            <div className="space-y-5 mb-12 text-zinc-300">

              <div>✓ 4 articles daily</div>

              <div>✓ Unlimited reading access</div>

              <div>✓ All genres unlocked</div>

              <div>✓ Reading insights access</div>

            </div>

            <a
              href="https://rzp.io/"
              target="_blank"
              className="block w-full py-4 rounded-full bg-white text-black text-center font-semibold hover:scale-[1.02] transition"
            >

              Get Weekly Pass

            </a>

          </div>

          {/* MONTHLY */}

          <div className="bg-white text-black rounded-[36px] p-10 relative overflow-hidden">

            <div className="absolute top-5 right-5 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">

              MOST POPULAR

            </div>

            <div className="uppercase tracking-[0.2em] text-sm mb-6 opacity-70">

              Premium

            </div>

            <div className="flex items-end gap-2 mb-8">

              <h2 className="text-5xl font-bold">

                ₹99

              </h2>

              <div className="opacity-70 mb-1">

                /month

              </div>

            </div>

            <div className="space-y-5 mb-12 opacity-80">

              <div>✓ 4 curated articles daily</div>

              <div>✓ Full archive access</div>

              <div>✓ Advanced reading insights</div>

              <div>✓ All genres unlocked</div>

              <div>✓ Daily reading habit system</div>

            </div>

            <a
              href="https://rzp.io/"
              target="_blank"
              className="block w-full py-4 rounded-full bg-black text-white text-center font-semibold hover:scale-[1.02] transition"
            >

              Upgrade Now

            </a>

          </div>

          {/* 2 MONTH */}

          <div className="bg-zinc-950 border border-zinc-800 rounded-[36px] p-10 relative">

            <div className="absolute top-5 right-5 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">

              BEST VALUE

            </div>

            <div className="text-zinc-500 uppercase tracking-[0.2em] text-sm mb-6">

              Focus Plan

            </div>

            <div className="flex items-end gap-2 mb-8">

              <h2 className="text-5xl font-bold">

                ₹149

              </h2>

              <div className="text-zinc-500 mb-1">

                /2 months

              </div>

            </div>

            <div className="space-y-5 mb-12 text-zinc-300">

              <div>✓ 4 curated articles daily</div>

              <div>✓ Unlimited archive access</div>

              <div>✓ Premium reading insights</div>

              <div>✓ Genre mastery training</div>

              <div>✓ Long-term reading consistency</div>

            </div>

            <a
              href="https://rzp.io/"
              target="_blank"
              className="block w-full py-4 rounded-full bg-white text-black text-center font-semibold hover:scale-[1.02] transition"
            >

              Start Focus Plan

            </a>

          </div>

        </div>

        {/* FOOTER */}

        <div className="text-center mt-24 text-zinc-500">

          Articles Daily+ • Curated CAT Reading Platform

        </div>

      </div>

    </main>

  );
}