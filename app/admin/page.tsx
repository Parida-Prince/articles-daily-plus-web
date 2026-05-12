"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const password = prompt("Enter Admin Password");

    if (password === "Prince123") {
      setAuthorized(true);
    } else {
      router.push("/");
    }
  }, [router]);

  const generateArticle = async () => {
    if (!article) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://articles-daily-plus-backend-production.up.railway.app/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            raw_article: article,
          }),
        }
      );

      const data = await response.json();

      alert("Article Generated Successfully");
      console.log(data);
    } catch (error) {
      console.error(error);
      alert("Generation failed");
    }

    setLoading(false);
  };

  if (!authorized) return null;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Articles Daily+ Admin
      </h1>

      <textarea
        value={article}
        onChange={(e) => setArticle(e.target.value)}
        placeholder="Paste raw article here..."
        className="w-full h-[400px] bg-zinc-900 border border-zinc-700 rounded-xl p-6 text-lg"
      />

      <button
        onClick={generateArticle}
        disabled={loading}
        className="mt-6 bg-white text-black px-8 py-4 rounded-xl font-semibold"
      >
        {loading ? "Generating..." : "Generate Article"}
      </button>
    </main>
  );
}