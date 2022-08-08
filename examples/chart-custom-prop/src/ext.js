export default {
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
      custom: {
        type: "string",
        label: "My Custom Component",
        component: {
          template: '<div style="color:red">HERE BE STUFF</div>',
          controller: ["$scope", function ($scope) {}],
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
