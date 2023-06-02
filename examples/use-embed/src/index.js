import { useElement, useEmbed } from "@nebula.js/stardust";
import ext from "./ext";

export default function supernova() {
  return {
    qae: {
      properties: {},
    },
    ext,
    component() {
      const element = useElement();
      const embed = useEmbed();

      embed.render({
        element,
        type: "kpi",
        fields: ["=rand()"],
      });
    },
  };
}
