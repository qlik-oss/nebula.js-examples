export const barChartConfig = {
  /** bar chart config */
  type: "bar-chart",
  element: document.querySelector(".bar_root"),
  fields: ["title", "=sum(revenue)", "=max(budget)"],
  properties: {
    title: "[Example #02]: bar chart",
  },
};
