import { AntelopeData } from "@/types/types";

export function countAntelopesPropertyOccurences(
  data: AntelopeData[],
  property: keyof AntelopeData,
) {
  const labels = Array.from(
    new Set(data.map((antelope) => antelope[property])),
  ).sort();

  const occurences = new Array(labels.length).fill(0);
  for (const antelope of data) {
    occurences[labels.indexOf(antelope[property])] += 1;
  }

  return occurences;
}
