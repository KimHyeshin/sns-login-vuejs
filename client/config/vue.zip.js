const path = require('path');
const merge = require('webpack-merge');
const prodModule = require('./vue.prod.js');
const ZipPlugin = require('zip-webpack-plugin');

// fileName format
const date = new Date();
function pad2(n) { return n < 10 ? '0' + n : n }
let dateStr = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() );
let fileName = `${require('../package.json').name}_${dateStr}.zip`;

module.exports = merge(prodModule, {
    configureWebpack: {
        plugins: [
            new ZipPlugin({
                // OPTIONAL: defaults to the Webpack output path (above)
                // can be relative (to Webpack output path) or absolute
                path: __dirname + '/../distZip',

                // OPTIONAL: defaults to the Webpack output filename (above) or,
                // if not present, the basename of the path
                filename: fileName,

                // OPTIONAL: see https://github.com/thejoshwolfe/yazl#addfilerealpath-metadatapath-options
                fileOptions: {
                    mtime: new Date(),
                    mode: 0o100664,
                    compress: true,
                    forceZip64Format: false,
                },

                // OPTIONAL: see https://github.com/thejoshwolfe/yazl#endoptions-finalsizecallback
                zipOptions: {
                    forceZip64Format: false,
                },
            })
        ]
    }
});
