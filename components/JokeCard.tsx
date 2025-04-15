import { Joke } from "@/types/joke";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";


type Props = {
  joke: Joke;
  onFavorite?: (joke: Joke) => void;
  isFavorited?: boolean;
};

export const JokeCard = ({ joke, onFavorite, isFavorited }: Props) => {
  const category = (joke as any).categories?.[0];
  return (
    <Card className="relative mb-4">
      <CardContent className="p-5">
        <p>{joke.value}</p>
        {onFavorite && (
          <button
            onClick={() => onFavorite(joke)}
            className="absolute top-2 right-2"
            aria-label="Add to favorites"
          >
            <Heart
              className={cn("h-6 w-6", isFavorited ? "text-red-500 fill-red-500" : "text-gray-400")}
            />
          </button>
        )}
        {category && (
          <span className="border-1 px-1 rounded-md text-xs uppercase text-muted-foreground absolute top-3 left-4">
            {category}
          </span>
        )}
      </CardContent>
    </Card>
  );
};
