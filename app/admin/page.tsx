"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const password = prompt("Enter Admin Password");

    if (password !== "Pranil@2011") {
      router.push("/");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        Articles Daily+ Admin
      </h1>

      <p className="text-zinc-400">
        Admin access granted.
      </p>
    </main>
  );
}