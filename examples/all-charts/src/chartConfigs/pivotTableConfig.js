export const pivotTableConfig = {
    /** pivot table config */
    type: "pivot-table",
    element: document.querySelector(".pivot_table_root"),
    fields: ["title", "budget", "rating", "=avg(revenue)"],
    properties: {
      title: "[Example #14]: pivot table",
    },
  };
  