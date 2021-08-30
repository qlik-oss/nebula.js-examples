export const gridChartConfig = {
  /** grid chart config */
  type: "grid-chart",
  element: document.querySelector(".grid_root"),
  fields: ["=sum(budget)", "title", "revenue"],
  properties: {
    title: "[Example #05]: grid chart",
    xAxis: {
      show: "label",
      dock: "near",
      gridLines: false,
    },
    yAxis: {
      show: "label",
      dock: "near",
      gridLines: false,
    },
  },
};
