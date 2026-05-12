"use client";

import { useState } from "react";

export default function AdminPage() {

  const [article, setArticle] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateArticle() {

    setLoading(true);

    const response = await fetch("http://127.0.0.1:8000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        article: article,
      }),
    });

    const data = await response.json();

    const cleanedOutput = data.output
  .replace(/\*\*/g, "")
  .replace(/#{1,6}/g, "")
  .replace(/\n{3,}/g, "\n\n")
  .trim();

setOutput(cleanedOutput);

    setLoading(false);
  }

  // PARSING OUTPUT

  const titleMatch = output.match(/TITLE:\s*([\s\S]*?)CATEGORY:/);
  const categoryMatch = output.match(/CATEGORY:\s*([\s\S]*?)DIFFICULTY:/);
  const difficultyMatch = output.match(/DIFFICULTY:\s*([\s\S]*?)READ TIME:/);
  const readTimeMatch = output.match(/READ TIME:\s*([\s\S]*?)PASSAGE:/);
  const passageMatch = output.match(/PASSAGE:\s*([\s\S]*?)SUMMARY:/);
  const summaryMatch = output.match(/SUMMARY:\s*([\s\S]*?)CENTRAL IDEA:/);
  const centralIdeaMatch = output.match(/CENTRAL IDEA:\s*([\s\S]*?)AUTHOR TONE:/);
  const toneMatch = output.match(/AUTHOR TONE:\s*([\s\S]*?)KEY VOCABULARY:/);
  const vocabMatch = output.match(/KEY VOCABULARY:\s*([\s\S]*?)RC QUESTIONS:/);
  const rcMatch = output.match(/RC QUESTIONS:\s*([\s\S]*)/);

  return (

    <main className="min-h-screen bg-black text-white px-8 py-16">

      <div className="max-w-6xl mx-auto space-y-12">

        {/* HEADER */}

        <div className="space-y-5">

          <h1 className="text-6xl font-bold">
            Articles Daily+ AI Engine
          </h1>

          <p className="text-zinc-400 text-xl">
            Paste any raw article below and convert it into CAT-style content.
          </p>

        </div>

        {/* INPUT */}

        <div className="space-y-6">

          <textarea
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            placeholder="Paste raw article here..."
            className="w-full h-[300px] bg-zinc-950 border border-zinc-800 rounded-3xl p-8 text-lg outline-none"
          />

          <button
            onClick={generateArticle}
            className="bg-white text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:scale-[1.02] transition"
          >
            Generate CAT Article
          </button>

        </div>

        {/* OUTPUT */}

        {output && (

          <div className="space-y-10">

            {/* HERO */}

            <div className="border-b border-zinc-800 pb-10">

              <h1 className="text-6xl font-bold leading-tight mb-8 text-white">
                {titleMatch?.[1]?.replace(/[*#]/g, "")}
              </h1>

              <div className="flex flex-wrap gap-4">

                <div className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold">
                  {categoryMatch?.[1]?.replace(/[*#]/g, "")}
                </div>

                <div className="bg-zinc-800 text-zinc-300 px-5 py-2 rounded-full text-sm">
                  {difficultyMatch?.[1]?.replace(/[*#]/g, "")}
                </div>

                <div className="bg-zinc-800 text-zinc-300 px-5 py-2 rounded-full text-sm">
                  {readTimeMatch?.[1]?.replace(/[*#]/g, "")}
                </div>

              </div>

            </div>

            {/* PASSAGE */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-12">

              <h2 className="text-3xl font-bold mb-10">
                Reading Passage
              </h2>

              <div className="whitespace-pre-wrap text-zinc-300 text-[22px] leading-[2.3] font-light">
                {passageMatch?.[1]?.replace(/[*#]/g, "")}
              </div>

            </div>

            {/* SUMMARY + CENTRAL IDEA */}

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

                <h3 className="text-2xl font-bold mb-5">
                  Summary
                </h3>

                <p className="text-zinc-300 leading-8 text-lg">
                  {summaryMatch?.[1]?.replace(/[*#]/g, "")}
                </p>

              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

                <h3 className="text-2xl font-bold mb-5">
                  Central Idea
                </h3>

                <p className="text-zinc-300 leading-8 text-lg">
                  {centralIdeaMatch?.[1]?.replace(/[*#]/g, "")}
                </p>

              </div>

            </div>

            {/* AUTHOR TONE */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-5">
                Author Tone
              </h3>

              <p className="text-zinc-300 leading-8 text-lg">
                {toneMatch?.[1]?.replace(/[*#]/g, "")}
              </p>

            </div>

            {/* VOCAB */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-8">
                Key Vocabulary
              </h3>

              <div className="whitespace-pre-wrap text-zinc-300 leading-9 text-lg">
                {vocabMatch?.[1]?.replace(/[*#]/g, "")}
              </div>

            </div>

            {/* RC QUESTIONS */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-10">

              <h2 className="text-3xl font-bold mb-10">
                RC Questions
              </h2>

              <div className="whitespace-pre-wrap text-zinc-300 leading-9 text-lg">
                {rcMatch?.[1]?.replace(/[*#]/g, "")}
              </div>

            </div>

          </div>

        )}

        {/* LOADING */}

        {loading && (

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10">

            <div className="text-zinc-400 text-2xl animate-pulse">
              Generating premium CAT passage...
            </div>

          </div>

        )}

      </div>

    </main>

  );
}