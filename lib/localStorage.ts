import { Joke } from "@/types/joke";

const FAVORITES_KEY = "favorite-jokes";

export const getFavoriteJokes = (): Joke[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
};

export const saveFavoriteJokes = (jokes: Joke[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(jokes));
};
