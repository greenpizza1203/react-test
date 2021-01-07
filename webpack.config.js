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
                use: [{
                    loader: "react-svg-loader", options: {
                        cleanupAttrs: false,
                        inlineStyles: false,
                        removeDoctype: false,
                        removeXMLProcInst: false,
                        removeComments: false,
                        removeMetadata: false,
                        removeTitle: false,
                        removeDesc: false,
                        removeUselessDefs: false,
                        removeXMLNS: false,
                        removeEditorsNSData: false,
                        removeEmptyAttrs: false,
                        removeHiddenElems: false,
                        removeEmptyText: false,
                        removeEmptyContainers: false,
                        removeViewBox: false,
                        cleanupEnableBackground: false,
                        minifyStyles: false,
                        convertStyleToAttrs: false,
                        convertColors: false,
                        convertPathData: false,
                        convertTransform: false,
                        removeUnknownsAndDefaults: false,
                        removeNonInheritableGroupAttrs: false,
                        removeUselessStrokeAndFill: false,
                        removeUnusedNS: false,
                        prefixIds: false,
                        cleanupIDs: false,
                        cleanupNumericValues: false,
                        cleanupListOfValues: false,
                        moveElemsAttrsToGroup: false,
                        moveGroupAttrsToElems: false,
                        collapseGroups: false,
                        removeRasterImages: false,
                        mergePaths: false,
                        convertShapeToPath: false,
                        convertEllipseToCircle: false,
                        sortAttrs: false,
                        sortDefsChildren: false,
                        removeDimensions: false,
                        removeAttrs: false,
                        removeAttributesBySelector: false,
                        removeElementsByAttr: false,
                        addClassesToSVGElement: false,
                        addAttributesToSVGElement: false,
                        removeOffCanvasPaths: false,
                        removeStyleElement: false,
                        removeScriptElement: false,
                        reusePaths: false,
                    }
                }]
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
    plugins: [],
    devServer: {stats: "minimal"},
};
module.exports = (env, options) => {
    config.plugins.push(new HtmlWebpackPlugin());

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
