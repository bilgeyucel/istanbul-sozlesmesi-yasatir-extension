module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "@hipo/eslint-config-base",
    "@hipo/eslint-config-react",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks"],
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    // 👇🏻 Rules for hooks
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,

    // 👇🏻 these will be fixed inside `eslint-config-hipo-base`
    "no-undefined": 0,
    complexity: ["error", 20],
    "func-names": 0,
    "class-methods-use-this": 0,
    "id-length": 0,
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // 👇🏻 these will be fixed inside `eslint-config-hipo-react`
    "react/destructuring-assignment": 0,
    "react/no-array-index-key": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"]
      }
    ],
    "react/sort-comp": [
      2,
      {
        order: [
          "static-methods",
          "instance-variables",
          "getters",
          "setters",
          "lifecycle",
          "everything-else",
          "rendering"
        ],
        groups: {
          rendering: ["render", "/^render.+$/"]
        }
      }
    ],
    "react/require-optimization": 0,
    "react/no-multi-comp": [
      "error",
      {
        ignoreStateless: true
      }
    ],
    "react/no-did-update-set-state": 0,
    "react/jsx-handler-names": 0,
    "react/prop-types": 0
  }
};
