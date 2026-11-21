import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules/", "data/"] },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node },
    },
    rules: {
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-implicit-globals": "error",
      "no-shadow": "error",
      curly: ["error", "multi-line"],
    },
  },
];
