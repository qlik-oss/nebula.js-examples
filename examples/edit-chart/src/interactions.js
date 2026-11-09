import setupPointerEvents from './pointer-events';

export default function setupInteractions({ element, input, model, emitter, edit }) {
  let clicks = 0;
  // Leave selection and dragging to the sheet until content editing is activated.
  const setEditing = (editing) => {
    input.readOnly = !editing;
    input.tabIndex = editing ? 0 : -1;
    input.style.pointerEvents = editing ? 'auto' : 'none';
    emitter.emit('njs-internal-edit-change', editing);
  };
  setEditing(false);

  const onClick = () => {
    if (pointerEvents.wasDragged()) return;
    // The first click selects the object; the next enables typing, only in edit mode.
    if (edit && input.readOnly && ++clicks >= 2) {
      setEditing(true);
      input.focus();
    }
  };
  const onBlur = async () => {
    if (input.readOnly) return;
    const text = input.value;
    clicks = 0;
    setEditing(false);
    // Persist on blur without replacing the object's other properties.
    const currentProperties = await model.getProperties();
    await model.setProperties({ ...currentProperties, text });
  };
  const deactivate = () => {
    input.blur();
    clicks = 0;
    setEditing(false);
  };
  const pointerEvents = setupPointerEvents(element, deactivate);

  element.addEventListener('click', onClick);
  input.addEventListener('blur', onBlur);
  return {
    deactivate,
    destroy() {
      deactivate();
      element.removeEventListener('click', onClick);
      input.removeEventListener('blur', onBlur);
      pointerEvents.destroy();
    },
  };
}