import { AntelopeData } from "@/types/types";

export async function GET(
  request: Request,
  { params }: { params: { name: string } },
) {
  try {
    const { name } = params;

    const response = await fetch(
      "https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json",
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      throw new Error(
        "Unable to fetch antelopes data from https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json",
      );
    }

    const antelopes: AntelopeData[] = await response.json();

    const antelopeIndex = antelopes
      .map((antelope) => antelope.name)
      .indexOf(name);

    if (antelopeIndex === -1) {
      throw new Error(`The antelope species "${name}" doesn't exist`);
    }

    const antelope = antelopes[antelopeIndex];

    return Response.json(antelope);
  } catch (e) {
    return Response.error();
  }
}
