export const kpiConfig = {
  /** kpi config */
  type: "kpi",
  element: document.querySelector(".kpi_root"),
  fields: ["=avg(budget)"],
  properties: {
    title: "[Example #06]: Kpi",
  },
};
