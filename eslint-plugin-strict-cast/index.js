const strictCastRule = {
  schema: [],
  create: cx => {
    return {
      "CallExpression[callee.name='Number']": node => {
        cx.report({
          message: "Number() is not allowed. Use float_of_string instead.",
          node
        });
      },
      "CallExpression[callee.name='Boolean']": node => {
        cx.report({
          message:
            "Boolean() is not allowed. Compare with falsy values instead.",
          node
        });
      },
      "CallExpression[callee.name='String']": node => {
        cx.report({
          message:
            "String() is not allowed." +
            " Use string_of_bool or string_of_float instead.",
          node
        });
      }
    };
  }
};

module.exports = {
  rules: {
    "strict-cast": strictCastRule
  }
};
