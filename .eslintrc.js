module.exports = {
  "env": {
    "browser": true,
    "jest": true,
    "node": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "indent": ["error", 2],
    "camelcase": [2, {"properties": "always"}],
    "comma-dangle": [2, "never"],
    "dot-location": [2, "property"],
    "lines-around-comment": 0,
    "newline-after-var": 0,
    "no-alert": 2,
    "no-debugger": 2,
    "no-else-return": 2,
    "no-nested-ternary": 0,
    "no-param-reassign": 0,
    "no-restricted-properties": 0,
    "no-unmodified-loop-condition": 0,
    "no-useless-escape": 0,
    "no-var": 2,
    "object-curly-spacing": [2, "always"],
    "operator-assignment": 0,
    "operator-linebreak": [2, "after"],
    "padding-line-between-statements": 0,
    "prefer-arrow-callback": 0,
    "prefer-spread": 0,
    "react/jsx-curly-spacing": [2, "always"],
    "react/prop-types": 0,
    "semi": [2, "always"],
    "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
    "strict": 0,
    "valid-jsdoc": ["error", { prefer: { "returns": "return"}}],
    "quotes": [2, "single"]
  }
};
