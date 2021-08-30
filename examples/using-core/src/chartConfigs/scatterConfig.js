export const scatterPlotConfig = {
  /** scatter plot config */
  type: "scatter-plot",
  element: document.querySelector(".scatter_root"),
  // fields: ["rating", "avg=(budget)", "avg(revenue)"],
  properties: {
    title: "[Example #3]: scatter plot",
    qHyperCubeDef: {
      qDimensions: [
        {
          qDef: {
            qFieldDefs: ["rating"],
          },
        },
      ],
      qMeasures: [
        {
          qDef: {
            qDef: "Avg(budget)",
          },
        },
        {
          qDef: {
            qDef: "Avg(revenue)",
          },
        },
      ],
    },
  },
};
