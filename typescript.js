module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["prettier/@typescript-eslint"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: "module",
    jsx: true,
    project: "tsconfig.json",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["error", "array"],
    "@typescript-eslint/await-thenable": "off", // requires type information
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Array: null,
          Object: {
            message: "Use `object` instead",
            fixWith: "object",
          },
          object: "Use `{}` instead",
          String: {
            message: "Use `string` instead",
            fixWith: "string",
          },
          Number: {
            message: "Use `number` instead",
            fixWith: "number",
          },
          BigInt: {
            message: "Use `bigint` instead",
            fixWith: "bigint",
          },
          Boolean: {
            message: "Use `boolean` instead",
            fixWith: "boolean",
          },
        },
      },
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    camelcase: "off",
    "@typescript-eslint/camelcase": [
      "error",
      { properties: "always", ignoreDestructuring: false },
    ],
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/generic-type-naming": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": ["error", "never"],
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/member-naming": [
      "error",
      {
        public: "^[a-zA-Z]",
        private: "^[a-zA-Z]",
        protected: "^[a-zA-Z]",
      },
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-angle-bracket-type-assertion": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-for-in-array": "off",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-triple-slash-reference": "error",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "off", // requires type information
    "@typescript-eslint/no-unnecessary-type-assertion": "off", // requires type information
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_.*$",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_.*$",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "off", // requires type information
    "@typescript-eslint/prefer-interface": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": [
      "error",
      {
        allowedPromiseNames: [],
        checkArrowFunctions: false,
        checkFunctionDeclarations: false,
        checkFunctionExpressions: false,
        checkMethodDeclarations: true,
      },
    ],
    "@typescript-eslint/restrict-plus-operands": "off", // requires type information
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/unified-signatures": "off",
  },
};
