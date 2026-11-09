# edit-chart

One full-size text input demonstrating opt-in content editing on a Sense sheet.

## Run

```sh
npm install
npm start
```

Use `npm run sense` to connect to Sense and test sheet editing.

## Interaction

In sheet edit mode, select the object, then click it again to edit its text.
Until activated, the read-only input ignores pointer events so the sheet can
handle selection and dragging. The click counter and
`njs-internal-edit-change` event follow sn-text's interaction pattern; the event
is an internal Sense integration, not a public Stardust API.

Blurring the input (including clicking outside) exits content editing and saves
`text` with `model.setProperties()`, preserving the object's other properties.
Analysis mode is always read-only. Leaving edit mode also blurs any active input.
