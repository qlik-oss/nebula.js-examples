export default function ext(env) {

  // https://qlik.dev/apis/javascript/nebula-js/#definitions-galaxy
  // https://qlik.dev/extend/build-extension/in-qlik-sense
  const { anything } = env;
  const { sense } = anything;

  if(sense) {
    // We are inside sense and not in a Nebula mashup environment
    const {theme, navigation} = sense;
  }

return {
  definition: {
    type: "items",
    component: "accordion",
    items: {
      data: {
        uses: "data",
        items: {
          dimensions: {
            disabledRef: "",
            show: false,
          },
        },
      },
      color: {
        type: "items",
        translation: "Coloring",
        items: {
          textColor: {
            component: "color-picker",
            type: "object",
            ref: "color.textColor",
            translation: "properties.color",
          },
        },
      },
    },
  },
  support: {
    snapshot: false,
    export: true,
    sharing: false,
    exportData: true,
    viewData: true,
  },
};
}