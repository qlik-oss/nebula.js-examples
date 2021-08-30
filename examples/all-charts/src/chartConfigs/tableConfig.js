export const tableConfig = {
  /** table config */
  type: "table",
  element: document.querySelector(".table_root"),
  fields: ["title", "budget", "rating", "=avg(revenue)"],
  properties: {
    title: "[Example #12]: table",
  },
};
