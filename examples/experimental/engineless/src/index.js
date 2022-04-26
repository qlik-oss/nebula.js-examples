import { embed, __DO_NOT_USE__ } from '@nebula.js/stardust/dist/stardust.dev';
import bar from '@nebula.js/sn-bar-chart';
import line from '@nebula.js/sn-line-chart';
import mekko from '@nebula.js/sn-mekko-chart';
import pie from '@nebula.js/sn-pie-chart';
import grid from '@nebula.js/sn-grid-chart';

import renderBar from './charts/shap-bar';
import renderLine from './charts/stats-line';
import renderGrid from './charts/grid';

async function init() {
  //connect().then(async (app) => {
  const types = [
    {
      name: 'bar',
      load: () => Promise.resolve(bar),
    },
    {
      name: 'line',
      load: () => Promise.resolve(line),
    },
    {
      name: 'mekko',
      load: () => Promise.resolve(mekko),
    },
    {
      name: 'pie',
      load: () => Promise.resolve(pie),
    },
    {
      name: 'grid',
      load: () => Promise.resolve(grid),
    },
  ];

  const mockedApp = await __DO_NOT_USE__.EnigmaMocker.fromGenericObjects();

  const nebbie = embed(mockedApp, {
    types,
    context: {
      constraints: {
        select: true,
      },
    },
  });


  const elements = document.querySelectorAll('.object');

  await renderBar(nebbie, elements[0]);
  await renderLine(nebbie, elements[1]);
  const viz = await renderGrid(nebbie, elements[2]);

}

init();
