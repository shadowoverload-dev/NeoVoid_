"use client";

import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";

const games = [
  {
    id: "minecraft",
    name: "Minecraft",
    ip: "104.24.4.65:25565",
    description: "Join our Minecraft server for a fun and engaging experience.",
    players: 8,
    images: [
      { src: "/images/download (1).jpeg", caption: "Explore Minecraft World" },
      { src: "/images/download (2).jpeg", caption: "Build Your Kingdom" },
      { src: "/images/download (3).jpeg", caption: "Join Our Server Today" },
    ],
  },
  {
    id: "csgo",
    name: "CS:GO",
    ip: "192.168.1.2:27015",
    description: "Experience the thrill of tactical FPS gameplay with our CS:GO server.",
    players: 12,
    images: [
      { src: "/images/download (4).jpeg", caption: "Tactical FPS Action" },
      { src: "/images/download (5).jpeg", caption: "Compete with the Best" },
    ],
  },
  {
    id: "valorant",
    name: "Valorant",
    ip: "203.45.67.89:12345",
    description: "Join Valorant competitive matches and climb the ranks!",
    players: 5,
    images: [
      { src: "/images/download (6).jpeg", caption: "Rank Up Today" },
      { src: "/images/download (7).jpeg", caption: "Play with Friends" },
    ],
  },
];

export default function Home() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      games.forEach((game) => {
        const section = document.getElementById(game.id);
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = game.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex gap-6 pt-16 px-4">
      {/* Sidebar */}
      <aside className="w-48 sticky top-16 self-start h-fit bg-gray-100 p-4 rounded-lg shadow">
        <ul className="space-y-4">
          {games.map((game) => (
            <li key={game.id}>
              <a
                href={`#${game.id}`}
                className={`block px-2 py-1 rounded font-semibold ${active === game.id ? "bg-blue-500 text-white" : "text-gray-700"
                  }`}
              >
                {game.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-8 p-5">
        {games.map((game) => (
          <section
            id={game.id}
            key={game.id}
            className="border rounded-lg shadow-md overflow-hidden bg-white"
          >
            {/* Carousel */}
            <div className="relative w-full aspect-[16/9]">
              <Carousel images={game.images} />
            </div>

            {/* Info */}
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{game.name}</h2>
              <p className="text-gray-600 mb-1">
                <strong>IP:</strong> {game.ip}
              </p>
              <p className="text-gray-700 mb-1">{game.description}</p>
              <p className="text-gray-600">
                <strong>Players Online:</strong> {game.players}
              </p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
