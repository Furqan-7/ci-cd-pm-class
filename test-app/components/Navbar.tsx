"use client";

import React from "react";

interface NavbarProps {
  watchlistCount: number;
  activeTab: "all" | "watchlist";
  onTabChange: (tab: "all" | "watchlist") => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Navbar({
  watchlistCount,
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div 
          onClick={() => onTabChange("all")}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-violet-500/25 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0f18] rounded-[10px] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300 font-black text-xl">
                壱
              </span>
            </div>
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
              Anime<span className="text-violet-400">Vault</span>
            </span>
            <span className="hidden sm:block text-[10px] uppercase font-bold tracking-widest text-gray-400">
              CI/CD Showcase
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-2 sm:mx-6">
          <div className="relative">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search anime, genre, characters..."
              className="w-full bg-black/40 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs px-1.5 py-0.5 rounded-full bg-white/10"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onTabChange("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === "all"
                ? "bg-violet-600/30 text-violet-300 border border-violet-500/50 shadow-sm shadow-violet-500/20"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Explore
          </button>

          <button
            onClick={() => onTabChange("watchlist")}
            className={`relative px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
              activeTab === "watchlist"
                ? "bg-violet-600/30 text-violet-300 border border-violet-500/50 shadow-sm shadow-violet-500/20"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Watchlist</span>
            {watchlistCount > 0 && (
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white text-[11px] font-bold">
                {watchlistCount}
              </span>
            )}
          </button>

          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>CI/CD Ready</span>
          </div>
        </div>
      </div>
    </header>
  );
}
