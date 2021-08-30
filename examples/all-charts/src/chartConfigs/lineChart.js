export const lineChartConfig = {
  /** line chart config */
  type: "line-chart",
  element: document.querySelector(".line_root"),
  fields: ["budget", "=avg(revenue)", "=sum(budget)"],
  properties: {
    title: "[Example #07]: line chart",
  },
};
