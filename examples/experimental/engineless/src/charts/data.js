/* eslint arrow-body-style: 0 */
import { hypercube } from 'qix-faker';
import names from './names';

const rowData = [];

names.forEach(name=>{
  rowData.push([name, Math.random()]);
});

rowData.sort((a, b) => b[1] - a[1]);

const hyper = hypercube({
  numRows: rowData.length,
  dimensions: [
    {
      value: (f, i) => rowData[i][0],
      override: {
        qFallbackTitle: 'Name',
        // These need to be patched in as the faker won't add them
        qGroupFallbackTitles: [],
        qContinuousAxes: false,
        qCardinalities: {
          qCardinal: rowData.length,
          qHypercubeCardinal: rowData.length,
          qAllValuesCardinal: -1
        },
      },
    },
  ],
  measures: [
    {
      value: (f, i) => rowData[i][1],
      override: {
        qFallbackTitle: 'Value',
        // These need to be patched in as the faker won't add them
        qNumFormat: {
          qType: 'U',
        },
      },
    },
  ],
});

export function getBarLayout() {
  return {
    qHyperCubeDef: null,
    qHyperCube: hyper,
    snapshotData: { },
    visualization: 'barchart',
    title: 'This is the title of the barchart',
    subtitle: 'here is the subtitle',
    footnote: 'and here is a footnote',
    showTitles: true,
    components: [
      {
        key: 'general',
        title: {
          main: {
            color: { color: 'green' },
            fontFamily: 'Verdana',
          },
          subTitle: {
            color: { color: 'blue' },
            fontStyle: ['bold', 'italic', 'underline'],
          },
          footer: {
            color: { color: 'red' },
            fontFamily: 'Lucida Console, monospace',
          },
        },
        bgColor: {
          color: { color: '#eeeeee' },
        },
      },
    ],
  };
}

export function getLineLayout () {
  return {
    qHyperCubeDef: null,
    qHyperCube: hyper,
    snapshotData: { },
    visualization: 'linechart',
  };
}
