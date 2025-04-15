import { Joke } from "@/types/joke";

const URL_BASE = "https://api.chucknorris.io/jokes";

export const fetchRandomJoke = async (): Promise<Joke> => {
  const url = `${URL_BASE}/random`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch joke");
  return res.json();
};

export const searchJokes = async (query?: string): Promise<Joke[]> => {
  const url = query
    ? `${URL_BASE}/search?query=${query}`
    : `${URL_BASE}/random`;
  const res = await fetch(url);
  try {
    if (!res.ok) throw new Error("Search failed");
    const data = await res.json();

    if (!data.result || data.result.length === 0) {
      return [data.value ? data :
        {
          id: "not-found",
          value: "Chuck Norris didn't like your search 😢, his API refuses to return anything ❌",
          url: "",
          categories: [],
        },
      ];
    }

    return data.result;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message || "Something went wrong searching jokes");
    }
    throw new Error("Something went wrong searching jokes");
  }
};
