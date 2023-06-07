const path = require('path')


module.exports = {
    mode: 'production',
    entry: "./src/index.tsx",
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'widget'),
        libraryTarget: 'amd',
        publicPath: '/'
    },

    module: {
        rules: [   //загрузчик для jsx
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-typescript", "@babel/preset-react"]
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
}