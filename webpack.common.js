const path = require('path')
module.exports = {
    entry: './src/app.js',
    devtool: 'inline-source-map',
    optimization: {
        minimize: false
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public/assets/compiledJS"),
        clean: true,
    }
};