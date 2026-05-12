"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {

  const [featuredArticle, setFeaturedArticle] = useState<any>(null);

  const [streak, setStreak] = useState(0);

  useEffect(() => {

    async function fetchArticles() {

      const response = await fetch(
        "http://127.0.0.1:8000/articles"
      );

      const data = await response.json();

      if (data.articles?.length > 0) {

        setFeaturedArticle(data.articles[0]);

      }
    }

    fetchArticles();

  }, []);

  useEffect(() => {

    const savedStreak =
      localStorage.getItem("reading_streak");

    if (savedStreak) {

      setStreak(Number(savedStreak));

    } else {

      localStorage.setItem("reading_streak", "1");

      setStreak(1);
    }

  }, []);

  function incrementStreak() {

    const newStreak = streak + 1;

    setStreak(newStreak);

    localStorage.setItem(
      "reading_streak",
      String(newStreak)
    );
  }

  return (

    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}

      <section className="relative px-6 py-32">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-800 text-zinc-300 text-sm mb-8">

              <span>🔥</span>

              <span>

                {streak} Day Reading Streak

              </span>

            </div>

            <h1 className="text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-10">

              Train Your Reading Mind for CAT.

            </h1>

            <p className="text-zinc-400 text-2xl leading-relaxed max-w-2xl mb-12">

              Read carefully curated CAT-style passages,
              understand tone and paragraph flow,
              and build a powerful daily reading habit.

            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                href="/library"
                onClick={incrementStreak}
                className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition"
              >

                Start Reading

              </Link>

              <Link
                href="/admin"
                className="px-8 py-4 rounded-full border border-zinc-700 text-white font-semibold text-lg hover:bg-zinc-900 transition"
              >

                Generate Article

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURED ARTICLE */}

      {featuredArticle && (

        <section className="px-6 pb-28">

          <div className="max-w-6xl mx-auto">

            <div className="mb-10">

              <div className="text-zinc-500 text-sm uppercase tracking-[0.2em] mb-4">

                Daily Reading

              </div>

              <h2 className="text-5xl font-bold">

                Today's Featured Article

              </h2>

            </div>

            <Link
              href={`/article/${featuredArticle.id}`}
              onClick={incrementStreak}
            >

              <div className="group bg-zinc-950 border border-zinc-800 rounded-[40px] p-12 hover:border-zinc-600 transition duration-300">

                <div className="flex flex-wrap gap-3 mb-8">

                  <div className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold">

                    {featuredArticle.category || "CAT RC"}

                  </div>

                  <div className="px-4 py-2 rounded-full bg-zinc-900 text-zinc-300 text-sm">

                    {featuredArticle.read_time || "8 mins"}

                  </div>

                </div>

                <h3 className="text-5xl font-bold leading-tight tracking-tight mb-8 group-hover:text-zinc-200 transition">

                  {featuredArticle.title}

                </h3>

                <p className="text-zinc-400 text-xl leading-10 max-w-4xl mb-10">

                  {featuredArticle.summary}

                </p>

                <div className="inline-flex items-center gap-3 text-white font-semibold text-lg">

                  Start Reading →

                </div>

              </div>

            </Link>

          </div>

        </section>

      )}

      {/* FEATURES */}

      <section className="px-6 pb-28">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

              <h3 className="text-2xl font-bold mb-5">

                Curated Reading

              </h3>

              <p className="text-zinc-400 leading-8 text-lg">

                Read CAT-relevant articles across philosophy,
                psychology, economics, politics, and culture.

              </p>

            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

              <h3 className="text-2xl font-bold mb-5">

                Reading Insights

              </h3>

              <p className="text-zinc-400 leading-8 text-lg">

                Understand paragraph flow, author tone,
                central idea, and contextual vocabulary.

              </p>

            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

              <h3 className="text-2xl font-bold mb-5">

                Daily Habit Building

              </h3>

              <p className="text-zinc-400 leading-8 text-lg">

                Build reading stamina and consistency
                through structured daily reading practice.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-zinc-800 px-6 py-10 text-zinc-500">

        <div className="max-w-6xl mx-auto">

          Articles Daily+ • Curated CAT Reading Platform

        </div>

      </footer>

    </main>

  );
}