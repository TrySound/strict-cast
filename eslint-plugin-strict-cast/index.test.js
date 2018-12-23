const { RuleTester } = require("eslint");
const plugin = require("./index.js");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 8 } });

ruleTester.run("strict-cast", plugin.rules["strict-cast"], {
  invalid: [
    {
      code: `Number(value)`,
      errors: [
        {
          message: `Number() is not allowed. Use float_of_string instead.`
        }
      ]
    },

    {
      code: `Boolean(value)`,
      errors: [
        {
          message: `Boolean() is not allowed. Compare with falsy values instead.`
        }
      ]
    },

    {
      code: `String(value)`,
      errors: [
        {
          message:
            `String() is not allowed.` +
            ` Use string_of_bool or string_of_float instead.`
        }
      ]
    }
  ],
  valid: [
    {
      code: `new Number(value)`
    },

    {
      code: `new Boolean(value)`
    },

    {
      code: `new String(value)`
    }
  ]
});
