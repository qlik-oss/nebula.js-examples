export default function setupPointerEvents(element, onOutsidePointerDown) {
  let pointerStart;
  let dragged = false;

  const onPointerDown = (event) => {
    dragged = false;
    pointerStart = element.contains(event.target) ? event : undefined;
    if (!pointerStart) onOutsidePointerDown();
  };
  const onPointerMove = (event) => {
    // Allow small pointer wobbles, but remember drags even if they return to the start.
    if (pointerStart && event.pointerId === pointerStart.pointerId &&
        Math.hypot(event.clientX - pointerStart.clientX, event.clientY - pointerStart.clientY) > 5) {
      dragged = true;
    }
  };
  const onPointerUp = (event) => {
    onPointerMove(event);
    pointerStart = undefined;
  };
  const onPointerCancel = () => {
    dragged = true;
    pointerStart = undefined;
  };

  // Capture movement outside the object, even if the sheet stops event propagation.
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('pointermove', onPointerMove, true);
  document.addEventListener('pointerup', onPointerUp, true);
  document.addEventListener('pointercancel', onPointerCancel, true);
  return {
    // Keep this flag until the next press: browsers may emit a click after pointerup.
    wasDragged: () => dragged,
    destroy() {
      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('pointermove', onPointerMove, true);
      document.removeEventListener('pointerup', onPointerUp, true);
      document.removeEventListener('pointercancel', onPointerCancel, true);
    },
  };
}