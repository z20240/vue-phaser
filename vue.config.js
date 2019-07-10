const URL_Loader = require('url-loader');

// vue.config.js
module.exports = {
    configureWebpack: {
        plugins: [
            URL_Loader,
        ]
    }
}