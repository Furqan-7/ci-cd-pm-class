"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Anime } from "../data/animeData";

interface AnimeCardProps {
  anime: Anime;
  onSelect: (anime: Anime) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (id: string) => void;
}

export default function AnimeCard({
  anime,
  onSelect,
  isWatchlisted,
  onToggleWatchlist,
}: AnimeCardProps) {
  const [imgSrc, setImgSrc] = useState(anime.poster);

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col group relative cursor-pointer">
      {/* Poster Image Container */}
      <div 
        className="relative aspect-[3/4] w-full overflow-hidden bg-gray-900"
        onClick={() => onSelect(anime)}
      >
        <Image
          src={imgSrc}
          alt={anime.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={() => setImgSrc("https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop")}
        />

        {/* Gradient Overlay on Bottom of Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e101c] via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-amber-400 font-bold text-xs flex items-center gap-1 shadow-md">
            ★ {anime.score.toFixed(1)}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWatchlist(anime.id);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
              isWatchlisted
                ? "bg-rose-600 text-white shadow-lg shadow-rose-600/40"
                : "bg-black/50 text-gray-300 hover:text-white hover:bg-black/80"
            }`}
            title={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
          >
            {isWatchlisted ? "♥" : "♡"}
          </button>
        </div>

        {/* Status indicator badge */}
        <div className="absolute bottom-2.5 left-2.5 z-10">
          <span
            className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border ${
              anime.status === "Airing"
                ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300"
                : "bg-blue-500/20 border-blue-500/30 text-blue-300"
            }`}
          >
            {anime.status}
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div 
        className="p-4 flex-1 flex flex-col justify-between"
        onClick={() => onSelect(anime)}
      >
        <div>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
            <span>{anime.studio}</span>
            <span>{anime.year}</span>
          </div>

          <h3 className="text-base font-bold text-white group-hover:text-violet-400 transition-colors line-clamp-1">
            {anime.title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-1 mb-3">
            {anime.japaneseTitle}
          </p>
        </div>

        <div>
          {/* Genre Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
            {anime.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 text-gray-300 border border-white/5"
              >
                {genre}
              </span>
            ))}
            {anime.genres.length > 2 && (
              <span className="text-[11px] text-gray-500 self-center">
                +{anime.genres.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
