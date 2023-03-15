export const actionButtonConfig = {
  /** action button config */
  type: "action-button",
  element: document.querySelector(".action_button_root"),
  properties: {
    actions: [
      {
        actionType: "selectValues",
        actionLabel: "select A and B",
        field: "title",
        value: "8 Mile;17 Again",
        softLock: false,
      },
    ],
    style: {
      label: "Make selections",
    },
  },
};
