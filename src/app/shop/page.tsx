"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const games = [
  {
    id: "minecraft",
    name: "Minecraft",
    image: "/images/minecraft-icon.png",
    plans: [
      { title: "Basic", price: "$5/mo", features: ["2GB RAM", "10 Slots", "DDoS Protection"] },
      { title: "Standard", price: "$10/mo", features: ["4GB RAM", "20 Slots", "DDoS Protection"], popular: true },
      { title: "Premium", price: "$20/mo", features: ["8GB RAM", "Unlimited Slots", "Priority Support"] },
    ],
  },
  {
    id: "csgo",
    name: "CS:GO",
    image: "/images/csgo-icon.png",
    plans: [
      { title: "Basic", price: "$7/mo", features: ["128 Tickrate", "10 Players", "DDoS Protection"] },
      { title: "Standard", price: "$12/mo", features: ["128 Tickrate", "20 Players", "DDoS Protection"], popular: true },
      { title: "Premium", price: "$25/mo", features: ["128 Tickrate", "Unlimited Players", "Priority Support"] },
    ],
  },
  {
    id: "valorant",
    name: "Valorant",
    image: "/images/valorant-icon.png",
    plans: [
      { title: "Basic", price: "$6/mo", features: ["Custom Room", "5 Players", "DDoS Protection"] },
      { title: "Standard", price: "$12/mo", features: ["Custom Room", "10 Players", "DDoS Protection"], popular: true },
      { title: "Premium", price: "$22/mo", features: ["Custom Room", "Unlimited Players", "Priority Support"] },
    ],
  },
];

export default function ShopPage() {
  const [activeGame, setActiveGame] = useState("minecraft");
  const currentGame = games.find((game) => game.id === activeGame);

  const { data: session, status } = useSession();
  const router = useRouter();

  const handleChoosePlan = (planTitle: string) => {
    if (status === "loading") return; // Jangan lakukan apa-apa saat masih loading
    if (!session) {
      router.push("/login"); // Redirect ke login kalau belum login
    } else {
      router.push(`/checkout?plan=${planTitle}&game=${activeGame}`); // Arahkan ke checkout kalau sudah login
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Game Server Shop</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => setActiveGame(game.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition shadow ${activeGame === game.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            <Image src={game.image} alt={game.name} width={24} height={24} />
            {game.name}
          </button>
        ))}
      </div>

      {/* Animated Pricing */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGame}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {currentGame?.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-md p-6 text-center border hover:shadow-lg transition ${plan.popular ? "border-blue-500" : ""
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
              <p className="text-3xl font-extrabold text-blue-600 mb-4">{plan.price}</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <button
                onClick={() => handleChoosePlan(plan.title)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}