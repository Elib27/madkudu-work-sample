import { AntelopeData } from "@/types/types";
import { Scatter } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
ChartJS.register(CategoryScale);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Antelope height/weight ratio",
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
  const chartData = {
    labels: data.map((antelope) => antelope.weight),
    datasets: [
      {
        label: "Height/weight ratio",
        data: data.map((antelope) => antelope.height),
      },
    ],
  };

  return <Scatter data={chartData} options={options} />;
}
