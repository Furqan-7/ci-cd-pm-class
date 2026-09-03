"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Anime } from "../data/animeData";

interface AnimeModalProps {
  anime: Anime | null;
  onClose: () => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (id: string) => void;
}

export default function AnimeModal({
  anime,
  onClose,
  isWatchlisted,
  onToggleWatchlist,
}: AnimeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (anime) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [anime, onClose]);

  if (!anime) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/15 z-10 my-auto">
        {/* Banner with close button */}
        <div className="relative h-56 sm:h-72 w-full">
          <Image
            src={anime.banner}
            alt={anime.title}
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121420] via-transparent to-black/60" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            ✕
          </button>

          {/* Quick tags on banner */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-violet-600/80 text-white border border-violet-400/30">
                Rank #{anime.rank}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 drop-shadow-md">
                {anime.title}
              </h2>
              <p className="text-sm text-violet-300 font-medium">
                {anime.japaneseTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-gray-400 text-xs block">Score</span>
              <span className="text-amber-400 font-bold text-lg flex items-center gap-1">
                ★ {anime.score}
              </span>
            </div>

            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-gray-400 text-xs block">Status</span>
              <span className="text-gray-200 font-bold text-sm">
                {anime.status}
              </span>
            </div>

            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-gray-400 text-xs block">Studio</span>
              <span className="text-gray-200 font-bold text-sm truncate block">
                {anime.studio}
              </span>
            </div>

            <div className="bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-gray-400 text-xs block">Episodes</span>
              <span className="text-gray-200 font-bold text-sm">
                {anime.episodes} ({anime.year})
              </span>
            </div>
          </div>

          {/* Genres */}
          <div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
              Genres
            </span>
            <div className="flex flex-wrap gap-2">
              {anime.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
              Synopsis
            </span>
            <p className="text-gray-300 text-sm leading-relaxed">
              {anime.synopsis}
            </p>
          </div>

          {/* Key Characters */}
          <div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
              Main Characters
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {anime.characters.map((char) => (
                <div
                  key={char.name}
                  className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between"
                >
                  <span className="text-sm font-semibold text-gray-200">
                    {char.name}
                  </span>
                  <span className="text-xs text-violet-400 font-medium">
                    {char.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={() => onToggleWatchlist(anime.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all ${
                isWatchlisted
                  ? "bg-rose-500/20 border-rose-500/40 text-rose-300"
                  : "bg-white/10 border-white/15 text-white hover:bg-white/15"
              }`}
            >
              {isWatchlisted ? "♥ In Watchlist" : "♡ Add to Watchlist"}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
