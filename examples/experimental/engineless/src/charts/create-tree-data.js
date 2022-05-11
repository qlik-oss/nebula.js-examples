function createAttribute(name, dataArray) {
  const qMax = Math.max(...dataArray.flat());
  const qMin = Math.min(...dataArray.flat());
  return {
      qMin,
      qMax,
      "qFallbackTitle": name,
      "qMinText": `${qMin}`,
      "qMaxText": `${qMax}`,
      "qNumFormat": {
        "qType": "R",
        "qnDec": 0,
        "qUseThou": 0,
        "qFmt": "########",
        "qDec": ".",
        "qThou": ","
      },
      "qIsAutoFormat": true,
      "id": "colorByAlternative",
      "matchMeasure": 0,
    //  "colorMapRef": "KBgAFet"
    }
}

function createMeasure(name, dataArray) {
  const qMax = Math.max(...dataArray.flat());
  const qMin = Math.min(...dataArray.flat());
  return {
    "qFallbackTitle": name,
    "qApprMaxGlyphCount": 9,
    "qCardinal": 0,
    "qSortIndicator": "D",
    "qNumFormat": {
      "qType": "R",
      "qnDec": 0,
      "qUseThou": 0,
      "qFmt": "########",
      "qDec": ".",
      "qThou": ","
    },
    qMin,
    qMax,
    "qIsAutoFormat": true,
    "qAttrExprInfo": [],
    "qAttrDimInfo": [],
    "qLibraryId": "KBgAFet",
    "qTrendLines": [],
    "autoSort": true,
    "cId": "gV",
    "numFormatFromTemplate": true,
    "quarantine": {
      "qNumFormat": {},
      "isCustomFormatted": false
    }
  };
}

function createDimension(name, data) {

  const qCardinal = data.length;
  return {
    "qFallbackTitle": name,
    "qApprMaxGlyphCount": 19,
    qCardinal,
    "qSortIndicator": "A",
    "qGroupFallbackTitles": [
      name
    ],
    "qGroupPos": 0,
   /* "qStateCounts": {
      "qLocked": 0,
      "qSelected": 5,
      "qOption": 0,
      "qDeselected": 0,
      "qAlternative": 12,
      "qExcluded": 0,
      "qSelectedExcluded": 0,
      "qLockedExcluded": 0
    },*/
  /*  "qTags": [
      "$ascii",
      "$text"
    ],*/
    "qDimensionType": "D",
    "qGrouping": "N",
   /* "qNumFormat": {
      "qType": "U",
      "qnDec": 0,
      "qUseThou": 0
    },*/
    "qIsAutoFormat": true,
    "qGroupFieldDefs": [
      name
    ],
    "qMin": "NaN",
    "qMax": "NaN",
    "qAttrExprInfo": [],
    "qAttrDimInfo": [],
    "qCardinalities": {
      qCardinal,
      "qHypercubeCardinal": qCardinal,
      "qAllValuesCardinal": qCardinal
    },
    "qLibraryId": "af474ee7-aa28-4870-9ffb-790f201c1cc3",
    "title": name,
    "autoSort": true,
    "cId": "HfsppgV",
    "othersLabel": "Others"
  };
}
let qElemNo = 0;
let dimIndex = 0;
let rawData = [];

function createDataPage(dataArray, firstDimData,secondDimData) {
  qElemNo = 0;
  rawData = dataArray;
  dimIndex = 0;

  const root = {
    "qValue": 0,
    "qElemNo": -1,
    "qGroupPos": 0,
    "qGroupSize": firstDimData.length,
    "qRow": 0,
    "qType": "R",
    "qValues": [],
    "qNodes": firstDimData.map(createDimNode),
    "qMaxPos": [],
    "qMinNeg": [],
    "qState": "L",
    "qTreePath": []
  }

  root.qNodes.forEach((node, index)=>{
    dimIndex = index;
    node.qNodes = secondDimData.map(createValueNode)
  })

  return root;
}

function createValueNode(qText,index, dimData) {
  return {
    qText,
    "qValue": "NaN",
    "qElemNo": index,
    "qGroupPos": index,
    "qGroupSize": dimData.length,
    "qRow": index,
    "qType": "N",
    "qValues": [
      {
        "qText": `${rawData[dimIndex][index]}`,
        "qValue": rawData[dimIndex][index],
      }
    ],
    "qNodes": [],
    "qAttrExps": {
      "qValues": [
        {
          "qText": `${rawData[dimIndex][index]}`,
          "qNum": rawData[dimIndex][index]
        }
      ]
    },
    "qMaxPos": [
      rawData[dimIndex][index]
    ],
    "qMinNeg": [
      0
    ],
    "qState": "S",
    /*"qTreePath": [
      1
    ]*/
  }
}

function createDimNode(qText,index, dimData ){
  return {
    qText,
    "qValue": 0,
    "qElemNo": index,
    "qGroupPos": index,
    "qGroupSize": dimData.length,
    "qRow": index,
    "qType": "G",
    "qValues": [
      {
        "qValue": null,
        "qText": ""
      }
    ],
    "qNodes": [],
    "qMaxPos": [],
    "qMinNeg": [],
    "qState": "L",
    //"qTreePath": [0]
  };
}


function createTree(dataArray, firstDimData, secondDimData) {
  let qTreeDataPages = [];
  const qDimensions = [];
  const qMeasures = [createMeasure("Measure", dataArray)];

  qDimensions.push(createDimension("Dim1",firstDimData))
  qDimensions.push(createDimension("Dim2",secondDimData))
  qDimensions[1].qAttrExprInfo = [createAttribute("Color",dataArray)];

  qTreeDataPages = [createDataPage(dataArray,firstDimData,secondDimData)]

  return { qTreeDataPages, qDimensions, qMeasures };
}

export default function createHyperCube(dataArray, firstDimData, secondDimData) {
  const { qTreeDataPages, qDimensions, qMeasures } = createTree(dataArray, firstDimData, secondDimData);

  return {
    "qSize": {
      "qcx": 1,
      "qcy": 25
    },
    qDimensionInfo: qDimensions,
    qMeasureInfo: qMeasures,
    "qEffectiveInterColumnSortOrder": [
      0,
      1
    ],
    "qGrandTotalRow": [],
    "qDataPages": [],
    "qPivotDataPages": [],
    "qStackedDataPages": [],
    "qMode": "T",
    "qNoOfLeftDims": 2,
    "qTreeNodesOnDim": [
      5,
      25
    ],
    "qColumnOrder": [],
    "qTreeDataPages": qTreeDataPages
  };

}