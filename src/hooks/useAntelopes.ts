import { AntelopeData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

async function fetchAntelopes() {
  const response = await fetch("/api/antelopes");
  const data = await response.json();
  return data;
}

export function useAntelopes() {
  const result = useQuery<AntelopeData[]>({
    queryKey: ["antelopes"],
    queryFn: fetchAntelopes,
  });

  return result;
}
