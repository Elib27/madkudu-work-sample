"use client";
import Charts from "@/components/charts/charts";
import AntelopeTable from "@/components/antelopeTable";
import { Spinner, Divider } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useAntelopes } from "../../hooks/useAntelopes";

export default function App() {
  const { data: antelopesData, isLoading, isError } = useAntelopes();

  if (isError)
    return (
      <main className="flex min-h-screen items-center justify-center p-8">
        <div className="text-red-500">
          <WarningIcon />
          <span> Something went wrong!</span>
        </div>
      </main>
    );

  if (isLoading)
    return (
      <main className="flex min-h-screen items-center justify-center p-8">
        <Spinner size="lg" />
      </main>
    );

  if (!antelopesData) return <div>No Antelopes data to display</div>;

  return (
    <main className="min-h-screen bg-blue-100 p-8">
      <h1 className="text-primary py-4 text-center text-3xl font-bold">
        Antelopes Analytics
      </h1>
      <Charts data={antelopesData} />
      <div className="border-primary flex justify-center py-8">
        <Divider orientation="horizontal" w="60%" />
      </div>
      <h2 className="text-primary py-4 text-center text-3xl font-bold">
        Antelope Species
      </h2>
      <p className="pb-8 pt-4 text-center italic">
        Sort the table by clicking on the column headers
      </p>
      <AntelopeTable data={antelopesData} />
    </main>
  );
}
