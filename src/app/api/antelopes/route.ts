export async function GET() {
  try {
    const response = await fetch(
      "https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json",
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      throw new Error(
        "Unable to fetch antelopes data from https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json",
      );
    }

    const antelopes = await response.json();

    return Response.json(antelopes);
  } catch (e) {
    return Response.error();
  }
}
