import { useElement, useEffect, useLayout } from "@nebula.js/stardust";

export default function supernova() {
  return {
    qae: {
      properties: {
        qHyperCubeDef: {
          qDimensions: [],
          qMeasures: [],
          /** @type {boolean} */
          qSuppressZero: false,
          /** @type {boolean} */
          qSuppressMissing: true,
          //qInitialDataFetch: [{ qWidth: 500, qHeight: 10 }],
        },
        showTitles: false,
        title: "",
        subtitle: "",
        footnote: "",
        showDetails: false,
        color: {
          textColor: {
            index: -1,
            color: "#ff0000",
          },
        },
      },
      data: {
        targets: [
          {
            path: "/qHyperCubeDef",
            dimensions: {
              min: 1,
              max: 1,
            },
            measures: {
              min: 1,
              max: 1,
            },
          },
        ],
      },
    },
    component() {
      const element = useElement();
      const layout = useLayout();

      useEffect(() => {
        if (element) {
          element.innerHTML = `<div style="color:red">Hello from local chart!</div> layout: ${JSON.stringify(
            layout
          )}`; // eslint-disable-line
        }
      }, [element, layout]);
    },

    ext: {},
  };
}
