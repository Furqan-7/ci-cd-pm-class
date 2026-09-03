export interface Anime {
  id: string;
  title: string;
  japaneseTitle: string;
  poster: string;
  banner: string;
  score: number;
  rank: number;
  year: string;
  status: "Completed" | "Airing" | "Upcoming";
  episodes: string;
  genres: string[];
  studio: string;
  synopsis: string;
  trailerUrl?: string;
  characters: { name: string; role: string }[];
  isFeatured?: boolean;
}

export const ANIME_LIST: Anime[] = [
  {
    id: "solo-leveling",
    title: "Solo Leveling",
    japaneseTitle: "Ore dake Level Up na Ken",
    poster: "https://cdn.myanimelist.net/images/anime/1841/141042.jpg",
    banner: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1600&auto=format&fit=crop",
    score: 8.5,
    rank: 1,
    year: "2024",
    status: "Airing",
    episodes: "12 eps",
    genres: ["Action", "Adventure", "Fantasy"],
    studio: "A-1 Pictures",
    synopsis:
      "When a portal connecting our world to a monster-filled dimension appeared, certain humans awoke with superhuman abilities. Known as 'Hunters', they conquer dungeons for a living. Sung Jin-woo, widely known as the 'Weakest Hunter of All Mankind', finds himself on the verge of death inside a lethal double dungeon—only to awaken with a mysterious quest log visible solely to him.",
    characters: [
      { name: "Sung Jin-woo", role: "Protagonist" },
      { name: "Cha Hae-in", role: "S-Rank Hunter" },
      { name: "Go Gun-hee", role: "Association Chairman" },
    ],
    isFeatured: true,
  },
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    japaneseTitle: "Shingeki no Kyojin",
    poster: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    banner: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1600&auto=format&fit=crop",
    score: 9.1,
    rank: 2,
    year: "2013-2023",
    status: "Completed",
    episodes: "89 eps",
    genres: ["Action", "Dark Fantasy", "Drama"],
    studio: "Wit Studio / MAPPA",
    synopsis:
      "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be pleasure.",
    characters: [
      { name: "Eren Yeager", role: "Attack Titan" },
      { name: "Mikasa Ackerman", role: "Elite Scout" },
      { name: "Levi Ackerman", role: "Captain" },
    ],
  },
  {
    id: "frieren",
    title: "Frieren: Beyond Journey's End",
    japaneseTitle: "Sousou no Frieren",
    poster: "https://cdn.myanimelist.net/images/anime/1015/138062.jpg",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    score: 9.3,
    rank: 3,
    year: "2023",
    status: "Completed",
    episodes: "28 eps",
    genres: ["Adventure", "Drama", "Fantasy"],
    studio: "Madhouse",
    synopsis:
      "The Demon King has been defeated, and the victorious hero party disbands before returning to their everyday lives. Elven mage Frieren, whose lifespan spans millennia, reflects on her comrades' passing and embarks on a new voyage to honor their memory and understand the ephemeral human heart.",
    characters: [
      { name: "Frieren", role: "Mage" },
      { name: "Fern", role: "Apprentice Mage" },
      { name: "Stark", role: "Warrior" },
    ],
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    japaneseTitle: "Jujutsu Kaisen",
    poster: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    banner: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    score: 8.8,
    rank: 4,
    year: "2020-2023",
    status: "Airing",
    episodes: "47 eps",
    genres: ["Action", "Supernatural", "Dark Fantasy"],
    studio: "MAPPA",
    synopsis:
      "Idly indulging in paranormal activities with the Occult Club, high schooler Yuji Itadori swallows a cursed talisman—the finger of the legendary Demon King Ryomen Sukuna—to save his friends. Thrust into the world of Jujutsu Sorcerers, Yuji must track down and ingest all of Sukuna's fingers before facing execution.",
    characters: [
      { name: "Yuji Itadori", role: "Sukuna Vessel" },
      { name: "Satoru Gojo", role: "Special Grade Sorcerer" },
      { name: "Megumi Fushiguro", role: "Sorcerer" },
    ],
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer: Kimetsu no Yaiba",
    japaneseTitle: "Kimetsu no Yaiba",
    poster: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    banner: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1600&auto=format&fit=crop",
    score: 8.9,
    rank: 5,
    year: "2019-2024",
    status: "Airing",
    episodes: "55+ eps",
    genres: ["Action", "Supernatural", "Historical"],
    studio: "ufotable",
    synopsis:
      "Ever since the death of his father, Tanjiro Kamado has taken upon himself the burden of supporting his family. Returning from selling charcoal one snowy morning, he discovers his family slaughtered by a demon, with his sister Nezuko turned into a demon herself. Tanjiro embarks on a perilous quest to avenge his kin and restore his sister's humanity.",
    characters: [
      { name: "Tanjiro Kamado", role: "Demon Slayer" },
      { name: "Nezuko Kamado", role: "Demon" },
      { name: "Zenitsu Agatsuma", role: "Thunder Breather" },
    ],
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    japaneseTitle: "Chainsaw Man",
    poster: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
    score: 8.6,
    rank: 6,
    year: "2022",
    status: "Completed",
    episodes: "12 eps",
    genres: ["Action", "Supernatural", "Dark Fantasy"],
    studio: "MAPPA",
    synopsis:
      "Denji is robbed of a normal teenage life, left with nothing but his deceased father's overwhelming debt to the yakuza. His only companion is Pochita, the Chainsaw Devil, with whom he slays devils for cash. After a fatal betrayal, Pochita merges with Denji's body, transforming him into a human-devil hybrid with deadly chainsaw limbs.",
    characters: [
      { name: "Denji", role: "Chainsaw Man" },
      { name: "Makima", role: "Public Safety Chief" },
      { name: "Power", role: "Blood Fiend" },
    ],
  },
  {
    id: "one-piece",
    title: "One Piece",
    japaneseTitle: "One Piece",
    poster: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    banner: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1600&auto=format&fit=crop",
    score: 8.7,
    rank: 7,
    year: "1999-Present",
    status: "Airing",
    episodes: "1100+ eps",
    genres: ["Action", "Adventure", "Fantasy"],
    studio: "Toei Animation",
    synopsis:
      "Gol D. Roger, the King of the Pirates, sparked a golden age when his dying words revealed the existence of his greatest treasure: the One Piece. Monkey D. Luffy, an ambitious boy powered by the Gum-Gum Devil Fruit, sets sail across the Grand Line to assemble a legendary crew and claim the title of Pirate King.",
    characters: [
      { name: "Monkey D. Luffy", role: "Captain" },
      { name: "Roronoa Zoro", role: "Swordsman" },
      { name: "Nami", role: "Navigator" },
    ],
  },
  {
    id: "cyberpunk-edgerunners",
    title: "Cyberpunk: Edgerunners",
    japaneseTitle: "Cyberpunk: Edgerunners",
    poster: "https://cdn.myanimelist.net/images/anime/1814/127399.jpg",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
    score: 8.6,
    rank: 8,
    year: "2022",
    status: "Completed",
    episodes: "10 eps",
    genres: ["Action", "Sci-Fi", "Drama"],
    studio: "Studio Trigger",
    synopsis:
      "In Night City, a neon-soaked dystopian metropolis obsessed with cybernetic body modifications, street kid David Martinez loses everything in a drive-by shootout. Desperate to survive, he installs a military-grade Sandevistan cyberware and joins an outlaw mercenary crew of Edgerunners.",
    characters: [
      { name: "David Martinez", role: "Edgerunner" },
      { name: "Lucy", role: "Netrunner" },
      { name: "Rebecca", role: "Solo" },
    ],
  },
  {
    id: "death-note",
    title: "Death Note",
    japaneseTitle: "Death Note",
    poster: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    banner: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1600&auto=format&fit=crop",
    score: 8.6,
    rank: 9,
    year: "2006",
    status: "Completed",
    episodes: "37 eps",
    genres: ["Psychological", "Supernatural", "Mystery"],
    studio: "Madhouse",
    synopsis:
      "Brilliant high school student Light Yagami stumbles upon the supernatural 'Death Note' dropped by Shinigami Ryuk. Any person whose name is written in the notebook dies. Light resolves to purge the world of criminals under the moniker 'Kira', triggering an intense cat-and-mouse duel of wits with enigmatic detective L.",
    characters: [
      { name: "Light Yagami", role: "Kira" },
      { name: "L Lawliet", role: "World's Greatest Detective" },
      { name: "Ryuk", role: "Shinigami" },
    ],
  },
  {
    id: "spy-x-family",
    title: "Spy x Family",
    japaneseTitle: "Spy x Family",
    poster: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
    banner: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop",
    score: 8.5,
    rank: 10,
    year: "2022",
    status: "Completed",
    episodes: "25 eps",
    genres: ["Comedy", "Action", "Slice of Life"],
    studio: "Wit Studio & CloverWorks",
    synopsis:
      "Master spy 'Twilight' must infiltrate an elite academy by building a fake family overnight for Operation Strix. He adopts Anya, a telepathic orphan girl, and agrees to marry Yor Briar, an unassuming clerk who secretly operates as the lethal assassin 'Thorn Princess'. None know each other's secrets, except the mind-reading daughter.",
    characters: [
      { name: "Loid Forger", role: "Agent Twilight" },
      { name: "Anya Forger", role: "Telepath" },
      { name: "Yor Forger", role: "Thorn Princess" },
    ],
  },
  {
    id: "bleach-tybw",
    title: "Bleach: Thousand-Year Blood War",
    japaneseTitle: "Bleach: Sennen Kessen-hen",
    poster: "https://cdn.myanimelist.net/images/anime/1764/126627.jpg",
    banner: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop",
    score: 8.9,
    rank: 11,
    year: "2022-2024",
    status: "Airing",
    episodes: "26+ eps",
    genres: ["Action", "Supernatural", "Fantasy"],
    studio: "Studio Pierrot",
    synopsis:
      "The Soul Society is caught completely unprepared when the Wandenreich, an empire of resurrected Quincy led by the ancient emperor Yhwach, declares war against the Soul Reapers. Substitute Soul Reaper Ichigo Kurosaki must unlock his ultimate heritage to protect the human world and the afterlife.",
    characters: [
      { name: "Ichigo Kurosaki", role: "Substitute Shinigami" },
      { name: "Yhwach", role: "Quincy King" },
      { name: "Rukia Kuchiki", role: "Soul Reaper" },
    ],
  },
  {
    id: "fullmetal-alchemist",
    title: "Fullmetal Alchemist: Brotherhood",
    japaneseTitle: "Hagane no Renkinjutsushi",
    poster: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    banner: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1600&auto=format&fit=crop",
    score: 9.1,
    rank: 12,
    year: "2009-2010",
    status: "Completed",
    episodes: "64 eps",
    genres: ["Action", "Adventure", "Dark Fantasy"],
    studio: "Bones",
    synopsis:
      "Brothers Edward and Alphonse Elric commit alchemy's ultimate taboo: human transmutation to revive their deceased mother. The disastrous ritual claims Edward's limbs and Alphonse's entire body. Guided by the Law of Equivalent Exchange, the Elric brothers search for the fabled Philosopher's Stone to regain what was lost.",
    characters: [
      { name: "Edward Elric", role: "Fullmetal Alchemist" },
      { name: "Alphonse Elric", role: "Alchemist" },
      { name: "Roy Mustang", role: "Flame Alchemist" },
    ],
  },
];

export const GENRES = [
  "All",
  "Action",
  "Adventure",
  "Dark Fantasy",
  "Fantasy",
  "Sci-Fi",
  "Supernatural",
  "Psychological",
  "Comedy",
];
