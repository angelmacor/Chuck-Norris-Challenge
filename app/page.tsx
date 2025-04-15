"use client";

import { useEffect, useState } from "react";
import { Joke } from "@/types/joke";
import { JokeCard } from "@/components/JokeCard";
import { getFavoriteJokes, saveFavoriteJokes } from "@/lib/localStorage";
import { fetchRandomJoke, searchJokes } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"

import { JokeCardSkeleton } from "@/components/JokeCardSkeleton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [joke, setJoke] = useState<Joke | null>(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Joke[] | null>(null);

  const [favorites, setFavorites] = useState<Joke[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchRandomJoke().then(setJoke).finally(() => setLoading(false));
    setFavorites(getFavoriteJokes());
  }, []);


  const handleFavorite = (j: Joke) => {

    const isAlreadyFavorited = favorites.some(f => f.id === j.id);
    let updated: Joke[];

    if (isAlreadyFavorited) {
      updated = favorites.filter(f => f.id !== j.id);
      toast("Removed from favorites", {
        description: "Joke removed from favorites.",
        duration: 1500,
      })

    } else {
      updated = [...favorites, j];
      toast.success("Added to favorites", {
        description: "Joke added to favorites.",
        duration: 1500,
      })
    }

    setFavorites(updated);
    saveFavoriteJokes(updated);
  };



  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const results = await searchJokes(search.trim()).finally(() => setLoading(false));
    setSearchResults(results);
    setJoke(null);
  };

  return (
    <main className="p-4 max-w-xl mx-auto w-full">
      <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
        <Input
          placeholder="Search for a joke"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2 mb-4">
          <Button className="w-full" type="submit" onSubmit={handleSearchSubmit}>Get Joke</Button>
        </div>
      </form>
      {loading ? (
        <JokeCardSkeleton />
      ) : (
        <>
          {joke && (
            <JokeCard
              joke={joke}
              onFavorite={handleFavorite}
              isFavorited={favorites.some((f) => f.id === joke.id)}
            />
          )}

          {searchResults &&
            searchResults.map((j) => (
              <JokeCard
                key={j.id}
                joke={j}
                onFavorite={handleFavorite}
                isFavorited={favorites.some((f) => f.id === j.id)}
              />
            ))
          }
        </>
      )}
    </main>
  );
}
