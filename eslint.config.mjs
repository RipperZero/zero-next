import configPrettier from "eslint-config-prettier/flat";
import reactCompiler from "eslint-plugin-react-compiler";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// const eslintConfig = [XXXXX];

const eslintConfig = tseslint.config(
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  reactCompiler.configs.recommended,
  configPrettier,
  { ignores: [".next", "node_modules"] },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
);

export default eslintConfig;
