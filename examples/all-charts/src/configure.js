import { embed } from "@nebula.js/stardust";

import barChart from "@nebula.js/sn-bar-chart/core/esm";
import bulletChart from "@nebula.js/sn-bullet-chart/core/esm";
import comboChart from "@nebula.js/sn-combo-chart/core/esm";
import funnelChart from "@nebula.js/sn-funnel-chart/core/esm";
import gridChart from "@nebula.js/sn-grid-chart/core/esm";
import kpi from "@nebula.js/sn-kpi/core/esm";
import lineChart from "@nebula.js/sn-line-chart/core/esm";
import mekkoChart from "@nebula.js/sn-mekko-chart/core/esm";
import orgChart from "@nebula.js/sn-org-chart/core/esm";
import sankeyChart from "@nebula.js/sn-sankey-chart/core/esm";
import scatterPlot from "@nebula.js/sn-scatter-plot/core/esm";
import table from "@nebula.js/sn-table/core/esm";
import pieChart from "@nebula.js/sn-pie-chart/core/esm";
import pivotTable from "@nebula.js/sn-pivot-table/core/esm";
import actionButton from "@nebula.js/sn-action-button/core/esm";

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
      name: "bullet-chart",
      load: () => Promise.resolve(bulletChart),
    },
    {
      name: "combo-chart",
      load: () => Promise.resolve(comboChart),
    },
    {
      name: "funnel-chart",
      load: () => Promise.resolve(funnelChart),
    },
    {
      name: "grid-chart",
      load: () => Promise.resolve(gridChart),
    },
    {
      name: "kpi",
      load: () => Promise.resolve(kpi),
    },
    {
      name: "line-chart",
      load: () => Promise.resolve(lineChart),
    },
    {
      name: "mekko-chart",
      load: () => Promise.resolve(mekkoChart),
    },
    {
      name: "sn-org-chart",
      load: () => Promise.resolve(orgChart),
    },
    {
      name: "sankey-chart",
      load: () => Promise.resolve(sankeyChart),
    },
    {
      name: "scatter-plot",
      load: () => Promise.resolve(scatterPlot),
    },
    {
      name: "table",
      load: () => Promise.resolve(table),
    },
    {
      name: "pie-chart",
      load: () => Promise.resolve(pieChart),
    },
    {
      name: "pivot-table",
      load: () => Promise.resolve(pivotTable),
    },
    {
      name: "action-button",
      load: () => Promise.resolve(actionButton),
    },
  ],
});

export default nebula;
