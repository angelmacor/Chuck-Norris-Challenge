import { Joke } from "@/types/joke";

const FAVORITES_KEY = "favorite-jokes";
const USER_KEY = "user-info";

export const getFavoriteJokes = (): Joke[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
};

export const saveFavoriteJokes = (jokes: Joke[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(jokes));
};

export const getUserInfo = (): Record<string, any> | null => {
  if (typeof window === "undefined") return null;
  return JSON.parse(localStorage.getItem(USER_KEY) || "null");
};

export const saveUserInfo = (user: Record<string, any>) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};
