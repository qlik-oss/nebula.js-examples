import { embed } from "@nebula.js/stardust";

import barChart from "@nebula.js/sn-bar-chart/core/esm";
import lineChart from "@nebula.js/sn-line-chart/core/esm";
import scatterPlot from "@nebula.js/sn-scatter-plot/core/esm";

const nebula = embed.createConfiguration({
  context: {
    theme: "light",
    language: "en-US",
  },
  types: [
    {
      name: "bar-chart",
      load: () => Promise.resolve(barChart),
    },
    {
      name: "line-chart",
      load: () => Promise.resolve(lineChart),
    },
    {
      name: "scatter-plot",
      load: () => Promise.resolve(scatterPlot),
    },
  ],
});

export default nebula;
