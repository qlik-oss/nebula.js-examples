export const mekkoChartConfig = {
  /** mekko chart config */
  type: "mekko-chart",
  element: document.querySelector(".mekko_root"),
  fields: ["rating", "id", "=sum(revenue)"],
  properties: {
    title: "[Example #08]: mekko chart",
  },
};
