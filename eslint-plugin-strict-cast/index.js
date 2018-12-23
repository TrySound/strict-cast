const strictCastRule = {
  schema: [],
  create: cx => {
    return {
      "CallExpression[callee.name='Number']": node => {
        cx.report({
          message: "Number() is not allowed. Use one of strict-cast functions.",
          node
        });
      },
      "CallExpression[callee.name='Boolean']": node => {
        cx.report({
          message:
            "Boolean() is not allowed. Use one of strict-cast functions.",
          node
        });
      },
      "CallExpression[callee.name='String']": node => {
        cx.report({
          message: "String() is not allowed. Use one of strict-cast functions.",
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
