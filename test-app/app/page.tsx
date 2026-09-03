"use client";

import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import AnimeCard from "../components/AnimeCard";
import AnimeModal from "../components/AnimeModal";
import { ANIME_LIST, GENRES, Anime } from "../data/animeData";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"all" | "watchlist">("all");
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load watchlist from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("anime_watchlist");
      if (saved) {
        setWatchlist(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsLoaded(true);
  }, []);

  // Save watchlist to localStorage
  const handleToggleWatchlist = (id: string) => {
    setWatchlist((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem("anime_watchlist", JSON.stringify(updated));
      } catch {
        // Ignore localStorage errors
      }
      return updated;
    });
  };

  // Featured anime for the hero banner
  const featuredAnime = useMemo(() => {
    return ANIME_LIST.find((a) => a.isFeatured) || ANIME_LIST[0];
  }, []);

  // Filtered anime list based on search, genre, and tab
  const filteredAnime = useMemo(() => {
    return ANIME_LIST.filter((anime) => {
      // Tab filter
      if (activeTab === "watchlist" && !watchlist.includes(anime.id)) {
        return false;
      }

      // Genre filter
      if (selectedGenre !== "All" && !anime.genres.includes(selectedGenre)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = anime.title.toLowerCase().includes(q);
        const matchesJp = anime.japaneseTitle.toLowerCase().includes(q);
        const matchesGenre = anime.genres.some((g) => g.toLowerCase().includes(q));
        const matchesChar = anime.characters.some((c) =>
          c.name.toLowerCase().includes(q)
        );
        return matchesTitle || matchesJp || matchesGenre || matchesChar;
      }

      return true;
    });
  }, [activeTab, watchlist, selectedGenre, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-violet-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        watchlistCount={isLoaded ? watchlist.length : 0}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab === "watchlist") setSelectedGenre("All");
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8">
        {/* Hero Spotlight (shown only in explore tab without search) */}
        {activeTab === "all" && searchQuery === "" && selectedGenre === "All" && (
          <HeroBanner
            anime={featuredAnime}
            onSelect={setSelectedAnime}
            isWatchlisted={watchlist.includes(featuredAnime.id)}
            onToggleWatchlist={handleToggleWatchlist}
          />
        )}

        {/* Section Header & Genre Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <span>
                {activeTab === "watchlist"
                  ? "My Watchlist"
                  : searchQuery
                  ? `Search: "${searchQuery}"`
                  : "Popular & Trending Anime"}
              </span>
              <span className="text-sm font-semibold text-violet-400 bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20">
                {filteredAnime.length}
              </span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              {activeTab === "watchlist"
                ? "Your saved favorites for offline reference and binge watching"
                : "Top rated Japanese animation series, updated for CI/CD test deployments"}
            </p>
          </div>

          {/* Genre Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {GENRES.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedGenre === genre
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-105"
                    : "bg-white/5 text-gray-400 hover:text-gray-200 hover:bg-white/10 border border-white/5"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Anime Grid */}
        {filteredAnime.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {filteredAnime.map((anime) => (
              <AnimeCard
                key={anime.id}
                anime={anime}
                onSelect={setSelectedAnime}
                isWatchlisted={watchlist.includes(anime.id)}
                onToggleWatchlist={handleToggleWatchlist}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="glass-panel rounded-3xl p-12 text-center max-w-lg mx-auto my-16">
            <div className="w-16 h-16 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-4 text-3xl">
              ⛩️
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              {activeTab === "watchlist"
                ? "Your Watchlist is Empty"
                : "No Anime Found"}
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              {activeTab === "watchlist"
                ? "Click the heart icon on any anime card to save it to your personal watchlist."
                : `We couldn't find any anime matching "${searchQuery}". Try a different search term or genre.`}
            </p>
            {activeTab === "watchlist" ? (
              <button
                onClick={() => setActiveTab("all")}
                className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all shadow-lg shadow-violet-600/20"
              >
                Browse Popular Animes
              </button>
            ) : (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGenre("All");
                }}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/10 transition-all"
              >
                Clear Search & Filters
              </button>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/5 glass-panel py-8 px-4 sm:px-8 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">AnimeVault</span>
            <span>• Built with Next.js 16, React 19 & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              GitHub Actions CI/CD Verified
            </span>
            <span>v1.0.0</span>
          </div>
        </div>
      </footer>

      {/* Anime Detail Modal */}
      <AnimeModal
        anime={selectedAnime}
        onClose={() => setSelectedAnime(null)}
        isWatchlisted={selectedAnime ? watchlist.includes(selectedAnime.id) : false}
        onToggleWatchlist={handleToggleWatchlist}
      />
    </div>
  );
}
