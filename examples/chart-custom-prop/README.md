# Chart with custom property panel component

## Usage

This chart differes from others by using a custom property panel component in the `src/ext.js` file.
The component looks like this:

```
custom: {
	type: "string",
	label: "My Custom Component",
	component: {
		template: mainTemplate,
		controller: myController
	}
}
```
Where `mainTemplate` is an angular template and `myController` an Angular controller. The current example is very basic, but should extend to more advanced use cases as well.

The `ext.js` file is currently only used when running the extension inside the sense client, meaing it is actually only needed in that case.

When building the extensions we usually link in the `ext.js` by referencing it in the main js file of our extension (`index.js`):

```
export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    ext,
    component() {
      ...
    },
  };
}
```

But in the case of using Angular in our `ext.js` it is easier to externalize it and instead reference it through the `nebula sense` command:
```
nebula sense --ext src/ext.js
```
