module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "extends": "standard",
	    "parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": [2, 4],
        "no-console": "off",
        "parser": "babel-eslint"
    }
};