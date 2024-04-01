import { AntelopeData } from "@/types/types";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { countAntelopesPropertyOccurences } from "@/lib/countAntelopesPropertyOccurences";

ChartJS.register(CategoryScale);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Distribution of continents",
      color: "#182b52",
      font: {
        size: 18,
        family: "__Poppins_d306d5",
      },
    },
  },
};

export default function ContinentChart({ data }: { data: AntelopeData[] }) {
  const chartData = {
    labels: Array.from(
      new Set(data.map((antelope) => antelope.continent)),
    ).sort(),
    datasets: [
      {
        label: "Number",
        data: countAntelopesPropertyOccurences(data, "continent"),
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 10,
      },
    ],
  };

  return <Pie data={chartData} options={options} />;
}
