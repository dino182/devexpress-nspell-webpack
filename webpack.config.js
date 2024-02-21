const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        richedit: "./index.ts",
        'richedit.min': "./index.ts"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.(aff|dic)$/,
                type: 'asset/source'
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    experiments: {
        outputModule: true
    },
    output: {
        filename: '[name].js',
        library: {
            type: 'module'
        }
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({test: /\.min\.js$/})]
    }
};