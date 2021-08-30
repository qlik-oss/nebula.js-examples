export const funnelChartConfig = {
  /** funnel chart config */
  type: "funnel-chart",
  element: document.querySelector(".funnel_root"),
  fields: ["budget", "=sum(revenue)"],
  properties: {
    title: "[Example #04]: funnel chart",
  },
};
