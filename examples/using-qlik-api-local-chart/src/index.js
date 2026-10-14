/* eslint-disable */
import qlikApi from "@qlik/api";
import { embed } from "@nebula.js/stardust";
import barchart from "@nebula.js/sn-bar-chart";
import localChart from "./local-chart.js";

async function run() {
  // need to disable cache for oauth to work?

  const appId = "dc60cf2e-224b-47f7-870c-1045245e6481";
  const hostConfig = {
    authType: "cookie",
    host: "gqs.eu.qlik-stage.com", // a qlikcloud tenant
    webIntegrationId: "OArX6GUgRMozIUifhGEZmeRYplD10Zie",
    // clientId: "f8889245c7d09ada7b70ea955ba9df8a",
    accessTokenStorage: "session",
  };

  await qlikApi.auth.setDefaultHostConfig(hostConfig);
  const appSession = qlikApi.qix.openAppSession(appId);
  const app = await appSession.getDoc();

  const nebula = embed(app, {
    context: {
      qlikApi,
    },
    types: [
      { name: "barchart", load: () => Promise.resolve(barchart) },
      { name: "local-chart", load: () => Promise.resolve(localChart) },
    ],
  });

  const viz = await nebula.render({
    element: document.querySelector(".object"),
    fields: ["[10k Long dim]", "=avg([10k Value])"],
    type: "local-chart",
  });
  const props = await viz.model.getProperties();
  props.qLayoutExclude = { hidden: "notInTheLayout" };

  //(await nebula.selections()).mount(document.querySelector(".toolbar"));

  await viz.model.setProperties(props);
}

run();
