"use client";

import React from "react";
import Image from "next/image";
import { Anime } from "../data/animeData";

interface HeroBannerProps {
  anime: Anime;
  onSelect: (anime: Anime) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (id: string) => void;
}

export default function HeroBanner({
  anime,
  onSelect,
  isWatchlisted,
  onToggleWatchlist,
}: HeroBannerProps) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl mb-10 group">
      {/* Background Banner with gradient masking */}
      <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden">
        <Image
          src={anime.banner}
          alt={anime.title}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.55]"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-[#0a0b10]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b10] via-[#0a0b10]/70 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end max-w-3xl z-10">
        {/* Spotlight Badge */}
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-amber-500/10">
            🔥 #1 Spotlight
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-semibold">
            {anime.studio}
          </span>
          <span className="text-gray-400 text-xs font-medium">
            {anime.year} • {anime.episodes}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow-md">
          {anime.title}
        </h1>
        <p className="text-sm font-medium text-violet-300/80 italic mb-4">
          {anime.japaneseTitle}
        </p>

        {/* Synopsis snippet */}
        <p className="text-gray-300 text-sm sm:text-base line-clamp-2 sm:line-clamp-3 mb-6 leading-relaxed max-w-2xl">
          {anime.synopsis}
        </p>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-6">
          {anime.genres.map((genre) => (
            <span
              key={genre}
              className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-gray-200 text-xs font-medium border border-white/5"
            >
              {genre}
            </span>
          ))}
          <span className="px-2.5 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold flex items-center gap-1">
            ★ {anime.score} Score
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3.5">
          <button
            onClick={() => onSelect(anime)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-600/30 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>View Anime Info</span>
          </button>

          <button
            onClick={() => onToggleWatchlist(anime.id)}
            className={`px-5 py-3 rounded-xl font-semibold text-sm border backdrop-blur-md flex items-center gap-2 transition-all ${
              isWatchlisted
                ? "bg-rose-500/20 border-rose-500/50 text-rose-300 shadow-lg shadow-rose-500/20"
                : "bg-white/10 border-white/15 text-white hover:bg-white/15"
            }`}
          >
            <span>{isWatchlisted ? "♥ In Watchlist" : "♡ Add to Watchlist"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
