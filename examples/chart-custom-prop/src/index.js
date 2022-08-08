import { useElement, useLayout } from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const layout = useLayout();
      const data = layout.qHyperCube.qDataPages[0].qMatrix;
      const measure = layout.qHyperCube.qMeasureInfo[0];
      const color = layout.color.textColor.color;
      element.innerHTML = `<div style="color: ${color}">${measure.qFallbackTitle}: ${data[0][0].qText}</div>`; // eslint-disable-line
    },
  };
}
