import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export const JokeCardSkeleton = () => {
  return (
    <Card className="relative mb-4">
        <Skeleton className="absolute top-2 left-4 h-4 w-1/9" />
        <Skeleton className="absolute top-2 right-2 h-5 w-1/15" />
      <CardContent className="p-4 space-y-2">
        <Skeleton className="h-5 w-6/7" />
        <Skeleton className="h-5 w-5/6" />
      </CardContent>
    </Card>
  );
};
