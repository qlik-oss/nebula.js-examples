import { embed, EnigmaMocker } from '@nebula.js/stardust/dist/stardust.dev';
import pie from '@nebula.js/sn-pie-chart';
import local from "./charts/local-chart";
import { hypercube } from 'qix-faker';

async function init() {

  /* Setup */
  const types = [
    {
      name: 'local',
      load: () => Promise.resolve(local),
    },
    {
      name: 'pie',
      load: () => Promise.resolve(pie),
    },
  ];

  const genericObj = {
    getLayout() {
      return {
        qInfo: {
          qId: "HEY"
        }
      }
    }
  }

  const mockedApp = await EnigmaMocker.fromGenericObjects([genericObj]);

  const nebbie = embed(mockedApp, {
    types,
    context: {
      constraints: {
        select: true,
      },
    },
  });

  /* Render the locally created chart */
  const elementLocal = document.querySelector('.localChart');
  await nebbie.render({
    type: 'local',
    options: {
      // This "unlocks" the object, meaning it renders in its full container att zoom 1
      freeResize: true
    },
    element: elementLocal,
    properties: {
      title: 'My local chart',
    },
  });

  /* Render the pie chart */
  const countries = [ "Denmark","Finland","Iceland","Norway","Sweden"];

  const hyper = hypercube({
    numRows: countries.length,
    dimensions: [
      {
        value: (f, i) => countries[i],
        override: {
          qFallbackTitle: 'Countries',
          // These need to be patched in as the faker won't add them
          qGroupFallbackTitles: [],
          qCardinalities: {
            qCardinal: countries.length,
            qHypercubeCardinal: countries.length
          },
        },
      },
    ],
    measures: [
      {
        value: (f, i) => Math.random() * 1000,
        override: {
          qFallbackTitle: 'A Random value',
          // These need to be patched in as the faker won't add them
          qNumFormat: {
            qType: 'U',
          },
        },
      },
    ],
  });

  const elementPie = document.querySelector('.pie');

  await nebbie.render({
    type: 'pie',
    options: {
      // This "unlocks" the object, meaning it renders in its full container att zoom 1
      freeResize: true
    },
    element:elementPie,
    properties: {
      _mock: {
        qHyperCubeDef: null,
        qHyperCube: hyper,
        title: 'A pie chart',
        snapshotData: {
          // These settings will controls the object size and zoom unless freeResize is true
          /*
          object: {
            size: {
              h: 601,
              w: 243,
            },
          },
          content: {
            chartData: {
              rotation: 0,
            },
            size: {
              h: 601,
              w: 243,
            },
          },*/
        },
      },
    },
  });

}

init();
