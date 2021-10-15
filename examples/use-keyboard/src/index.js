import * as stardust from '@nebula.js/stardust';
import table from '@nebula.js/sn-table';
import connect from './connect';
import local from './local-chart';

var accessibility = true;

function init() {
  connect().then((app) => {
    const types = [
      {
        name: 'table',
        load: () => Promise.resolve(table),
      },
      {
        name: 'local',
        load: () => Promise.resolve(local),
      },
    ];

    const nebbie = stardust.embed(app, {
      types,
      context: {
        keyboardNavigation: accessibility,
      },
    });

    nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar')));

    var btn = document.querySelector('.toggleAccessibility');
    btn.addEventListener('click', () => {
      accessibility = !accessibility;
      nebbie.context({ keyboardNavigation: accessibility });
    });

    document.querySelectorAll('.object').forEach(async (el, typeIndex) => {
      if (types[typeIndex]) {
        const viz = await nebbie.render({
          type: types[typeIndex].name,
          element: el,
          fields: ['[10k Long dim]'],
        });
        console.log(viz);
        if (types[typeIndex].name === 'local') {
          // Make a copy of the local chart so that we make sure we can render it twice without interference
          nebbie.render({
            id: viz.id,
            element: document.querySelector('.copy'),
          });
        }
      }
    });
  });
}

init();
