const modules = process.env.NODE_ENV === "cjs" ? "commonjs" : false;

module.exports = {
  presets: ["@babel/flow", ["@babel/env", { loose: true, modules }]]
};
