"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function LibraryPage() {

  const [articles, setArticles] = useState<any[]>([]);

  const [selectedGenre, setSelectedGenre] =
    useState("All");

  useEffect(() => {

    async function fetchArticles() {

      const response = await fetch(
        "http://127.0.0.1:8000/articles"
      );

      const data = await response.json();

      setArticles(data.articles || []);
    }

    fetchArticles();

  }, []);

  const genres = useMemo(() => {

    const extractedGenres = articles.map(
      (article) => article.category
    );

    return [
      "All",
      ...new Set(extractedGenres)
    ];

  }, [articles]);

  const filteredArticles =
    selectedGenre === "All"
      ? articles
      : articles.filter(
          (article) =>
            article.category === selectedGenre
        );

  return (

    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-20">

          <div className="inline-block px-5 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm mb-8">

            Curated CAT Reading Archive

          </div>

          <h1 className="text-7xl font-bold tracking-tight leading-none mb-8">

            Reading Library

          </h1>

          <p className="text-zinc-400 text-2xl leading-relaxed max-w-3xl">

            Explore genre-specific CAT-style reading passages
            and strengthen your comprehension across
            philosophy, psychology, politics, economics,
            science, and culture.

          </p>

        </div>

        {/* GENRE FILTERS */}

        <section className="mb-16">

          <div className="flex flex-wrap gap-4">

            {genres.map((genre, index) => (

              <button
                key={index}
                onClick={() =>
                  setSelectedGenre(genre)
                }
                className={`px-6 py-3 rounded-full border transition duration-200

                ${
                  selectedGenre === genre
                    ? "bg-white text-black border-white"
                    : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-600"
                }

                `}
              >

                {genre}

              </button>

            ))}

          </div>

        </section>

        {/* EMPTY STATE */}

        {filteredArticles.length === 0 && (

          <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] p-20 text-center">

            <div className="text-4xl mb-6">
              📚
            </div>

            <h2 className="text-3xl font-bold mb-4">

              No Articles Found

            </h2>

            <p className="text-zinc-500 text-lg">

              Try selecting another genre.

            </p>

          </div>

        )}

        {/* ARTICLE GRID */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredArticles.map((article, index) => (

            <Link
              href={`/article/${article.id}`}
              key={index}
            >

              <div className="group bg-zinc-950 border border-zinc-800 rounded-[36px] p-10 h-full hover:border-zinc-600 hover:-translate-y-2 transition duration-300">

                {/* META */}

                <div className="flex flex-wrap gap-3 mb-8">

                  <div className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold">

                    {article.category || "CAT RC"}

                  </div>

                  <div className="px-4 py-2 rounded-full bg-zinc-900 text-zinc-300 text-sm">

                    {article.read_time || "8 mins"}

                  </div>

                </div>

                {/* TITLE */}

                <h2 className="text-4xl font-bold leading-tight tracking-tight mb-8 group-hover:text-zinc-200 transition">

                  {article.title}

                </h2>

                {/* PREVIEW */}

                <p className="text-zinc-400 leading-8 text-lg line-clamp-6 mb-10">

                  {article.summary}

                </p>

                {/* FOOTER */}

                <div className="pt-8 border-t border-zinc-800 flex items-center justify-between">

                  <div className="text-zinc-500 text-sm">

                    {new Date(
                      article.created_at
                    ).toLocaleDateString()}

                  </div>

                  <div className="text-white font-semibold">

                    Read Article →

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>

  );
}