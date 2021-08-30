export const comboChartConfig = {
  /** combo chart config */
  type: "combo-chart",
  element: document.querySelector(".combo_root"),
  fields: ["budget", "=sum(revenue)", "=sum(budget)", "=avg(revenue)"],
  properties: {
    title: "[Example #03]: combo chart",
  },
};
