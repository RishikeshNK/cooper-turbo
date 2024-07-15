import baseConfig, { restrictEnvAccess } from "@cooper/eslint-config/base";
import reactConfig from "@cooper/eslint-config/react";
import nextjsConfig from "@cooper/eslint-config/web";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
