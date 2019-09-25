const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    publicPath: './',
    configureWebpack: {
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
};
