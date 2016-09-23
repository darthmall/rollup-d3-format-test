Test project for a bug using rollup with D3 micro-libraries.

# Setup

```
$ npm install
$ npm run build
```

That will install the dependencies and build the simple JavaScript file.

If you grep the generated `main.js` for `defaultLocale` you'll find that it is
called, but the function definition is not included.

You can also start up a webserver and load `index.html` in a browser. In the
console you'll see a `ReferenceError` stating that `defaultLocale is not
defined.` It is visible in the sourcemap, but it isn't present in the
generated file.
