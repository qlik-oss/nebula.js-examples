import "./styles.css";
import embed from "./configure";
import connect from "./connect";
import connectLocal from "./connect-local";

import * as chartConfigs from "./chartConfigs";

const config = {
  local: false,
  url: "https://my-tenant.qlikcloud.com",
  webIntegrationId: "<REPLACE_ME>",
  appId: "<REPLACE_ME>",
};

async function run() {
  let app;
  if(config.local) {
    app = await connectLocal({ appId: "apps/the_movies.qvf" });
  } else {
    app = await connect(config);
  }


  const n = embed(app);

  (await n.selections()).mount(document.querySelector(".toolbar"));

  Object.values(chartConfigs).forEach(n.render);
}

run();
