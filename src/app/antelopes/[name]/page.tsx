"use client";
import { useAntelope } from "@/hooks/useAntelope";
import Link from "next/link";
import Image from "next/image";
import { Spinner } from "@chakra-ui/react";
import { ArrowBackIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import {
  calculateHeightGainOrLossRatio,
  calculateWeightGainOrLossRatio,
} from "@/lib/calculateKuduComparison";

export default function AntelopeDetails({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  const { data: antelope, isLoading, isError } = useAntelope(name);

  if (isError)
    return (
      <main className="flex h-screen flex-col items-center justify-center text-center">
        <div className="text-xl font-medium text-red-500">
          <WarningIcon />
          <span> Something went wrong!</span>
        </div>
        <Link
          className="mt-8 block w-fit rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white"
          href="/posts"
        >
          Back to Antelopes
        </Link>
      </main>
    );

  if (isLoading)
    return (
      <main className="flex min-h-screen items-center justify-center p-8">
        <Spinner size="lg" />
      </main>
    );

  if (!antelope) return <div>No Antelopes data to display</div>;

  const antelopeWeightRatio = calculateWeightGainOrLossRatio(antelope.weight);
  const antelopeHeightRatio = calculateHeightGainOrLossRatio(antelope.height);

  const antelopeWeightPercentage =
    Math.round(antelopeWeightRatio * 100 * 100) / 100;
  const antelopeHeightPercentage =
    Math.round(antelopeHeightRatio * 100 * 100) / 100;

  return (
    <main className="relative flex min-h-[calc(100vh-var(--footer-height))] flex-col items-center bg-zinc-50 p-8">
      <Link
        href={"/antelopes"}
        className="absolute left-8 top-4 rounded bg-sky-900 p-2 transition-colors hover:bg-sky-600"
      >
        <ArrowBackIcon w={8} h={8} color="white" />
      </Link>
      <h1 className="pb-8 pt-4 text-center text-4xl font-bold">
        {antelope.name}
      </h1>
      <div className="flex w-10/12 max-w-5xl flex-col justify-between gap-4 pt-[4vh] md:flex-row">
        <div className="grid min-w-56 grid-cols-2 place-items-center gap-8 whitespace-nowrap md:justify-items-start">
          <Stat>
            <StatLabel>Height</StatLabel>
            <StatNumber>{antelope.height}ft</StatNumber>
            <StatHelpText>
              <StatArrow
                type={antelopeHeightPercentage >= 0 ? "increase" : "decrease"}
              />
              {antelopeHeightPercentage}%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Weight</StatLabel>
            <StatNumber>{antelope.weight}lbs</StatNumber>
            <StatHelpText>
              <StatArrow
                type={antelopeWeightPercentage >= 0 ? "increase" : "decrease"}
              />
              {antelopeWeightPercentage}%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Horn type</StatLabel>
            <StatNumber>{antelope.horns}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Continent</StatLabel>
            <StatNumber>{antelope.continent}</StatNumber>
          </Stat>
        </div>
        <div className="flex justify-center">
          <Image
            src={antelope.picture}
            alt={antelope.name}
            width={500}
            height={400}
            className="min-w-0 rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
