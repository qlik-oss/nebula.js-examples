import {
  useElement,
  useLayout,
  usePromise,
  useEffect,
  useState,
} from "@nebula.js/stardust";
import properties from "./object-properties";
import data from "./data";
import ext from "./ext";

// Async here as example
async function parseData(layout) {
  return new Promise((resolve, reject) => {
    if (layout && layout.qHyperCube.qDataPages[0].qMatrix.length) {
      resolve(layout.qHyperCube.qDataPages[0].qMatrix);
    }
    reject("No data");
  });
}

export default function supernova(env) {
  return {
    qae: {
      properties,
      data,
    },
    ext: ext(env),
    component() {
      const element = useElement();
      const layout = useLayout();
      const [myState, setMyState] = useState("initial");
      const [data, error] = usePromise(async () => {
        return parseData(layout);
      }, [layout]);

      useEffect(() => {
        setMyState("updated");
      }, []);

      useEffect(() => {
        if (element) {
          if (error) {
            element.innerHTML = `<div>${error}</div>`; // eslint-disable-line
          } else if (data && layout) {
            const measure = layout.qHyperCube.qMeasureInfo[0] || "";
            const color = layout.color.textColor.color;
            element.innerHTML = `<div style="color: ${color}">${measure.qFallbackTitle}: ${data[0][0].qText}</div>`; // eslint-disable-line
          }
        }
      }, [data, element]);
    },
  };
}
