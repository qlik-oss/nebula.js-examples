export const scatterPlotConfig = {
  /** scatter plot config */
  type: "scatter-plot",
  element: document.querySelector(".scatter_root"),
  properties: {
    title: "[Example #11]: scatter plot",
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
