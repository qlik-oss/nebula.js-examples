import "./styles.css";
import embed from "./configure";
import connect from "./connect";
import { CONNECTION_TYPES } from "./connect";
import * as chartConfigs from "./chartConfigs";

async function run() {
  const app = await connect({
    url: "https://a360.us.qlik-stage.com",
    appId: "8e19ef43-ddd7-42ca-bb4b-d7acc7d64fbc",
    webIntegrationId: "zo_Fgzt0jHLijWZsqGo_vfHdmYhXq8rt",
    connectionType: CONNECTION_TYPES.OAUTH,
  });

  const n = embed(app);

  (await n.selections()).mount(document.querySelector(".toolbar"));

  Object.values(chartConfigs).forEach(n.render);
}

run();
