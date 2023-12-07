import { embed, EnigmaMocker } from '@nebula.js/stardust/dist/stardust.dev';

import bar from '@nebula.js/sn-bar-chart';
import line from '@nebula.js/sn-line-chart';

import {getBarLayout, getLineLayout} from "./charts/data"

async function init() {
  const types = [
    {
      name: 'barchart',
      load: () => Promise.resolve(bar),
    },
    {
      name: 'linechart',
      load: () => Promise.resolve(line),
    },
  ];



  const mockedApp = await EnigmaMocker.fromGenericObjects();

  const nebbie = embed(mockedApp, {
    types,
    context: {
      constraints: {
        select: true,
      },
    },
  });


  const elements = document.querySelectorAll('.object');

  nebbie.render({
    type: "barchart",
    element: elements[0],
    options: {
      // This "unlocks" the object, meaning it renders in its full container at zoom 1
      freeResize: true
    },
    properties: {
      _mock: getBarLayout()
    }
  });

  nebbie.render({
    type: "linechart",
    element: elements[1],
    options: {
      // This "unlocks" the object, meaning it renders in its full container at zoom 1
      freeResize: true
    },
    properties: {
      _mock: getLineLayout()
    }
  });

}

init();
