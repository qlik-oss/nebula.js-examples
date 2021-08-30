export const pieChartConfig = {
  /** pie chart config */
  type: "pie-chart",
  element: document.querySelector(".pie_root"),
  fields: ["title", "=avg(budget)", "=avg(revenue)"],
  properties: {
    title: "[Example #13]: pie chart",
    dataPoint: {
      labelMode: "share",
    },
    donut: {
      showAsDonut: true,
    },
  },
};
