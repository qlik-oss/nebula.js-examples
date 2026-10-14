<p align="center">
  <img width="500" src="./assets/nebula.png" alt="nebula.js logo" />
</p>

## Example projects using [Nebula.js](https://github.com/qlik-oss/nebula.js)

* Using chart core packages
  * [Basic setup with webpack](https://github.com/qlik-oss/nebula.js-examples/tree/main/examples/simple-setup)
  * [Example with all charts](https://github.com/qlik-oss/nebula.js-examples/tree/main/examples/all-charts/src)

* Building mashups
  * [Using the keyboard](https://github.com/qlik-oss/nebula.js-examples/tree/main/examples/use-keyboard)
  * [Using themes](https://github.com/qlik-oss/nebula.js-examples/tree/main/examples/themes)

* Building charts
  * [Simple chart using data](https://github.com/qlik-oss/nebula.js-examples/tree/main/examples/simple-chart)

## Dependency Policy

These examples target the current Nebula.js release, so all `@nebula.js/*`
dependencies, including peer dependencies, use `latest`. Examples using the
Nebula CLI require Node.js 24 or newer. Other dependencies retain compatible
versions rather than automatically opting into breaking releases.

Lockfiles are not committed and are ignored to reduce maintenance across the
independent examples. For a fresh install without a lockfile, run
`npm install --package-lock=false` or `pnpm install --lockfile=false` in the
example directory. Existing installations may need updating to resolve `latest`
again. Do not use `npm ci` or frozen-lockfile installs for these examples.

The core-bundle examples explicitly provide their charts' React, MUI, Picasso,
and Hammer dependencies. The all-charts example aliases the KPI core's legacy
`@material-ui/icons` import to `@mui/icons-material` to avoid Material UI 4 and
its incompatible React peers. Browser polyfills are retained where required.

The themes, keyboard, and engineless examples disable source maps because current
published Nebula bundles reference missing upstream build files. Re-enable maps
when those upstream packages provide valid maps.

Floating versions reduce update churn but make installs non-reproducible and can
introduce breaking changes or newly compromised packages. They do not guarantee
security fixes. Production projects should use committed lockfiles, reviewed
dependency updates, and vulnerability scanning.

## License

`https://github.com/qlik-oss/nebula.js-examples` is [MIT licensed](./LICENSE).
