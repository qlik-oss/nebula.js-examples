import data from './treedata_sample';
import createHyperCube from './create-tree-data';




export default function renderGrid(nebbie, element) {


  const dataArray = [];
  const first = ["one", "two", "three", "four", "five"];
  const second = ["A", "B", "C", "D", "E"];

  for(let i = 0; i < 5; i++) {
    dataArray.push([]);
    for(let j = 0; j < 5; j++) {
      dataArray[i][j] = Math.random();
    }
  }

  console.log(createHyperCube(dataArray, first, second));

  // Grid chart requires treedata, which is not available for generation in qix-faker
  return nebbie.render({
    type: 'grid',
    element,
    options: {
      // This "unlocks" the object, meaning it renders in its full container att zoom 1
      freeResize: true
    },
    properties: {
      _mock: {
        mode: "heatmap",
        legend: {
          show: false
        },
        qHyperCubeDef: null,
        qHyperCube: createHyperCube(dataArray, first, second),
        qSelectionInfo: {},
        snapshotData: {
          /*object: {
            size: {
              h: 601,
              w: 243,
            },
          },*/
          content: {
            chartData: {
              rotation: 0,
            },
            size: {
              h: 900,
              w: 700,
            },
          },
        },
      },
      // Bunch of color properties, many not actually needed
      "color": {
        "auto": false,
        "mode": "byMeasure",
        "formatting": {
          "numFormatFromTemplate": true,
          "quarantine": {
            "qNumFormat": {},
            "isCustomFormatted": false
          },
          "qNumFormat": null
        },
        "useBaseColors": "off",
        "paletteColor": {
          "index": 6
        },
        "useDimColVal": true,
        "useMeasureGradient": false,
        "expressionIsColor": true,
        "expressionLabel": "",
        "measureScheme": "dg",
        "reverseScheme": false,
        "dimensionScheme": "12",
        "autoMinMax": true,
        "measureMin": 0,
        "measureMax": 10,
        "altLabel": "KBgAFet",
        "byMeasureDef": {
          "label": "KBgAFet",
          "key": "KBgAFet",
          "type": "libraryItem"
        }
      },
      "legend": {
        "show": true,
        "dock": "auto",
        "showTitle": true
      },
    },
  });
}
