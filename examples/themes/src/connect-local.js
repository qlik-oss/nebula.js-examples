import enigma from 'enigma.js';

export default function connectLocal({ appId }) {
  const loadSchema = () =>
    fetch('https://unpkg.com/enigma.js/schemas/12.612.0.json').then((response) => response.json());

  const createConnection = () =>
    loadSchema().then((schema) =>
      enigma
        .create({
          schema,
          url: `ws://${window.location.hostname || 'localhost'}:9076/app/${appId}`,
        })
        .open()
        .then((qix) => qix.openDoc(`/${appId}`))
    );

  return createConnection().then(
    (app) => app
  );
}
