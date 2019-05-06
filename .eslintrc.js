module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: ["error", "never"],
    "prettier/prettier": [
      "warn",
      {
        semi: false
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
