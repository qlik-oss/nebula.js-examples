import {
  useEffect,
  useElement,
  useEmitter,
  useImperativeHandle,
  useInteractionState,
  useLayout,
  useModel,
  useRef,
} from '@nebula.js/stardust';
import properties from './object-properties';
import data from './data';
import ext from './ext';
import render from './render';
import setupInteractions from './interactions';
/**
 * Entrypoint for your sense visualization
 * @param {object} galaxy Contains global settings from the environment.
 * Useful for cases when stardust hooks are unavailable (ie: outside the component function)
 * @param {object} galaxy.anything Extra environment dependent options
 * @param {object=} galaxy.anything.sense Optional object only present within Sense,
 * see: https://qlik.dev/extend/build-extension/in-qlik-sense
 */
export default function supernova(galaxy) {
  return {
    qae: {
      properties,
      data,
    },
    ext: ext(galaxy),
    component() {
      const element = useElement();
      const layout = useLayout();
      const model = useModel();
      const emitter = useEmitter();
      const interactions = useInteractionState();
      const handlers = useRef();

      // Sense can deactivate the object without an outside click or input blur.
      useImperativeHandle(() => ({
        updateActiveState(active) {
          if (!active) handlers.current?.deactivate();
        },
      }), []);

      useEffect(() => {
        const input = render(element, layout.text);
        handlers.current = setupInteractions({ element, input, model, emitter, edit: interactions.edit });
        return () => {
          handlers.current.destroy();
          handlers.current = undefined;
        };
      }, [element, layout.text, model, emitter, interactions.edit]);
    },
  };
}
