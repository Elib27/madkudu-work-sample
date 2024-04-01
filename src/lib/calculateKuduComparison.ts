const kuduData = {
  name: "Kudu",
  continent: "Africa",
  weight: 150,
  height: 35,
  horns: "Twisted",
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/e/ec/Male_Lesser_Kudu.jpg",
};

export function calculateWeightGainOrLossRatio(wheight: number) {
  return (wheight - kuduData.weight) / kuduData.weight;
}

export function calculateHeightGainOrLossRatio(height: number) {
  return (height - kuduData.height) / kuduData.height;
}
