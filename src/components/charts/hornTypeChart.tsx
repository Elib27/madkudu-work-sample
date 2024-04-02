import { AntelopeData } from "@/types/types";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import { countAntelopesPropertyOccurences } from "@/lib/countAntelopesPropertyOccurences";

ChartJS.register(CategoryScale);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Distribution of horn types",
      color: "#182b52",
      font: {
        size: 18,
        family: "__Poppins_d306d5",
      },
    },
  },
};

export default function HornTypeChart({ data }: { data: AntelopeData[] }) {
  const chartData = {
    labels: Array.from(new Set(data.map((antelope) => antelope.horns))).sort(),
    datasets: [
      {
        label: "Number",
        data: countAntelopesPropertyOccurences(data, "horns"),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(116, 207, 80)",
          "rgb(160, 133, 232)",
          "rgb(234, 146, 87)",
        ],
        hoverOffset: 10,
      },
    ],
  };

  return <Doughnut data={chartData} options={options} />;
}
