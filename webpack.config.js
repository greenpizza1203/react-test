const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let config = {
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        pathinfo: false,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ["file-loader"]
            },
            {
                test: [/\.tsx?$/],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        },
                    },
                ],
            },

        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {stats: "minimal"},
};

module.exports = (env, options) => {
    config.mode = options.mode || 'production';
    if (config.mode === "production") {
        config.plugins.push(new CleanWebpackPlugin())

        config.optimization = {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        }
    }

    return config
}
