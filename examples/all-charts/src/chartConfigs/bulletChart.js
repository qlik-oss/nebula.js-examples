export const bulletChartConfig = {
  /** bullet chart config */
  type: "bullet-chart",
  element: document.querySelector(".bullet_root"),
  fields: ["budget", "=sum(revenue)", "=sum(rating)"],
  properties: {
    title: "[Example #02]: bullet chart",
  },
};
