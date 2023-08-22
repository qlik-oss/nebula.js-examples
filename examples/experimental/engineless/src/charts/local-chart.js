import { useElement, useKeyboard, useEffect, useOptions, useState, useEmbed, useSelections } from '@nebula.js/stardust';

export default function supernova(env) {
  const { sense } = env;
  return {
    qae: {
      properties: {},
      data: {},
    },
    component() {
      const element = useElement();
      const selections = useSelections();
      if (!selections) {
        debugger;
      }
      const [listener, setListener] = useState();

      const keyboard = useKeyboard();
      useEffect(() => {
        if (element) {
          const but = element.querySelector('.button');
          if (but) {
            but.setAttribute('tabIndex', keyboard.active || !keyboard.enabled ? 0 : -1);
            keyboard.active || !keyboard.enabled ? (but.innerHTML = 'CLICK ME') : (but.innerHTML = 'HELLO');
            keyboard.enabled && keyboard.active && but.focus();
            if (keyboard.enabled && keyboard.active && !listener) {
              const exitFunc = (e) => {
                if (e.key === 'Escape' && keyboard && keyboard.enabled && keyboard.active) {
                  keyboard.blur(true);
                  but.blur();
                }
              };
              but.addEventListener('keyup', exitFunc);
              setListener({ fn: exitFunc });
            }
          }
        }
      }, [keyboard, element]);

      useEffect(() => {
        if (element) {
          element.innerHTML = `<button class="button" tabIndex="-1">HELLO</button><div class="counter">0</div>`;
          var btn = element.querySelector('.button');
          btn.addEventListener('click', () => {
            !keyboard.active && keyboard.enabled && keyboard.focus();
            element.querySelector('.counter').innerText = +element.querySelector('.counter').innerText + 1;
          });
        }
      }, [element]);

    },

    ext: {
      definition: {},
      softDefinition: {},
      support: {},
    },
  };
}
