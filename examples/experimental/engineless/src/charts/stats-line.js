import { hypercube } from 'qix-faker';

export default function renderLine(nebbie, element) {
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
    roc_curve: {
      '0.0': { fpr: 1.0, tpr: 1.0 },
      0.0019568633: { fpr: 0.06111111111111111, tpr: 0.9782608695652174 },
      0.0476767: { fpr: 0.037037037037037035, tpr: 0.967391304347826 },
      0.056997348: { fpr: 0.03148148148148148, tpr: 0.967391304347826 },
      0.08234378: { fpr: 0.03148148148148148, tpr: 0.9565217391304348 },
      0.24680501: { fpr: 0.018518518518518517, tpr: 0.9565217391304348 },
      0.2795856: { fpr: 0.018518518518518517, tpr: 0.9456521739130435 },
      0.5223799: { fpr: 0.014814814814814815, tpr: 0.9456521739130435 },
      0.53924954: { fpr: 0.014814814814814815, tpr: 0.9347826086956522 },
      0.647972583770752: { fpr: 0.009259259259259259, tpr: 0.9347826086956522 },
      0.75869495: { fpr: 0.007407407407407408, tpr: 0.9347826086956522 },
      0.83479404: { fpr: 0.007407407407407408, tpr: 0.9130434782608695 },
      0.8765063: { fpr: 0.005555555555555556, tpr: 0.9130434782608695 },
      0.9070853: { fpr: 0.005555555555555556, tpr: 0.8913043478260869 },
      0.9287432: { fpr: 0.003703703703703704, tpr: 0.8913043478260869 },
      0.9878439: { fpr: 0.001851851851851852, tpr: 0.717391304347826 },
      0.9999763: { fpr: 0.0, tpr: 0.010869565217391304 },
      '1.0': { fpr: 0.0, tpr: 0.0 },
    },
  };

  const rowData = [];

  for (const property in rawData.roc_curve) {
    rowData.push([parseFloat(property).toFixed(2), 1 - rawData.roc_curve[property].tpr]);
  }

  //rowData.sort((a, b) => b[1] - a[1]);

  const hyper = hypercube({
    numRows: rowData.length,
    dimensions: [
      {
        value: (f, i) => rowData[i][0],
        override: {
          qFallbackTitle: 'Somthing',
          qGroupFallbackTitles: [],
        },
      },
    ],
    measures: [
      {
        value: (f, i) => rowData[i][1],
        override: {
          qFallbackTitle: 'TPR',
          qNumFormat: {
            qType: 'U',
          },
          qTrendLines: [
            {
              qType: 'LINEAR',
              qCoeff: [0, 0.05],
              qR2: 0,
              qExpression: 'y = 0.1x',
              qElemNo: -1,
              label: '',
              style: {
                autoColor: true,
                paletteColor: {
                  color: '#f93f17',
                  index: 9,
                },
                dashed: true,
                lineDash: '8, 4',
              },
              cId: 'uzrgb',
            },
          ],
        },
      },
    ],
  });

  return nebbie.render({
    type: 'line',
    element,
    options: {
      // This "unlocks" the object, meaning it renders in its full container att zoom 1
      freeResize: true
    },
    properties: {
      _mock: {
        qHyperCubeDef: null,
        qHyperCube: hyper,
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
