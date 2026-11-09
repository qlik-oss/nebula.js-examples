export default function fixture() {
  return {
    type: 'edit-chart',
    genericObjects: [
      {
        getLayout() {
          return {
            qInfo: {
              qId: 'bb8',
            },
            visualization: 'edit-chart',
            text: 'Sample text',
          };
        },
      },
    ],
  };
}
