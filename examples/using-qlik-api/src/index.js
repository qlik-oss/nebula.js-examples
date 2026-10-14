/* eslint-disable */
import qlikApi from "@qlik/api";
import { embed } from "@nebula.js/stardust";
import barchart from "@nebula.js/sn-bar-chart";

async function run() {
  // need to disable cache for oauth to work?

  const appId = "56ff68c8-14a6-4e23-ae7a-c70272962d27";
  const hostConfig = {
    authType: "cookie",
    host: "<REPLACE_ME>", // a qlikcloud tenant
    webIntegrationId: "<REPLACE_ME>",
    // clientId: "<REPLACE_ME>",
    accessTokenStorage: "session",
  };

  await qlikApi.auth.setDefaultHostConfig(hostConfig);
  const appSession = qlikApi.qix.openAppSession(appId);
  const app = await appSession.getDoc();

  try {
    const spaces = await qlikApi.spaces.getSpaces({});
    console.log("Spaces:", spaces);
  } catch (err) {
    console.error("Error fetching spaces:", err);
  }

  const nebula = embed(app, {
    context: {
      qlikApi,
    },
    types: [{ name: "barchart", load: () => Promise.resolve(barchart) }],
  });

  //nebula.render({ element: document.querySelector(".object"), id: "<REPLACE_ME>" });

  (await nebula.selections()).mount(document.querySelector(".toolbar"));
}

run();
