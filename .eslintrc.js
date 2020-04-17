module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 1,
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 1,
    "no-unused-vars": [process.env.NODE_ENV === 'production' ? 2 : 1, {
      vars: 'local',
      args: 'after-used',
    }],
    "indent": [2, 2],
    "semi": [0],
    "quotes": [2, "double", "avoid-escape"], 
    "semi-spacing": [2, {"before": false, "after": true}]
  }
};

