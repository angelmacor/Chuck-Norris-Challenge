"use client";

import { useEffect, useState } from "react";
import { Joke } from "@/types/joke";
import { getFavoriteJokes, saveFavoriteJokes } from "@/lib/localStorage";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { JokeCard } from "@/components/JokeCard";
import { JokeCardSkeleton } from "@/components/JokeCardSkeleton";

export default function FavoritePage() {
  const [loading, setLoading] = useState(true);

  const [favorites, setFavorites] = useState<Joke[]>([]);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    setFavorites(getFavoriteJokes());
    setLoading(false);

  }, []);

  const sortedFavorites = [...favorites].sort((a, b) => {
    return sortAsc
      ? (a.rating || 0) - (b.rating || 0)
      : (b.rating || 0) - (a.rating || 0);
  });

  const toggleFavorite = (joke: Joke) => {
    const updated = favorites.filter(f => f.id !== joke.id);
    setFavorites(updated);
    saveFavoriteJokes(updated);
    toast("Removed from favorites", {
      description: "Joke removed from favorites.",
      duration: 1500,
    });
  };

  const rateJoke = (id: string, rating: number) => {
    const updated = favorites.map(j =>
      j.id === id ? { ...j, rating } : j
    );
    setFavorites(updated);
    saveFavoriteJokes(updated);
  };



  return (
    <main className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">⭐ Your Favorite Jokes ⭐ </h2>
      <div className="flex justify-end">
      <Button  onClick={() => setSortAsc(!sortAsc)} variant="ghost" className=" mb-4 ">
        Sort by rating {sortAsc ? "🔼" : "🔽"}
      </Button>
      </div>

      {loading ? (
        <JokeCardSkeleton />
      ) : sortedFavorites.length === 0? 
      <p>No favorites yet.</p>
      :(sortedFavorites.map(joke => (
        <div key={joke.id} className="relative">
          <JokeCard
            joke={joke}
            onFavorite={toggleFavorite}
            isFavorited={true}
          />
          <div className="absolute bottom-4 left-4 flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`mx-0.5 text-lg ${
                  joke.rating && joke.rating >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => rateJoke(joke.id, star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      )))}
    </main>
  );
}
