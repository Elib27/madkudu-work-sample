import { AntelopeData } from "@/types/types";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { calculateWeightGainOrLossRatio } from "@/lib/calculateKuduComparison";
ChartJS.register(CategoryScale);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Weight of antelopes compared to kudu",
      color: "#182b52",
      font: {
        size: 18,
        family: "__Poppins_d306d5",
      },
    },
    legend: {
      display: false,
    },
  },
  aspectRatio: 1.5,
};

export default function HeigthWeightRatioChart({
  data,
}: {
  data: AntelopeData[];
}) {
  const chartDataSet = data.map((antelope) =>
    calculateWeightGainOrLossRatio(antelope.weight),
  );

  const chartData = {
    labels: data.map((antelope) => antelope.name),
    datasets: [
      {
        label: "Gain/Loss",
        data: chartDataSet,
        backgroundColor: chartDataSet.map((val) =>
          val > 0 ? "rgb(134, 239, 172)" : "rgb(248, 113, 113)",
        ),
      },
    ],
  };

  return <Bar data={chartData} options={options} />;
}
