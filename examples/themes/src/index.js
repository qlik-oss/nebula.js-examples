import * as stardust from '@nebula.js/stardust';
import connect from './connect';
import connectLocal from './connect-local';
import theme from './sense-default';
import secondTheme from './sense-horizon';
import barChart from '@nebula.js/sn-bar-chart';
import lineChart from '@nebula.js/sn-line-chart';
import pie from '@nebula.js/sn-pie-chart';

const config = {
  local: true,
  url: "https://my-tenant.qlikcloud.com",
  webIntegrationId: "<REPLACE_ME>",
  appId: "<REPLACE_ME>",
};


const types = [
  {
    name: "barchart",
    load: () => Promise.resolve(barChart)
  },
  {
    name: "linechart",
    load: () => Promise.resolve(lineChart)
  },
  {
    name: "piechart",
    load: () => Promise.resolve(pie)
  }
];

const themes = [
  {
    id: 'myTheme',
    load: () => Promise.resolve(theme),
  },
  {
    id: 'otherTheme',
    load: () => Promise.resolve(secondTheme),
  },
];

let themeCounter = true;
let styleNode;
async function init() {
  let app;
  if(config.local) {
    app = await connectLocal({ appId: "apps/the_movies.qvf" });
  } else {
    app = await connect(config);
  }

  const nebbie = stardust.embed(app, {
      types,
      themes,
      context: {
        theme: 'myTheme',
      },
    });

    nebbie.selections().then((s) => s.mount(document.querySelector('.toolbar')));

    document.querySelector('.theme').addEventListener('click', () => {
      themeCounter ? nebbie.context({ theme: 'otherTheme' }) : nebbie.context({ theme: 'myTheme' });
      themeCounter = !themeCounter;
    });

    document.querySelector('.css').addEventListener('click', () => {
      if (styleNode) {
        document.head.removeChild(styleNode);
        styleNode = null;
      } else {
        const css = `
        div.njs-cell {
          background: maroon;
        }

        p.njs-cell-footer, h6.njs-cell-title, p.njs-cell-sub-title {
          color: white;
        }

        button.njs-cell-action {
          color: white;
        }
        `;
        styleNode = document.createElement('style');
        document.head.appendChild(styleNode);
        styleNode.appendChild(document.createTextNode(css));
      }
    });
    let typeIndex = 0;
    document.querySelectorAll('.object').forEach(async (el) => {
      if (types[typeIndex]) {
        nebbie.render({
          type: types[typeIndex].name,
          element: el,
          fields: ['title', '=rand()-0.5'],
          properties: {
            showTitles: true,
            title: 'Main title',
            subtitle: 'subtitle',
            footnote: 'footer',
          },
        });
        typeIndex++;
      }
    });
}

init();
