import { AntelopeData } from "@/types/types";
import HeightWeightRatioChart from "./heightWeightRatioChart";
import HornTypeChart from "./hornTypeChart";
import WeightKuduComparisonChart from "./weightKuduComparisonChart";
import LocalisationChart from "./continentChart";

export default function Charts({ data }: { data: AntelopeData[] }) {
  return (
    <section className="flex justify-center">
      <div className="grid w-full max-w-screen-xl gap-8 py-8 lg:grid-cols-5">
        <div className="flex max-h-[30rem] items-center justify-center rounded-3xl bg-zinc-50 p-4 lg:col-span-3">
          <HeightWeightRatioChart data={data} />
        </div>
        <div className="flex max-h-[30rem] items-center justify-center rounded-3xl bg-zinc-50 p-4 lg:col-span-2">
          <HornTypeChart data={data} />
        </div>
        <div className="flex max-h-[30rem] items-center justify-center rounded-3xl bg-zinc-50 p-4 lg:col-span-3">
          <WeightKuduComparisonChart data={data} />
        </div>
        <div className="flex max-h-[30rem] items-center justify-center rounded-3xl bg-zinc-50 p-4 lg:col-span-2">
          <LocalisationChart data={data} />
        </div>
      </div>
    </section>
  );
}
