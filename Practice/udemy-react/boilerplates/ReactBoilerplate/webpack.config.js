module.exports = {
    //debugger
    devtool: 'cheep-module-eval-source-map',
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        alias: {
            //Main: path.resolve(__dirname, 'app/components/Main.jsx')
        },
        extensions: ['', '.js', 'jsx']
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};


//var path = require("path");
//var webpack = require('webpack');
//
//module.exports = {
//    //sourcemap
//    devtool: 'cheep-module-eval-source-map',
//    entry: [
//        "script!jquery/dist/jquery.min.js",
//        "script!foundation-sites/dist/js/foundation.min.js",
//        "./app/app.jsx"
//    ],
//    externals: {
//        jquery: 'jQuery'
//    },
//    plugins: [
//        new webpack.ProvidePlugin({
//            '$': 'jquery',
//            'jQuery': 'jquery'
//        })
//    ],
//    output: {
//        //publicPath: "/",
//        path: __dirname,
//        filename: "./public/bundle.js"
//    },
//    resolve: {
//        alias: {
//            Main: path.resolve(__dirname, 'app/components/Main.jsx'),
//            Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
//            Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
//            WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx'),
//            WeatherMessage: path.resolve(__dirname, 'app/components/WeatherMessage.jsx'),
//            About: path.resolve(__dirname, 'app/components/About.jsx'),
//            Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
//            Greeter: path.resolve(__dirname, 'app/components/Greeter.jsx'),
//            openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx'),
//            ErrorModal: path.resolve(__dirname, 'app/components/ErrorModal.jsx'),
//            applicationStyles: path.resolve(__dirname, 'app/styles/app.scss')
//        },
//        extensions: ['', '.js', 'jsx']
//    },
//    module: {
//        loaders: [
//            {
//                loader: "babel-loader",
//                query: {
//                    presets: ['react', 'es2015', 'stage-0']
//                },
//                test: /\.jsx?$/,
//                exclude: /(node_modules|bower_components)/
//            }
//        ]
//    }
//};