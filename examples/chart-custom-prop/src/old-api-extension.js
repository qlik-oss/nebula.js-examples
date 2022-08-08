// Example on how th simple-chart would look in the old Extensions API

define([], function () {
  "use strict";

  return {
    definition: {
      type: "items",
      component: "accordion",
      items: {
        dimensions: {
          uses: "dimensions",
        },
        measures: {
          uses: "measures",
        },
      },
      color: {
        textColor: {
          component: "color-picker",
          type: "object",
          ref: "color.textColor",
          translation: "properties.color",
        },
      },
    },

    initialProperties: {
      qHyperCubeDef: {
        qDimensions: [],
        qMeasures: [],
        qInitialDataFetch: [
          {
            qWidth: 10,
            qHeight: 100,
          },
        ],
      },
      color: {
        textColor: {
          index: -1,
          color: "#ff0000",
        },
      },
    },

    paint: function ($element, layout) {
      $element.empty();
      const data = layout.qHyperCube.qDataPages[0].qMatrix;
      const measure = layout.qHyperCube.qMeasureInfo[0];
      const color = layout.color.textColor.color;
      element.innerHTML = `<div style="color: ${color}">${measure.qFallbackTitle}: ${data[0][0].qText}</div>`; // eslint-disable-line
    },
  };
});
