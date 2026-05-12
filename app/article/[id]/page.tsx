"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ArticlePage() {

  const params = useParams();

  const [article, setArticle] = useState<any>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  const [showInsights, setShowInsights] =
    useState(false);

  useEffect(() => {

    async function fetchArticle() {

      const response = await fetch(
        "http://127.0.0.1:8000/articles"
      );

      const data = await response.json();

      const foundArticle = data.articles.find(
        (item: any) =>
          item.id.toString() === params.id
      );

      setArticle(foundArticle);
    }

    fetchArticle();

  }, [params]);

  useEffect(() => {

    function handleScroll() {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  if (!article) {

    return (

      <main className="min-h-screen bg-black text-white flex items-center justify-center">

        <div className="text-zinc-500 text-2xl">

          Loading article...

        </div>

      </main>

    );
  }

  const paragraphs =
    article.passage
      ?.split("\n\n")
      .filter(
        (p: string) => p.trim() !== ""
      ) || [];

  const paragraphInsights =
    article.paragraph_insights
      ?.split("Paragraph")
      .filter(
        (item: string) =>
          item.trim() !== ""
      ) || [];

  return (

    <main className="min-h-screen bg-black text-white">

      {/* PROGRESS BAR */}

      <div className="fixed top-0 left-0 w-full h-[4px] bg-zinc-900 z-50">

        <div
          className="h-full bg-white transition-all duration-150"
          style={{
            width: `${scrollProgress}%`,
          }}
        />

      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* HERO */}

        <div className="mb-24">

          <div className="flex flex-wrap gap-3 mb-8">

            <div className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold">

              {article.category || "CAT RC"}

            </div>

            <div className="px-5 py-2 rounded-full bg-zinc-900 text-zinc-300 text-sm">

              {article.read_time || "8 mins"}

            </div>

          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">

            {article.title}

          </h1>

        </div>

        {/* ARTICLE */}

        <section className="mb-24">

          <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] px-8 py-12 md:px-16 md:py-16">

            <div className="space-y-12">

              {paragraphs.map(
                (
                  paragraph: string,
                  index: number
                ) => (

                  <div key={index}>

                    <p className="text-zinc-300 text-[22px] leading-[2.25] font-light">

                      {paragraph}

                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

        {/* INSIGHTS BUTTON */}

        <section className="mb-16 text-center">

          <button
            onClick={() =>
              setShowInsights(
                !showInsights
              )
            }
            className="px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition"
          >

            {showInsights
              ? "Hide Reading Insights"
              : "View Reading Insights"}

          </button>

        </section>

        {/* INSIGHTS */}

        {showInsights && (

          <section className="space-y-10 mb-24">

            {/* CENTRAL IDEA */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

              <div className="text-zinc-500 text-sm uppercase tracking-[0.2em] mb-4">

                Central Idea

              </div>

              <p className="text-zinc-300 text-xl leading-10">

                {article.central_idea}

              </p>

            </div>

            {/* SUMMARY */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

              <div className="text-zinc-500 text-sm uppercase tracking-[0.2em] mb-4">

                Summary

              </div>

              <p className="text-zinc-300 text-xl leading-10">

                {article.summary}

              </p>

            </div>

            {/* AUTHOR TONE */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

              <div className="text-zinc-500 text-sm uppercase tracking-[0.2em] mb-6">

                Author Tone

              </div>

              <div className="flex flex-wrap gap-4">

                {article.author_tone
                  ?.split(",")
                  .map(
                    (
                      tone: string,
                      index: number
                    ) => (

                      <div
                        key={index}
                        className="px-5 py-3 rounded-full bg-white text-black font-medium"
                      >

                        {tone.trim()}

                      </div>

                    )
                  )}

              </div>

            </div>

            {/* PARAGRAPH FLOW */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

              <div className="text-zinc-500 text-sm uppercase tracking-[0.2em] mb-10">

                Paragraph Flow

              </div>

              <div className="space-y-8">

                {paragraphInsights.map(
                  (
                    insight: string,
                    index: number
                  ) => {

                    const cleaned =
                      insight
                        .replace(":", "")
                        .trim();

                    return (

                      <div
                        key={index}
                        className="flex gap-6 items-start border-b border-zinc-800 pb-8"
                      >

                        <div className="text-5xl font-bold text-zinc-700 min-w-[70px]">

                          {String(
                            index + 1
                          ).padStart(2, "0")}

                        </div>

                        <div>

                          <div className="text-white text-xl font-semibold mb-3">

                            Paragraph {index + 1}

                          </div>

                          <p className="text-zinc-400 text-lg leading-8">

                            {cleaned}

                          </p>

                        </div>

                      </div>

                    );
                  }
                )}

              </div>

            </div>

          </section>

        )}

        {/* FOOTER */}

        <footer className="border-t border-zinc-800 pt-10 text-zinc-500">

          Articles Daily+ • Curated CAT Reading Platform

        </footer>

      </div>

    </main>

  );
}