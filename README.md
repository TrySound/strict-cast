# strict-cast

Strict type convertion for javascript. Inspired by [reason string convertion functions](https://reasonml.github.io/api/Pervasives.html#6_Stringconversionfunctions)

## Usage

```js
import { float_of_string } from "strict-cast";

float_of_string("10.5"); // 10.5
```

## API

```js
let string_of_bool: boolean => string;
```

Return the string representation of a boolean. As the returned values may be shared, the user should not modify them directly.

```js
let bool_of_string: string => boolean;
```

Convert the given string to a boolean. Raise `Invalid_argument "bool_of_string"` if the string is not "true" or "false".

```js
let string_of_float: float => string;
```

Return the string representation of a floating-point number.

```js
let float_of_string: string => float;
```

Convert the given string to a float. Raise `Failure "float_of_string"` if the given string is not a valid representation of a float.

## eslint plugin

The plugin is used to forbid the usage of unsafe `Number`, `Boolean` and `String` type conversions.

```
yarn add eslint-plugin-strict-cast --dev
```

```js
module.exports = {
  plugins: ["strict-cast"],
  rules: {
    "strict-cast/strict-cast": "error"
  }
};
```
