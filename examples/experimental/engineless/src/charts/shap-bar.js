import { hypercube } from 'qix-faker';

export default function renderBar(nebbie, element) {
  const rawData = {
    shapImportance: {
      CancelDate: 2.620678663253784,
      BaseFee: 1.0169050693511963,
      NumberOfPenalties: 0.9636048078536987,
      LastServiceDate: 0.7058525681495667,
      Territory: 0.42820465564727783,
      AdditionalFeatureSpend: 0.4053150713443756,
      CurrentPeriodUsage: 0.31851762533187866,
      ServiceRating: 0.28129085898399353,
      PriorPeriodUsage: 0.17497225105762482,
      ServiceTickets: 0.10682372748851776,
      AccountName: 0.0,
      StartDate: 0.0,
      AccountID: 0.0,
      Country: 0.0,
      HasRenewed: 0.34212690591812134,
      Promotion: 0.23580706119537354,
      PlanName: 2.3006500616902485,
    },
  };

  const rowData = [];

  for (const property in rawData.shapImportance) {
    rowData.push([property, rawData.shapImportance[property]]);
  }

  rowData.sort((a, b) => b[1] - a[1]);

  const hyper = hypercube({
    numRows: rowData.length,
    dimensions: [
      {
        value: (f, i) => rowData[i][0],
        override: {
          qFallbackTitle: 'SHAP',
          // These need to be patched in as the faker won't add them
          qGroupFallbackTitles: [],
          qCardinalities: {
            qCardinal: rowData.length,
            qHypercubeCardinal: rowData.length
          },
        },
      },
    ],
    measures: [
      {
        value: (f, i) => rowData[i][1],
        override: {
          qFallbackTitle: 'Score',
          // These need to be patched in as the faker won't add them
          qNumFormat: {
            qType: 'U',
          },
        },
      },
    ],
  });

  return nebbie.render({
    type: 'bar',
    options: {
      // This "unlocks" the object, meaning it renders in its full container att zoom 1
      freeResize: true
    },
    element,
    properties: {
      _mock: {
        qHyperCubeDef: null,
        qHyperCube: hyper,
        title: 'Feature Importance',
        subtitle: 'How much does the model rely on each feature',
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
