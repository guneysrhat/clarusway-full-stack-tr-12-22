# Jest with ES Modules

## Setup

In order to use ECMAScript module syntax: 

**`package.json` file**

```json
{
  "name": "learn-jest",
  "version": "1.0.0",
  "description": "",
  "type": "module", <-- add this line
  "main": "index.js",
  "scripts": {
    "test": "jest --coverage" <<- update this line to the line below
    "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest --coverage"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cross-env": "^7.0.3", <-- install this package to properly pass environment variables
    "jest": "^27.5.1"
  }
}
```

> *Please note that, comments in the`package.json` file is not permitted.*

**Install packages:**

```sh
npm install jest cross-env -D
```

**`math.js` file export syntax:**

```js
export { calculateTotal, fahrenheitToCelsius, celsiusToFahrenheit, fibonacci };
```

**`math.test.js` file import syntax:**

```js
import { calculateTotal, celsiusToFahrenheit, fahrenheitToCelsius, fibonacci } from './math';
```

**Running tests:** nothing changed

```sh
npm test
```



## ECMAScript Modules<sup>[1](https://jestjs.io/docs/ecmascript-modules)</sup>

Jest ships with *experimental* support for ECMAScript Modules (ESM).

> Note that due to its experimental nature there are many bugs and missing features in Jest's implementation, both known and unknown. You should check out the [tracking issue](https://github.com/facebook/jest/issues/9430) and the [label](https://github.com/facebook/jest/labels/ES Modules) on the issue tracker for the latest status.

> Also note that the APIs Jest uses to implement ESM support is still [considered experimental by Node](https://nodejs.org/api/vm.html#vm_class_vm_module) (as of version `14.13.1`).

With the warnings out of the way, this is how you activate ESM support in your tests.

1. Ensure you either disable [code transforms](https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object) by passing `transform: {}` or otherwise configure your transformer to emit ESM rather than the default CommonJS (CJS).

2. Execute `node` with `--experimental-vm-modules`, e.g. `node --experimental-vm-modules node_modules/jest/bin/jest.js` or `NODE_OPTIONS=--experimental-vm-modules npx jest` etc..

   On Windows, you can use [`cross-env`](https://github.com/kentcdodds/cross-env) to be able to set environment variables.

   If you use Yarn, you can use `yarn node --experimental-vm-modules $(yarn bin jest)`. This command will also work if you use [Yarn Plug'n'Play](https://yarnpkg.com/features/pnp).

3. Beyond that, we attempt to follow `node`'s logic for activating "ESM mode" (such as looking at `type` in `package.json` or `.mjs` files), see [their docs](https://nodejs.org/api/esm.html#esm_enabling) for details.

4. If you want to treat other file extensions (such as `.jsx` or `.ts`) as ESM, please use the [`extensionsToTreatAsEsm` option](https://jestjs.io/docs/configuration#extensionstotreatasesm-arraystring).



## Enabling ECMAScript Modules<sup>[2](https://nodejs.org/api/esm.html)</sup>

Node.js has two module systems: CommonJS modules and ECMAScript modules.

Authors can tell Node.js to use the ECMAScript modules loader via the .mjs file extension, the package.json "type" field, or the --input-type flag. Outside of those cases, Node.js will use the CommonJS module loader. See Determining module system for more details.



## Determining module system<sup>[3](https://nodejs.org/api/packages.html#determining-module-system)</sup>

Node.js will treat the following as [ES modules](https://nodejs.org/api/esm.html) when passed to `node` as the initial input, or when referenced by `import` statements or `import()` expressions:

- Files with an `.mjs` extension.
- Files with a `.js` extension when the nearest parent `package.json` file contains a top-level [`"type"`](https://nodejs.org/api/packages.html#type) field with a value of `"module"`.
- Strings passed in as an argument to `--eval`, or piped to `node` via `STDIN`, with the flag `--input-type=module`.

Node.js will treat as [CommonJS](https://nodejs.org/api/modules.html) all other forms of input, such as `.js` files where the nearest parent `package.json` file contains no top-level `"type"` field, or string input without the flag `--input-type`. This behavior is to preserve backward compatibility. However, now that Node.js supports both CommonJS and ES modules, it is best to be explicit whenever possible. Node.js will treat the following as CommonJS when passed to `node` as the initial input, or when referenced by `import` statements, `import()` expressions, or `require()` expressions:

- Files with a `.cjs` extension.
- Files with a `.js` extension when the nearest parent `package.json` file contains a top-level field [`"type"`](https://nodejs.org/api/packages.html#type) with a value of `"commonjs"`.
- Strings passed in as an argument to `--eval` or `--print`, or piped to `node` via `STDIN`, with the flag `--input-type=commonjs`.

Package authors should include the [`"type"`](https://nodejs.org/api/packages.html#type) field, even in packages where all sources are CommonJS. Being explicit about the `type` of the package will future-proof the package in case the default type of Node.js ever changes, and it will also make things easier for build tools and loaders to determine how the files in the package should be interpreted.



## References

1. https://jestjs.io/docs/ecmascript-modules
2. https://nodejs.org/api/esm.html
3. https://nodejs.org/api/packages.html#determining-module-system