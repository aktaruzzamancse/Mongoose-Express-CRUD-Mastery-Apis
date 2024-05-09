import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    files: ["src/**/*.ts"],
    ignores: [
      "**/*.config.js",
      "!**/eslint.config.js",
      "**/node_modules/",
      ".git/",
    ],
    rules: {
      "no-unused-vars": "warn",
    },
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
  },
];
