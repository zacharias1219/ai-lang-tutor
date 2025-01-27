import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow the use of `any` (Not recommended for production, better to fix types explicitly)
      "@typescript-eslint/no-explicit-any": "off",
      
      // Disable warnings for unused variables, but still show errors for unused imports
      "@typescript-eslint/no-unused-vars": ["warn", { vars: "all", args: "none", ignoreRestSiblings: true }],
      
      // Allow the use of <img> instead of requiring <Image /> in Next.js
      "@next/next/no-img-element": "off",
      
      // Allow missing alt text in <img> (Not recommended for accessibility; add alt where possible)
      "jsx-a11y/alt-text": "off",
    },
  },
];

export default eslintConfig;
