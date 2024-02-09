import "./styles.css";
import embed from "./configure";
import connect from "./connect";
import * as chartConfigs from "./chartConfigs";

async function run() {
  const app = await connect({
    url: "",
    appId: "",
    webIntegrationId: "",
  });

  const n = embed(app);

  (await n.selections()).mount(document.querySelector(".toolbar"));

  Object.values(chartConfigs).forEach(n.render);
}

run();
