const { RuleTester } = require("eslint");
const plugin = require("./eslint-plugin.js");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 8 } });

ruleTester.run("strict-cast", plugin.rules["strict-cast"], {
  invalid: [
    {
      code: `Number(value)`,
      errors: [
        {
          message: `Number() is not allowed. Use one of strict-cast functions.`
        }
      ]
    },

    {
      code: `Boolean(value)`,
      errors: [
        {
          message: `Boolean() is not allowed. Use one of strict-cast functions.`
        }
      ]
    },

    {
      code: `String(value)`,
      errors: [
        {
          message: `String() is not allowed. Use one of strict-cast functions.`
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
