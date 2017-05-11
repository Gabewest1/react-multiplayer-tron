const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: ["react-hot-loader/patch", 'webpack-hot-middleware/client', "./app/app.js"],
    output: {
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015", "stage-0"],
                    plugins: ["react-hot-loader/babel"]
                },
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    // module: {
    //     loaders: [
    //         {
    //             test:/\.js$/,
    //             loader: "babel",
    //             query: {
    //                 plugins: [
    //                     "react-hot-loader/babel"
    //                 ],
    //                 presets: ["react", "es2015"]
    //             }
                
    //         }
    //     ]
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin ()
    ],
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ]
    }

}