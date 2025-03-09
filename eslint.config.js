import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      parser: tsparser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        localStorage: "readonly",
        fetch: "readonly",
        console: "readonly",
        alert: "readonly",
        HTMLElement: "readonly",
        HTMLInputElement: "readonly",
        HTMLTextAreaElement: "readonly",
        test: "readonly",  
        expect: "readonly", 
        beforeEach: "readonly", 
        afterEach: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "prettier": prettierPlugin,
    },
    rules: {
      "indent": ["error", 2],
      "prettier/prettier": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": ["error", { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_" }],

    },
    files: ["src/**/*.ts", "src/**/*.tsx"],
  },
  prettier
];
