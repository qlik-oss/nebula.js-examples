export default {
  _variables: {
    '@B20': '#333333',
    '@B35': '#595959',
    '@B45': '#737373',
    '@B50': '#808080',
    '@B60': '#999999',
    '@B80': '#cccccc',
    '@B90': '#e6e6e6',
    '@B98': '#fbfbfb',
    '@B100': '#ffffff',
    '@H1': '24px',
    '@H2': '18px',
    '@H3': '14px',
    '@H4': '13px',
    '@H5': '12px',
    '@H6': '10px',
  },
  color: '@B35',
  fontSize: '13px',
  fontFamily: 'QlikView Sans, sans-serif',
  backgroundColor: 'red',
  type: 'light',
  object: {
    line: {
      highContrast: {
        color: '@B60',
      },
      major: {
        color: '@B80',
      },
      minor: {
        color: '@B90',
      },
    },
    title: {
      main: {
        color: '@B50',
        fontSize: '15px',
      },
      subTitle: {
        color: '@B50',
        fontSize: '12px',
      },
      footer: {
        color: '@B50',
        fontSize: '12px',
        backgroundColor: 'transparent',
      },
    },
    label: {
      name: {
        color: '@B20',
        fontSize: '13px',
      },
      value: {
        color: '@B20',
        fontSize: '13px',
      },
    },
    axis: {
      title: {
        fontSize: '12px',
        color: '@B20',
      },
      label: {
        name: {
          color: '@B35',
          fontSize: '12px',
        },
      },
      line: {
        major: {
          color: '@B80',
        },
        minor: {
          color: '@B90',
        },
      },
    },
    grid: {
      line: {
        highContrast: {
          color: '@B60',
        },
        major: {
          color: '@B80',
        },
        minor: {
          color: '@B90',
        },
      },
    },
    referenceLine: {
      label: {
        name: {
          color: '@B20',
          fontSize: '12px',
        },
      },
      outOfBounds: {
        color: '@B90',
        backgroundColor: '@B45',
        fontSize: '@H6',
      },
    },
    legend: {
      title: {
        fontSize: '15px',
        color: '@B20',
      },
      label: {
        fontSize: '13px',
        color: '@B35',
      },
    },
    barChart: {
      backgroundColor: 'green',
      outOfRange: {
        color: '@B60',
      },
      label: {
        value: {
          color: '@B35',
          fontSize: '11px',
        },
      },
    },
    bulletChart: {
      outOfRange: {
        color: '@B60',
      },
      label: {
        value: {
          color: '@B35',
          fontSize: '11px',
        },
      },
    },
    comboChart: {
      outOfRange: {
        color: '@B60',
      },
      label: {
        value: {
          color: '@B35',
          fontSize: '11px',
        },
      },
    },
    gauge: {
      label: {
        value: {
          color: '@B20',
          fontSize: '42px',
        },
      },
    },
    treemap: {
      branch: {
        backgroundColor: '.alpha(5)',
        label: {
          color: '.inherit()',
          fontSize: '14px',
        },
      },
      leaf: {
        label: {
          fontSize: '12px',
        },
      },
    },
    scatterPlot: {
      label: {
        value: {
          color: '@B35',
          fontSize: '12px',
        },
      },
    },
    lineChart: {
      backgroundColor: 'blue',
      outOfRange: {
        color: '@B60',
      },
      label: {
        value: {
          color: '@B35',
          fontSize: '12px',
        },
      },
    },
    pieChart: {
      axis: {
        title: {
          fontSize: '12px',
        },
      },
      label: {
        name: {
          color: '@B20',
          fontSize: '14px',
        },
        value: {
          fontSize: '12px',
        },
      },
    },
    straightTable: {
      header: {
        fontSize: '@H4',
        color: '@B35',
      },
      content: {
        fontSize: '@H4',
        color: '@B35',
        hover: {
          backgroundColor: 'inherit',
          color: 'inherit',
        },
      },
    },
    pivotTable: {
      header: {
        fontSize: '@H4',
        color: '@B35',
      },
      content: {
        fontSize: '@H4',
        color: '@B35',
        hover: {
          backgroundColor: 'inherit',
          color: 'inherit',
        },
      },
    },
    listBox: {
      title: {
        main: {
          color: '@B35',
          fontSize: '13px',
        },
      },
      content: {
        color: '@B35',
        fontSize: '12px',
      },
    },
    boxPlot: {
      box: {
        whisker: {
          stroke: '@B35',
        },
        line: {
          stroke: '@B35',
        },
        box: {
          fill: '@B90',
          stroke: '@B35',
        },
      },
    },
    distributionPlot: {
      box: {
        fill: '@B90',
      },
    },
    histogram: {
      label: {
        value: {
          color: '@B35',
          fontSize: '12px',
        },
      },
    },
    waterfallChart: {
      label: {
        value: {
          color: '@B35',
          fontSize: '12px',
        },
      },
      value: {
        color: {
          default: '@B35',
          dark: '@B35',
          light: '@B90',
        },
      },
      shape: {
        positiveValue: {
          fill: '#4477AA',
        },
        negativeValue: {
          fill: '#cc6677',
        },
        subtotal: {
          fill: '#c3c3c3',
        },
        bridge: {
          stroke: '@B50',
        },
      },
    },
    mapChart: {
      label: {
        value: {
          color: '@B35',
          fontSize: '12px',
        },
      },
    },
    kpi: {
      label: {
        name: {
          color: '@B35',
        },
      },
    },
  },
  dataColors: {
    primaryColor: '#4477aa',
    othersColor: '#a5a5a5',
    errorColor: '#ff4444',
    nullColor: '#d2d2d2',
  },
  palettes: {
    data: [
      {
        name: '12 Colors',
        translation: 'properties.colorNumberOfColors.12',
        propertyValue: '12',
        type: 'pyramid',
        scale: [
          ['#4477aa'],
          ['#4477aa', '#cc6677'],
          ['#4477aa', '#ddcc77', '#cc6677'],
          ['#4477aa', '#117733', '#ddcc77', '#cc6677'],
          ['#332288', '#88ccee', '#117733', '#ddcc77', '#cc6677'],
          ['#332288', '#88ccee', '#117733', '#ddcc77', '#cc6677', '#aa4499'],
          ['#332288', '#44aa99', '#88ccee', '#117733', '#ddcc77', '#cc6677', '#aa4499'],
          ['#332288', '#44aa99', '#88ccee', '#117733', '#999933', '#ddcc77', '#cc6677', '#aa4499'],
          ['#332288', '#44aa99', '#88ccee', '#117733', '#999933', '#ddcc77', '#cc6677', '#882255', '#aa4499'],
          [
            '#332288',
            '#44aa99',
            '#88ccee',
            '#117733',
            '#999933',
            '#ddcc77',
            '#661100',
            '#cc6677',
            '#882255',
            '#aa4499',
          ],
          [
            '#332288',
            '#6699cc',
            '#44aa99',
            '#88ccee',
            '#117733',
            '#999933',
            '#ddcc77',
            '#661100',
            '#cc6677',
            '#882255',
            '#aa4499',
          ],
          [
            '#332288',
            '#6699cc',
            '#88ccee',
            '#44aa99',
            '#117733',
            '#999933',
            '#ddcc77',
            '#661100',
            '#cc6677',
            '#aa4466',
            '#882255',
            '#aa4499',
          ],
        ],
      },
      {
        name: '100 Colors',
        translation: 'properties.colorNumberOfColors.100',
        propertyValue: '100',
        type: 'row',
        scale: [
          '#99c867',
          '#e43cd0',
          '#e2402a',
          '#66a8db',
          '#3f1a20',
          '#e5aa87',
          '#3c6b59',
          '#aa2a6b',
          '#e9b02e',
          '#7864dd',
          '#65e93c',
          '#5ce4ba',
          '#d0e0da',
          '#d796dd',
          '#64487b',
          '#e4e72b',
          '#6f7330',
          '#932834',
          '#ae6c7d',
          '#986717',
          '#e3cb70',
          '#408c1d',
          '#dd325f',
          '#533d1c',
          '#2a3c54',
          '#db7127',
          '#72e3e2',
          '#e2c1da',
          '#d47555',
          '#7d7f81',
          '#54ae9b',
          '#e9daa6',
          '#3a8855',
          '#5be66e',
          '#ab39a4',
          '#a6e332',
          '#6c469d',
          '#e39e51',
          '#4f1c42',
          '#273c1c',
          '#aa972e',
          '#8bb32a',
          '#bdeca5',
          '#63ec9b',
          '#9c3519',
          '#aaa484',
          '#72256d',
          '#4d749f',
          '#9884df',
          '#e590b8',
          '#44b62b',
          '#ad5792',
          '#c65dea',
          '#e670ca',
          '#e38783',
          '#29312d',
          '#6a2c1e',
          '#d7b1aa',
          '#b1e7c3',
          '#cdc134',
          '#9ee764',
          '#56b8ce',
          '#2c6323',
          '#65464a',
          '#b1cfea',
          '#3c7481',
          '#3a4e96',
          '#6493e1',
          '#db5656',
          '#747259',
          '#bbabe4',
          '#e33f92',
          '#d0607d',
          '#759f79',
          '#9d6b5e',
          '#8574ae',
          '#7e304c',
          '#ad8fac',
          '#4b77de',
          '#647e17',
          '#b9c379',
          '#8da8b0',
          '#b972d9',
          '#786279',
          '#7ec07d',
          '#916436',
          '#2d274f',
          '#dce680',
          '#759748',
          '#dae65a',
          '#459c49',
          '#b7934a',
          '#51c671',
          '#9ead3f',
          '#969a5c',
          '#b9976a',
          '#46531a',
          '#c0f084',
          '#76c146',
          '#bad0ad',
        ],
      },
    ],
    ui: [
      {
        name: 'Palette',
        colors: [
          '#ffffff',
          '#46c646',
          '#276e27',
          '#b6d7ea',
          '#7db8da',
          '#4477aa',
          '#8e477d',
          '#ffcf02',
          '#f8981d',
          '#f93f17',
          '#633d0c',
          '#b0afae',
          '#7b7a78',
          '#545352',
          '#000000',
        ],
      },
    ],
  },
  scales: [
    {
      name: 'Sequential Gradient',
      translation: 'properties.colorScheme.sequential',
      type: 'gradient',
      propertyValue: 'sg',
      scale: ['#662506', '#993404', '#cc4c02', '#ec7014', '#fb9a29', '#fec44f', '#fee391', '#fff7bc'],
    },
    {
      name: 'Sequential Classes',
      translation: 'properties.colorScheme.sequentialC',
      propertyValue: 'sc',
      type: 'class',
      scale: ['#662506', '#993404', '#cc4c02', '#ec7014', '#fb9a29', '#fec44f', '#fee391'],
    },
    {
      name: 'Diverging gradient',
      translation: 'properties.colorScheme.diverging',
      propertyValue: 'dg',
      type: 'gradient',
      scale: ['#ae1c3e', '#d24d3e', '#ed875e', '#f9bd7e', '#e6f5fe', '#b4ddf7', '#77b7e5', '#3a89c9', '#3d52a1'],
    },
    {
      name: 'Diverging Classes',
      translation: 'properties.colorScheme.divergingC',
      propertyValue: 'dc',
      type: 'class',
      scale: [
        '#ae1c3e',
        '#d24d3e',
        '#ed875e',
        '#f9bd7e',
        '#ffe3aa',
        '#e6f5fe',
        '#b4ddf7',
        '#77b7e5',
        '#3a89c9',
        '#3d52a1',
      ],
    },
  ],
};
