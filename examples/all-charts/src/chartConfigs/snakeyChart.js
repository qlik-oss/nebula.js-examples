export const snakeyChartConfig = {
  /** sankey chart config */
  type: "sankey-chart",
  element: document.querySelector(".snakey_root"),
  properties: {
    title: "[Example #10]: snakey chart",
    qHyperCubeDef: {
      qDimensions: [
        {
          qDef: {
            qFieldDefs: ["budget"],
          },
          qAttributeExpressions: [
            {
              qExpression:
                "if(Sum(total<budget> Margin) > 1000000000, '#53ac94', '#ac536b')",
            },
          ],
        },
        {
          qDef: {
            qFieldDefs: ["rating"],
          },
          qAttributeExpressions: [
            {
              qExpression: "'#28bad7'",
            },
          ],
        },
      ],
      qMeasures: [
        {
          qDef: {
            qDef: "Sum(revenue)",
          },
          qAttributeExpressions: [
            {
              qExpression:
                "if(Sum(revenue) > 10000000000, '#53ac94', '#ac536b')",
            },
          ],
        },
      ],
      qInitialDataFetch: [
        {
          qLeft: 0,
          qTop: 0,
          qWidth: 6,
          qHeight: 1000,
        },
      ],
    },
  },
};
