import data from './treedata_sample';

export default function renderGrid(nebbie, element) {

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
        qHyperCube: data,
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
    },
  });
}
