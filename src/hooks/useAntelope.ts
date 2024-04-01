import { AntelopeData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

async function fetchAntelope(name: string) {
  const response = await fetch(`/api/antelopes/${name}`);
  const data = await response.json();
  return data;
}

export function useAntelope(name: string) {
  const result = useQuery<AntelopeData>({
    queryKey: ["antelope", name],
    queryFn: () => fetchAntelope(name),
  });

  return result;
}
