/**
 * @typedef {object}
 * @entry
 */
const properties = {
  /**
   * Current version of this generic object definition
   * @type {string}
   */
  //version: process.env.PACKAGE_VERSION,
  /**
   * @typedef
   */
  qHyperCubeDef: {
    qDimensions: [],
    qMeasures: [],
    /** @type {boolean} */
    qSuppressZero: false,
    /** @type {boolean} */
    qSuppressMissing: true,
    qInitialDataFetch: [{ qWidth: 500, qHeight: 10 }],
  },
  /**
   * @type {boolean=}
   */
  showTitles: false,
  /**
   * @type {string=}
   */
  title: "",
  /**
   * @type {string=}
   */
  subtitle: "",
  /**
   * @type {string=}
   */
  footnote: "",
  /**
   * @type {boolean=}
   */
  showDetails: false,
  color: {
    textColor: {
      index: -1,
      color: "#ff0000",
    },
  },
};

export default properties;
